function analyzeRisk(req) {

    let score = 0;

    if (req.domain?.includes("api")) score += 0.3;
    if (req.action === "download") score += 0.2;
    if (req.domain?.includes("unknown")) score += 0.5;

    return {
        riskScore: Math.min(score, 1),
        recommendation: score > 0.7 ? "RESTRICT" : "ALLOW"
    };
}

module.exports = { analyzeRisk };
