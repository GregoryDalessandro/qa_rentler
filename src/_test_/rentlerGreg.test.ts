import {RentlerPage} from "../signInUpPage"
import {AboutPage} from "../aboutPage"
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities,
    Browser
} from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
  const rentler = new RentlerPage(driver);
  const rentlerAbout = new AboutPage(driver);

  describe("rentler", () => {
    beforeEach(async () => {
        await rentler.navigate();
      });
    // afterEach(async () => {
    //     await rentler.driver.quit();
    // });
    // test("Cannot sign in with invalid email or password", async () => {
    //     await rentler.signingIn();
    //     await rentler.enteringEmail("natalie.halloran@yahoo.com");
    //     await rentler.enteringPassword("12345678");
    //     expect(await rentler.invalidSignin()).toContain("Invalid username or password");
    // });
    //  test("Can sign up with valid email address", async () => {
    //       await rentler.signingUp();
    //       await rentler.enteringName("Natalie","Halloran");
    //       await rentler.enteringEmail("tohog61616@naymio.com");
    //       await rentler.enteringPassword("12345678");
    //       await rentler.retypingPassword("12345678");
    //       await rentler.landlordOrTenant();
    //       await rentler.agreeToTermsSignUp();
    //   });
    //   test("Can use search button on the main page", async () => {
    //     await rentler.driver.findElement(rentler.searchBar).sendKeys("Salt Lake City, Utah");
    //     await rentler.click(rentler.searchButton);
    //     expect(await driver.findElement(await By.xpath("//*[contains(text(), 'Properties For Rent')]")).getText()).toEqual("Salt Lake City, UT Properties For Rent");
    //   });
    //   test("Can use hyperlinks to navigate to the about page", async() => {
    //     let aboutUs: By = By.css("a[href='/about']");
    //     await rentler.driver.wait(until.elementLocated(aboutUs))
    //     await rentler.click(aboutUs);
    //     expect(await driver.findElement(await By.xpath('//*[contains(text(),"Our story")]')).getText()).toEqual("Our story");
    //   });
      test("Verify if filters persist", async() => {
        await rentler.search(rentler.searchBar,"Salt Lake City, Utah");
        //click the more filters button
        await rentler.click(By.xpath("//*[contains(text(), 'More Filters')]"));
        // click the various filters
        await rentler.click(By.xpath("//label[@for='arelargedogsallowed']"));
        await rentler.click(By.xpath("//label[@for='arecatsallowed']"));
        await rentler.click(By.xpath("//label[@for='walkinclosets']"));
        await rentler.click(By.xpath("//label[@for='communitygameroom']"));
        await rentler.click(By.xpath("//label[@for='isacceptingapplications']"));
        await rentler.click(By.xpath("//button[@class='btn-primary btn px-2 mb-0']"));
        // navigate away
        // come back
        // are the filters still checkmarked?
      });
  });




