const assert = require("assert").strict;

const web = require("selenium-webdriver");
const driver = new web.Builder().forBrowser('chrome').build();
const uriServer = "http://localhost:3000";
const appTitle = "React App1";

//driver.findElement(web.By.name("q")).sendKeys("conthoinfo.com");
//driver.findElement(web.By.name("q")).sendKeys(web.Key.ENTER);
//driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div[1]/legend/b`)).getText()

describe('Home Page', () => {
    before(async () => {
        await driver.get(uriServer);
    });

    it('Get title on page', async () => {
        const title = await driver.getTitle();
        assert.strictEqual(title, appTitle, "Get title on page");
    })

    it('Click Them moi cong viec', async () => {
        await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div/div/button`)).click();
        const label = await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/legend/b`)).getText();
        assert.strictEqual(label, "Thêm mới công việc");
    });

    it('Them moi cong viec', async () => {
        await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/input`)).sendKeys("Item New");
        await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/select`)).sendKeys("Kích hoạt");
        await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[2]/button[1]`)).click();
        const item = await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div/table/tbody/tr[7]/td[2]`)).getText();
        assert.strictEqual(item, "Item New");
    });

    after(() => {
        // driver.quit();
    });
});