import { expect, test } from "@playwright/test";
import api from '../api.json';
import { getNegativeString, getRandomEmail, getRandomPhoneNumber } from "../utils/random";
import { getBaseParametersUser } from "../entities/baseParameters";


test.describe("Тесты на создание юзеров", async () => {
    test("[positive] Создать юзера", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: {

                    session_id: "549297f8-e38a-47cd-915e-2a1859102539",
                    request_id: "4b5b7836-dce6-4b5e-9f18-76be91bd7d37",
                    request_source: "crm",
                    data: {
                        email: getRandomEmail(),
                        name: "Обычный",
                        last_name: "Пользак",
                        middle_name: "Автоматический",
                        sex: "male",
                        phone: getRandomPhoneNumber(),
                        birthday: "1997-09-16",
                        password: "Qwerty123!",
                        lang: "ru",
                        home_club_id: 5,
                        club_access: true,
                        admin_panel_access: false,
                        goup_training_registration_access: true,
                        sport_experience: "Больше 5 лет"
                    }

                }



            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера без поля password", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: {

                    session_id: "549297f8-e38a-47cd-915e-2a1859102539",
                    request_id: "4b5b7836-dce6-4b5e-9f18-76be91bd7d37",
                    request_source: "crm",
                    data: {
                        email: getRandomEmail(),
                        name: "Обычный",
                        last_name: "Пользак",
                        middle_name: "Автоматический",
                        sex: "male",
                        phone: getRandomPhoneNumber(),
                        birthday: "1997-09-16",
                        lang: "ru",
                        home_club_id: 5,
                        club_access: true,
                        admin_panel_access: false,
                        goup_training_registration_access: true,
                        sport_experience: "Больше 5 лет"
                    }

                }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = 'Больше 5 лет'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ...{ sport_experience: "Больше 5 лет" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = '0-6 месяцев'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ...{ sport_experience: "0-6 месяцев" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = '6-12 месяцев'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ... { sport_experience: "6-12 месяцев" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = '1-2 года'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ... { sport_experience: "1-2 года" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = '2-3 года'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ... { sport_experience: "2-3 года" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = '3-5 лет'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ... { sport_experience: "3-5 лет" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[positive] Создать юзера - sport_experience = 'Нет Опыта'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: { ... await getBaseParametersUser(), ... { sport_experience: "Нет опыта" } }
            }
        );
        expect(response.status()).toEqual(200);
    });

    test("[negative] Создать юзера с невалидным значением поля 'sport_experience'", async ({ request }) => {
        const response = await request.post(
            `${api.urls.base_url_api}${api.paths.users}`,
            {
                headers: {
                    'Authorization': `${api.tokens.test}`
                },
                data: {
                    session_id: "549297f8-e38a-47cd-915e-2a1859102539",
                    request_id: "4b5b7836-dce6-4b5e-9f18-76be91bd7d37",
                    request_source: "crm",
                    data: {
                        email: getRandomEmail(),
                        name: "Обычный",
                        last_name: "Пользак",
                        middle_name: "Автоматический",
                        sex: "male",
                        phone: getRandomPhoneNumber(),
                        birthday: "1997-09-16",
                        lang: "ru",
                        home_club_id: 5,
                        club_access: true,
                        admin_panel_access: false,
                        goup_training_registration_access: true,
                        sport_experience: "1"
                    }
                }
            }
        );
        expect(response.status()).toEqual(400);
    });
});