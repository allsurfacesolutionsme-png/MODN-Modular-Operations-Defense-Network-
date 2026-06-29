function generateTraceId() {
    return "MODN-" + Math.random().toString(36).substring(2, 10).toUpperCase();
}

module.exports = { generateTraceId };
