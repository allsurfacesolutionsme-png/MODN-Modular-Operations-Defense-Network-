function normalizeRequest(input, traceId) {
    return {
        traceId,
        user: input.user || "unknown",
        action: input.action || "none",
        domain: input.domain || "",
        risk: input.risk || 0,
        metadata: input.metadata || {},
        headers: input.headers || {}
    };
}

module.exports = { normalizeRequest };
