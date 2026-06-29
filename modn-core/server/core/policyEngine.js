function evaluatePolicy(req) {

    const { user, action, domain, risk } = req;

    if (domain?.includes("tracker")) {
        return {
            decision: "DENY",
            reason: "Tracking domain blocked",
            policy: "SECURITY_CORE"
        };
    }

    if (risk > 0.8) {
        return {
            decision: "DENY",
            reason: "High risk detected",
            policy: "RISK_ENGINE"
        };
    }

    if (user === "guest" && action === "api_access") {
        return {
            decision: "RESTRICT",
            reason: "Guest access limited",
            policy: "IDENTITY_CONTROL"
        };
    }

    return {
        decision: "ALLOW",
        reason: "Policy passed",
        policy: "DEFAULT"
    };
}

module.exports = { evaluatePolicy };
