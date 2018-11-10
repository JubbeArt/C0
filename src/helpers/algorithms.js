import { consumptionPerKilo, vehicleEfficiency } from './constants.js'

export function calculateConsumption (foodType, mass) {
  return (consumptionPerKilo[foodType] * mass / 1000).toFixed(2)
}

export function addToLocalStorage (foodType, consumption) {
  if (localStorage.getItem(foodType) === null) {
    localStorage.setItem(foodType, 0)
  }
  var local = +localStorage.getItem(foodType)
  localStorage.setItem(foodType, local + +consumption)
}

export function addMeal (meal) {
  var meals = JSON.parse(localStorage.getItem('MEALS')) || []
  meals.push(meal)
  Object.entries(meal).forEach(([foodType, mass]) => {
    addToLocalStorage(foodType, calculateConsumption(foodType, mass))
  })
  localStorage.setItem('MEALS', JSON.stringify(meals))
}

export function calculateTotals () {
  var total = 0
  Object.keys(consumptionPerKilo).forEach(foodType => {
    total += +localStorage.getItem(foodType)
  })
  Object.keys(vehicleEfficiency).forEach(vehicle => {
    total += +localStorage.getItem(vehicle)
  })
  return total
}

// ---- Transport ----
export function calculateVehicleConsumption (vehicle, distance) {
  return (vehicleEfficiency[vehicle] * distance).toFixed(2)
}

export function addTrip (vehicle, distance) {
  if (localStorage.getItem(vehicle) === null) {
    localStorage.setItem(vehicle, 0)
  }
  localStorage.setItem(vehicle, +localStorage.getItem(vehicle) + +calculateVehicleConsumption(vehicle, distance))
}

// ---- Transport ----
export function dailyAverage (days) {
  var total = calculateTotals()
  return (total / days).toFixed(2)
}

// TODO: Save data in a way that today's consumption can be identified
