const assert = require("assert").strict;

const web = require("selenium-webdriver");
const driver = new web.Builder().forBrowser('chrome').build();
// require("geckodriver");

// const driver = new web.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "chrome" })
//  .build();

const uriServer = "http://localhost:3000";
const appTitle = "React App";

//driver.findElement(web.By.name("q")).sendKeys("conthoinfo.com");
//driver.findElement(web.By.name("q")).sendKeys(web.Key.ENTER);
//driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div[1]/legend/b`)).getText()
setTimeout(() => {
    describe("Home page", () => {
        it('Get title on page', () => {
            driver.get(uriServer)
                .then(() => {
                    driver.getTitle()
                        .then(title => {
                            assert.strictEqual(title, appTitle);
                        })
                        .catch(err => {
                            console.log("Error====>", err)
                        })
                })
                .catch(err => {
                    console.log("Error====>", err)
                })
        });

        it('Click Them moi cong viec', () => {
            driver.get(uriServer)
                .then(() => {
                    driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div/div/button`)).click()
                        .then(() => {
                            driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/legend/b`)).getText()
                                .then(label => {
                                    assert.strictEqual(label, "Thêm mới công việc");
                                })
                        });
                });
        });

        it('Them moi cong viec', () => {
            return new Promise((resolve, reject) => {
                driver.get(uriServer)
                    .then(() => {
                        var getControl = new Promise((success, faild) => {
                            driver.wait(web.until.elementsLocated(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/input`)), 2000)
                                .then(() => {
                                    driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/input`)).sendKeys("Item New")
                                        .then(() => {
                                            driver.wait(web.until.elementsLocated(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/select`)), 2000)
                                                .then(() => {
                                                    driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/select`)).sendKeys("Kích hoạt");
                                                    success();
                                                });
                                        })
                                });
                        });

                        getControl.then(() => {
                            driver.wait(web.until.elementsLocated(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[2]/button[1]`)), 2000)
                                .then(() => {
                                    driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[2]/button[1]`)).click();
                                    driver.wait(web.until.elementsLocated(web.By.xpath(`//*[@id="root"]/div/div/div/div/table/tbody/tr[7]/td[2]`)), 2000)
                                        .then(() => {
                                            driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div/table/tbody/tr[7]/td[2]`)).getText()
                                                .then(item => {
                                                    assert.strictEqual(item, "Item New");
                                                })
                                        })
                                });
                        });
                    });
                resolve();
            });
        });


        afterEach(() => {
            // driver.quit();
        });
    });
}, 5000);