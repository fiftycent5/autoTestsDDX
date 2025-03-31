import { expect, test } from "@playwright/test";
import api from '../api.json';
import { request } from "node:http";
import { getBaseParameters } from "../entities/baseParameters";


test.describe("API-тесты на получение сотрудников и их позиций", async () => {
    test("[positive] Получить всех сотрудников с позициями", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.employeesPositions}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                params: { ... await getBaseParameters() }
            }
        );
        expect(response.status()).toEqual(200)
    });
})