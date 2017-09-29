angular.module('clickerApp').controller('headerController', ['clickerService', function (clickerService) {

  this.service = clickerService

  this.reset = () => clickerService.reset()

  this.save = () => clickerService.save()

}])
