const { evaluatePolicy } = require("../core/policyEngine");
const { generateTraceId } = require("../utils/trace");
const { logEvent } = require("../audit/logger");
const { normalizeRequest } = require("../core/schema");

function handleRequest(input) {

    const traceId = generateTraceId();

    const request = normalizeRequest(input, traceId);

    const decision = evaluatePolicy(request);

    const log = {
        traceId,
        request,
        decision,
        timestamp: new Date().toISOString()
    };

    logEvent(log);

    return {
        traceId,
        ...decision
    };
}

module.exports = { handleRequest };
