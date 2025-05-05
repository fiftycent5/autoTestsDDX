import { expect, test } from "@playwright/test";
import { log } from "console";
import api from '../api.json';
import { getBaseParameters } from "../entities/baseParameters";


test.describe("API-тесты на получение списка групповых тренировок", async () => {
    test("[positive] получить список групповых тренировок", async ({ request }) => {
        const url = `${api.urls.base_url_api}${api.paths.groupTrainings}`;
        const parameters = { ...await getBaseParameters() };

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
});