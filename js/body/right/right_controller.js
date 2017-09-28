angular.module('clickerApp').controller('rightController', ['clickerService', function (clickerService) {

  this.service = clickerService

  this.click = () => clickerService.addAutoClicker()

  this.canClick = () => clickerService.canClick(clickerService.autoClickerCost)

}])
