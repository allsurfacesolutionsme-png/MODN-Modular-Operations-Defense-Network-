async function test() {

    const res = await fetch("http://localhost:8080/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user: "guest",
            action: "api_access",
            domain: "tracker.com",
            risk: 0.4
        })
    });

    const data = await res.json();

    document.getElementById("out").textContent =
        JSON.stringify(data, null, 2);
}
