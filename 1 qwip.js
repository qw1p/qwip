let a = Math.floor(Math.random() * 100);
let result;

if ((a > 10 ? a : a * 2) > 5) {
    result = (2 * a) + 1;
} else {
    if (a < 3) {
        result = 1;
    } else {
        if (2 * (a - 2) > 4) {
            result = 5;
        } else {
            if (a % 2 == 0) {
                result = 6;
            } else {
                result = 7;
            }
        }
    }
}

console.log(result);

// Преобразование в switch (с некоторыми ограничениями, так как switch работает с конкретными значениями)
// Здесь switch используется для последней части, где проверяется четность числа
// Другие части с помощью switch реализовать сложно, так как там сравнение больше/меньше
let resultSwitch;

if ((a > 10 ? a : a * 2) > 5) {
    resultSwitch = (2 * a) + 1;
} else {
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
        resultSwitch = 5;
    } else {
        switch (a % 2) {
            case 0:
                resultSwitch = 6;
                break;
            case 1:
                resultSwitch = 7;
                break;
            default:
                console.log("Ошибка! Неожиданное значение a % 2");
                resultSwitch = null;
                break;
        }
    }
}
console.log(`Результат (switch): ${resultSwitch}`);