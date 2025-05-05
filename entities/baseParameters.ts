import { getRandomEmail, getRandomPhoneNumber } from "../utils/random"

export async function getBaseParameters(): Promise<object> {
    return {
        session_id: "1",
        request_id: "2",
        request_source: "crm"
    }
};

export async function getBaseParametersFails(): Promise<object> {
    return {
        session_id: "1",
        request_id: "2",
    }
};

export async function getBaseParametersUser(sportExperience?: string): Promise<object> {
    return {
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
            sport_experience: sportExperience != undefined ? sportExperience : "Не указан" // условие для параметра
        }
    }
};