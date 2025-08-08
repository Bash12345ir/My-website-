const express = require('express');
const app = express();

app.get("/get-server", (req, res) => {
  const { country, network } = req.query;

  if (country === "RW" && network === "airtel") {
    res.json({
      server: "vpn.airtel.rwanda.bashirvpn.com",
      port: 443,
      protocol: "ssh",
      username: "bashir",
      password: "123456"
    });
  } else {
    res.status(404).json({ error: "No server found" });
  }
});

app.listen(3000, () => console.log("API running on port 3000"));
