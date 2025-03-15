const fetch = require("node-fetch");
const fs = require("fs");

async function getQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  const quote = `> "${data.content}" — ${data.author}`;

  let readme = fs.readFileSync("README.md", "utf8");
  readme = readme.replace(/> ".*?" — .*?\n/, quote + "\n"); 
  fs.writeFileSync("README.md", readme);
}

getQuote();
