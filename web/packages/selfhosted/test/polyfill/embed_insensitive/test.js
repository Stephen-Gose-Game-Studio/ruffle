const { open_test, inject_ruffle_and_wait } = require("../utils");
const { expect, use } = require("chai");
const chaiHtml = require("chai-html");
const fs = require("fs");

use(chaiHtml);

describe("Embed with case-insensitive MIME type", () => {
    it("loads the test", () => {
        open_test(browser, __dirname);
    });

    it("Polyfills", () => {
        inject_ruffle_and_wait(browser);
        browser.$("<ruffle-embed />").waitForExist();

        const actual = browser.$("#test-container").getHTML(false);
        const expected = fs.readFileSync(`${__dirname}/expected.html`, "utf8");
        expect(actual).html.to.equal(expected);
    });
});
