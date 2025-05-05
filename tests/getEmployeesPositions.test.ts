import { expect, test } from "@playwright/test";
import api from '../api.json';
import { getBaseParameters } from "../entities/baseParameters";
import { log } from "console";

const clubId = [1, 5, 26]


test.describe("API-тесты на получение сотрудников и их позиций", async () => {
    clubId.forEach(clubId => {
        test(`[positive] Получить всех сотрудников с позициями ${clubId}`, async ({ request }) => {
            const url = `${api.urls.base_url_api}${api.paths.employeesPositions}`;
            const parameters = { ... await getBaseParameters(), clubId };

            log("request url", url);
            log("parameters", parameters);

            const response = await request.get(
                url,
                {
                    headers: {
                        'Authorization': `${api.tokens.test}`
                    },
                    params: parameters
                }
            );
            log("request status", response.status());
            log("response body", JSON.stringify(await response.json(), null, "\t"));
            expect(response.status()).toEqual(200);
        });
    })
})


