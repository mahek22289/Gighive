const jwt = require('jsonwebtoken');

// 🔐 JWT authentication middleware
function auth(req, res, next) {
  // Accept both x-auth-token and Authorization: Bearer <token>
  const token =
    req.header('x-auth-token') ||
    (req.header('Authorization')?.startsWith('Bearer ')
      ? req.header('Authorization').split(' ')[1]
      : req.header('Authorization'));

  if (!token) {
    console.warn('Authorization failed: No token provided');
    return res.status(401).json({
      code: 'AUTH_FAILED',
      msg: 'No token, authorization denied',
    });
  }

  try {
    console.log('🔐 Verifying token for request:', req.originalUrl);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Handle both payload styles: { user: { id, role } } OR { id, role }
    if (decoded.user && decoded.user.id) {
      req.user = decoded.user;
    } else if (decoded.id) {
      req.user = { id: decoded.id, role: decoded.role };
    } else {
      console.error('Decoded token missing user info:', decoded);
      return res.status(401).json({
        code: 'INVALID_TOKEN',
        msg: 'Token is not valid',
      });
    }

    console.log('✅ Token verified. Assigned req.user:', req.user);
    next();
  } catch (err) {
    console.error('❌ Token verification error:', err.message);
    return res.status(401).json({
      code: 'INVALID_TOKEN',
      msg: 'Token is not valid',
    });
  }
}

// 🔍 Generic role verification middleware
function verifyRole(requiredRole) {
  return (req, res, next) => {
    const userRole = String(req.user?.role || '').toLowerCase().trim();
    console.log(`🔍 Role check for ${requiredRole}:`, userRole);

    if (userRole !== requiredRole) {
      console.warn(`⛔ Access denied. Role found: ${req.user?.role}`);
      return res.status(403).json({ msg: 'Access denied' });
    }

    next();
  };
}

// ✅ Specific role wrappers
const verifyAdmin = verifyRole('admin');
const verifyEmployer = verifyRole('employer');
const verifyStudent = verifyRole('student');

module.exports = {
  auth,
  verifyRole,
  verifyAdmin,
  verifyEmployer,
  verifyStudent,
};
