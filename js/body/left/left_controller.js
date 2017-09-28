angular.module('clickerApp').controller('leftController', ['clickerService', function (clickerService) {

  this.service = clickerService

  this.click = () => clickerService.multiplyAmount()

  this.canClick = () => clickerService.canClick(clickerService.multiplierCost)

}])
