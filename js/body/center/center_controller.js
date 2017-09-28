angular.module('clickerApp').controller('centerController', ['clickerService', function (clickerService) {

  this.service = clickerService

  this.click = () => clickerService.increment()

}])
