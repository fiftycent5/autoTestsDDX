import { expect, test } from "@playwright/test";
import api from '../api.json';

test.describe("API-тесты на получение списка клубов", async () => {
    test("[positive] получить список клубов", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.clubs}`,
            {
                headers: {
                    'Authoriazation': `${api.tokens.test}`
                },
                params: {
                    session_id: "1",
                    request_id: "2",
                    request_source: "crm"
                }

            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[negative] получить список клубов c ошибкой", async ({ request }) => {
        const response = await request.get(
            `${api.urls.base_url_api}${api.paths.clubs}`,
            {
                headers: {
                    'Authoriazation': `${api.tokens.test}`
                },
                params: {
                    session_id: "1",
                    request_source: "crm"
                }

            }
        );
        expect(response.status()).toEqual(400);
    });
});