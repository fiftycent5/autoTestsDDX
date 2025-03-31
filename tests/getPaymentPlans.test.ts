import { expect, test } from "@playwright/test";
import api from '../api.json';
import { getBaseParameters } from "../entities/baseParameters";

test.describe("API-тесты на получение списка тарифных планов", async () => {
    test("[positive] получить список активных тарифных планов", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.paymentPlans}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                params: { ...await getBaseParameters(), ...{ is_active: true }}

            }
        );
        expect(response.status()).toEqual(200);
    });
});