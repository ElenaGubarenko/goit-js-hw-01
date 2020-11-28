"use strict"

const credits = 23580 // на счету
const pricePerDroid = 3000 // цена одного дроида
let wantToBuy
let message
let totalPrice
let possibleOrNot

wantToBuy = prompt("Сколько дроидов Вы хотите купить?")

if (wantToBuy === null) {
  message = "Отменено пользователем!"
  console.log(message)
} else {
  totalPrice = wantToBuy * pricePerDroid
  message = `Вам нужно заплатить: ${totalPrice}`
  alert(message)
}

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!"
  alert(message)
} else {
  possibleOrNot = credits - totalPrice
  if (possibleOrNot >= 0) {
    message = `Вы купили ${wantToBuy} дроидов, на счету осталось ${possibleOrNot} кредитов.`
    alert(message)
  } else {
    message = "Недостаточно средств на счету!"
  }
}
