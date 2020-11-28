"use strict"

let delivery
let message
let price
let country

message = prompt("Укажите страну доставки")

switch (message) {
  case null:
    message = alert("Отмена")
    break

  case "Китай".toLowerCase():
    country = "Китай"
    price = 100
    message = alert(`Доставка в ${country} будет стоить ${price} кредитов`)
    break

  case "Чили".toLowerCase():
    country = "Чили"
    price = 250
    message = alert(`Доставка в ${country} будет стоить ${price} кредитов`)
    break

  case "Австралия".toLowerCase():
    country = "Австралию"
    price = 170
    message = alert(`Доставка в ${country} будет стоить ${price} кредитов`)
    break

  case "Индия".toLowerCase():
    country = "Индию"
    price = 80
    message = alert(`Доставка в ${country} будет стоить ${price} кредитов`)
    break

  case "Ямайка".toLowerCase():
    country = "Ямайку"
    price = 120
    message = alert(`Доставка в ${country} будет стоить ${price} кредитов`)
    break

  default:
    message = alert("В вашей стране доставка не доступна")
}
