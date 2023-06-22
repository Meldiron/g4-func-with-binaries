// const puppeteer = require("puppeteer");
const fs = require("fs");

module.exports = async ({ res }) => {
  var stats = fs.statSync("/usr/local/server/src/function/chromium-browser");
  return res.json(stats);
  // Note 2
  //   const browser = await puppeteer.launch({
  //     executablePath: process.env.CHROME_BIN || null,
  //     args: ["--no-sandbox", "--headless", "--disable-gpu"],
  //   });

  //   const page = await browser.newPage();
  //   await page.setViewport({ width: 1280, height: 720 });

  //   const website_url = "https://appwrite.io/";
  //   await page.goto(website_url, { waitUntil: "networkidle0" });

  //   const imge = await page.screenshot({
  //     type: "jpeg",
  //     quality: 100,
  //     clip: {
  //       x: 0,
  //       y: 70,
  //       width: 640,
  //       height: 360,
  //     },
  //     omitBackground: true,
  //   });

  //   await browser.close();

  //   return res.send(image);
};
