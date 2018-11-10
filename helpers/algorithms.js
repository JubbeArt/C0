import { consumptionPerKilo } from './constants.js'

export function calculateConsumption (foodType, mass) {
  return consumptionPerKilo[foodType] * mass
}

export function addToLocalStorage (foodType, consumption) {
  if (localStorage.getItem(foodType) === null) {
    localStorage.setItem(foodType, 0)
  }
  localStorage.setItem(foodType, +localStorage.getItem(foodType) + consumption)
}

export function addMeal (meal) {
  var meals = JSON.parse(localStorage.getItem('MEALS'))
  meals.push(meal)
  meal.forEach(([foodType, consumption]) => {
    addToLocalStorage(foodType, consumption)
  })
  localStorage.setItem('MEALS', JSON.stringify(meals))
}

export function calculateTotals () {
  var total = 0
  Object.keys(consumptionPerKilo).forEach(foodType => {
    total += +localStorage.getItem(foodType)
  })
  return total
}

export function dailyAverage (days) {
  var total = calculateTotals()
  return total / days
}
