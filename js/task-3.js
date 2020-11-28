"use strict"

let message
const ADMIN_PASSWORD = "jqueryismyjam"
let userResult = prompt("Введите пароль")

if (userResult === "jqueryismyjam") {
  message = "Добро пожаловать!"
} else {
  message = "Доступ запрещен, неверный пароль!"
}

if (userResult === null) {
  message = "Отменено пользователем!"
}

alert(message)

console.log(message)
