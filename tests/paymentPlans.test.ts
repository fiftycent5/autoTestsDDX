import { expect, test } from "@playwright/test";
import api from '../api.json';

test.describe("API-тесты на получение списка тарифных планов", async () => {
    test("[positive] получить список активных тарифных планов", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.paymentPlans}`,
            {
                headers: {
                    'Authoriazation': `${api.tokens.test}`
                },
                params: {
                    session_id: "1",
                    request_id: "2",
                    request_source: "crm",
                    is_active: true,
                    is_deleted: false
                }

            }
        );
        expect(response.status()).toEqual(200);
    });
});