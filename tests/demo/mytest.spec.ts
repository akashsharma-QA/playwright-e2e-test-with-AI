import {test, expect} from '@playwright/test';

test("my first test", async ({ page }) => {
    //go to home page
    
    

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //assert if the title is correct
    await expect(page).toHaveTitle('CURA Healthcare Service');
    //assert header is correct
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service');

});