import { test } from "@playwright/test";

test.describe("Описание группы теста", async () => {
    test("Я пишу тест", async () => {
        console.log("Я написал тест! Ураа!");
    })
});