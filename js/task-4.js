"use strict"

const credits = 23580 // на счету
const pricePerDroid = 3000 // цена одного дроида
let message

const wantToBuy = prompt("Сколько дроидов Вы хотите купить?")

const totalPrice = wantToBuy * pricePerDroid
const possibleOrNot = credits - totalPrice

if (wantToBuy === null) {
  message = "Отменено пользователем!"
  alert(message)
} else if (credits >= totalPrice) {
  message = `Вы купили ${wantToBuy} дроидов, на счету осталось ${possibleOrNot} кредитов.`
  alert(message)
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!"
  alert(message)
}
