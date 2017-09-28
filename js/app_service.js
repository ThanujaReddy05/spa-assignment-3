angular.module('clickerApp').service('clickerService', ['$cookies', '$interval', function ($cookies, $interval) {
  this.amount = $cookies.get('amount') !== undefined ? parseInt($cookies.get('amount')): 1
  this.total = $cookies.get('total') !== undefined ? parseInt($cookies.get('total')) : 0
  this.multiplier = $cookies.get('multiplier') !== undefined ? parseInt($cookies.get('multiplier')) : 1.2
  this.autoClickerCount = $cookies.get('autoClickerCount') !== undefined ? parseInt($cookies.get('autoClickerCount')) : 0

  this.multiplierCost = $cookies.get('multiplierCost') !== undefined ? parseInt($cookies.get('multiplierCost')) : 10
  this.autoClickerCost = $cookies.get('autoClickerCost') !== undefined ? parseInt($cookies.get('autoClickerCost')) :  100

  this.autoClickers = []

  this.increment = () =>
    this.total += this.amount

  this.decrement = (amount) =>
      this.total -= amount

  this.multiplyAmount = () => {
    this.amount *= this.multiplier
    this.decrement(this.multiplierCost)
    this.multiplierCost *= 2
  }

  this.addAutoClicker = () => {
    this.autoClickers.push($interval(this.increment, 1000))
    this.autoClickerCount++
    this.decrement(this.autoClickerCost)
    this.autoClickerCost *= 2
  }

  this.canClick = (amount) =>
    this.total < amount

  this.reset = () => {
    this.amount = 1
    this.total = 0
    this.multiplier = 1.2
    this.autoClickerCount = 0

    this.multiplierCost = 10
    this.autoClickerCost = 100

    this.autoClickers.forEach((autoClicker) => $interval.cancel(autoClicker))
  }

  this.save =  () => {
    $cookies.put('total', this.total)
    $cookies.put('amount', this.amount)
    $cookies.put('multiplier', this.multiplier)
    $cookies.put('autoClickerCount', this.autoClickerCount)

    $cookies.put('multiplierCost', this.multiplierCost)
    $cookies.put('autoClickerCost', this.autoClickerCost)
  }

  if (this.autoClickerCount > 0) {
    for(let i = 0; i < this.autoClickerCount; i++) {
      this.autoClickers.push($interval(this.increment, 1000))
    }
  }

}])
