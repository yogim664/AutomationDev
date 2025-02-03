// @ts-check
import { test, expect } from "@playwright/test";

test("get started link", async ({ page }) => {
  await page.goto("https://www.google.com/");

let isPopup = 
await page.locator('iframe[name="callout"]').contentFrame().locator('.WrcADd').isVisible()

  // Debugging: Take a screenshot and print HTML content
  if(isPopup){
  await page
    .locator('iframe[name="callout"]')
    .contentFrame()
    .getByRole("button", { name: "Stay signed out" })
    .click();
  }
});
