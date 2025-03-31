import { expect, test } from "@playwright/test";
import api from '../api.json';
import { getBaseParameters } from "../entities/baseParameters";


test.describe("Тесты на создание заметок о пользователе", async () => {
    test("[positive] Создать заметку ", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.userNotes}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: {
                    session_id: "549297f8-e38a-47cd-915e-2a1859102539",
                    request_id: "4b5b7836-dce6-4b5e-9f18-76be91bd7d37",
                    request_source: "crm",
                    data: [{ ... await getBaseParameters(), ... { text: "Обещал привязать карту" }, ... { employee_id: 2656 }, ... { type: "block" } }]
                }
            }
        );
        expect(response.status()).toEqual(200);
    });
})