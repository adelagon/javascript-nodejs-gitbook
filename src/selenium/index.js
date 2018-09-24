let webdriver = require("selenium-webdriver");
//let chrome = require('selenium-webdriver/chrome'),

async function main() {
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.google.com/about/");
        let mission = await driver.findElement(webdriver.By.className("home-hero-copy center")).getText();
        console.log(mission)
    } catch (e) {
        console.log(e);
    }
}

main();