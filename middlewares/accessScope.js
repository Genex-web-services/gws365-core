const accessScope = (level) => {
  return async (req, res, next) => {
    const user = req.user;

    if (level === 0) {
      req.filter = {}; // Full access
    } else if (level === 1) {
      req.filter = { tenantId: { $in: user.assignedTenantIds } };
    } else if (level === 2) {
      req.filter = { tenantId: user.tenantId };
    } else {
        req.filter = { tenantId: user.tenantId, userId: user._id };
    }

    next();
  };
};

module.exports = accessScope;
