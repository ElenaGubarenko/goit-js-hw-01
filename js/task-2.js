"use strict"

let total = 100 // на складе
Number(total)
let ordered = 100 // в заказе
Number(ordered)

let result
Number(result)

result = ordered > total ? "На складе недостаточно твоаров!" : "Заказ оформлен, с вами свяжется менеджер"

console.log(result)
