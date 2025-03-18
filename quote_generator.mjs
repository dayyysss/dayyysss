import fetch from "node-fetch";
import fs from "fs";

async function getQuote() {
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        const quote = `"${data[0].q}" — ${data[0].a}`;

        let readme = fs.readFileSync("README.md", "utf8");

        readme = readme.replace(
            /<p><em>\s*".*?"\s*—\s*.*?\s*<\/em><\/p>/s,
            `<p><em>\n  ${quote}\n</em></p>`
        );

        fs.writeFileSync("README.md", readme, { encoding: "utf8" });

    } catch (error) {
        console.error("❌ Error fetching quote:", error);
    }
}

getQuote();
