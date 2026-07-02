export const requireAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const token = authHeader.split(" ")[1];
    
    // Legacy system used simple base64url encoded payload for tokens
    const payloadStr = Buffer.from(token, "base64url").toString("utf8");
    const payload = JSON.parse(payloadStr);
    if (payload.userId && !payload.id) payload.id = payload.userId;

    if (payload.exp < Date.now()) {
      return res.status(401).json({ error: "Token expired" });
    }

    if (!payload.isAdmin) {
      return res.status(403).json({ error: "Forbidden: Admin access required" });
    }

    req.admin = payload; // Attach to request for controllers to use
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export const requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const token = authHeader.split(" ")[1];
    const payloadStr = Buffer.from(token, "base64url").toString("utf8");
    const payload = JSON.parse(payloadStr);
    
    if (payload.exp < Date.now()) {
      return res.status(401).json({ error: "Token expired" });
    }

    req.user = payload; // Attach to request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
