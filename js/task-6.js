"use strict"

let input
let total = 0

do {
  input = prompt("Введите число")
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз")
    continue
  }

  if (input !== null) {
    total = total + parseInt(input)
  }
} while (input !== null)

alert(`Общая сумма чисел равна ${total}`)
