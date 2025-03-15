import fetch from "node-fetch";
import fs from "fs";

async function getQuote() {
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        const quote = `> "${data[0].q}" — ${data[0].a}`;

        let readme = fs.readFileSync("README.md", "utf8");
        readme = readme.replace(/> ".*?" — .*?\n/, quote + "\n");
        fs.writeFileSync("README.md", readme);

        console.log("✅ Quote updated successfully!");
    } catch (error) {
        console.error("❌ Error fetching quote:", error);
    }
}

getQuote();
