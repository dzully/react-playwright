import { test } from "@playwright/test";

test("insert item into todo list", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("cake");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('cake')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("pill");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('pill')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("rice");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('rice')");
});

test("insert and search item in todo list", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("cake");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('cake')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("pill");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('pill')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("rice");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('rice')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("cake");
  await page.waitForSelector("ul li:has-text('cake')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("pill");
  await page.waitForSelector("ul li:has-text('pill')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("rice");
  await page.waitForSelector("ul li:has-text('rice')");
});

test("insert, search and remove all item in todo list", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("cake");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('cake')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("pill");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('pill')");

  await page.getByTestId("todoItemInput").click();
  await page.getByTestId("todoItemInput").fill("rice");
  await page.getByTestId("todoItemSubmit").click();
  await page.waitForSelector("ul li:has-text('rice')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("cake");
  await page.waitForSelector("ul li:has-text('cake')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("pill");
  await page.waitForSelector("ul li:has-text('pill')");

  await page.getByTestId("todoItemSearch").click();
  await page.getByTestId("todoItemSearch").fill("rice");
  await page.waitForSelector("ul li:has-text('rice')");

  await page.getByTestId("todoItemRemoveAll").click();
  await page.waitForSelector("ul li:has-text('cake')", { state: "detached" });
  await page.waitForSelector("ul li:has-text('pill')", { state: "detached" });
  await page.waitForSelector("ul li:has-text('rice')", { state: "detached" });
});
