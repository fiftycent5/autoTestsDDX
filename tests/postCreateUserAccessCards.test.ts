import test, { expect } from "@playwright/test"
import api from '../api.json';
import { getString } from "../utils/random";
import { log } from "../utils/logger";

test.describe("Тесты на создания карт доступа пользователя", async () => {
    test("[positive] Создать карту дотсупа для пользователя", async ({ request }) => {
        const url = `${api.urls.base_url_api}${api.paths.acces_cards}`;
        const parameters = {
            session_id: "549297f8-e38a-47cd-915e-2a1859102539",
            request_id: "4b5b7836-dce6-4b5e-9f18-76be91bd7d37",
            request_source: "string",
            data: [
                {

                    access_card_number: getString(),
                    user_id: 2425553,
                    type: "bracelet",

                }
            ]
        };

        log("request url", url);
        log("parameters", parameters);

        const response = await request.post(
            url,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: parameters

            }

        );
        log("request status", response.status());
        log("response body", JSON.stringify(await response.json(), null, "\t"));
        expect(response.status()).toEqual(200);
    }
    );

})







