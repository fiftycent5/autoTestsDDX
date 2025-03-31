export function getRandomPhoneNumber(): string {
    return `+7912${new Date().getTime().toString().substring(6)}`
};

export function getRandomEmail(): string {
    return `test${new Date().getTime().toString()}@ddx.ru`;
};

export function getNegativeString(): string {
    return `abc${new Date().getTime().toString()}`// эксперементальная функция для генерации невалидной строки(например поле принимает enum)
}