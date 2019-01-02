angular.module('myApp',['ngMaterial','ajaxApp'])
.controller('AppCtrl', ['ajaxService', function(ajaxService) {
    //console.log("Hello World from controller");
    var vm = this;
    vm.entities = [];
    vm.offering = [];
    vm.payment_methods = ["wire"];
    vm.investment = {
      "payment_method" : "wire",
      "entity_id":"6a8ckx4tQcWcUARmJQ_0hQ"
    };
    vm.investments = [];
    vm.getAllEntities = function(){
      var options = {
          url: "http://localhost:8080/entities",
          type: "GET",
          postInfo: " ",
      }
      ajaxService.ajaxData(options).then(function (x) {
        var data = JSON.parse(x.data)
        console.log(data)
        vm.entities = data.resources;
      });
    }
    vm.addEntity = function(){
      var options = {
          url: "http://localhost:8080/entities",
          type: "POST",
          postInfo:vm.investment,
      }
      ajaxService.ajaxData(options).then(function (x) {
        var data = JSON.parse(x.data)
        vm.investments.push(data.resources);
        console.log(vm.investments)
      });
      //     {
      //   "city" : "New York",
      //   "country" : "US",
      //   "email" : "jj@johnson.com",
      //   "name" : "Johnson, Johnson, Johnson & Johnson",
      //   "phone" : "12025551212",
      //   "postal_code" : "10005",
      //   "region" : "NY",
      //   "street_address_1" : "60 Wall St",
      //   "tax_id_number" : "999999999",
      //   "type" : "company",
      //   "executive_name" : "John Johnson",
      //   "region_formed_in" : "NY"
      // }
    }
    vm.getAllEntities();
    vm.getOffering = function(){
      var options = {
          url: "http://localhost:8080/offerings",
          type: "GET",
          postInfo: " ",
      }
      ajaxService.ajaxData(options).then(function (x) {
        var data = JSON.parse(x.data);
        vm.offering = data.resources;
        console.log(vm.offering)
      });
    };
    vm.getInvestments = function(){
      var options = {
          url: "http://localhost:8080/investments",
          type: "GET",
          postInfo: " ",
      }
      ajaxService.ajaxData(options).then(function (x) {
        var data = JSON.parse(x.data);
        vm.investments = data.resources;
        console.log(vm.investments)
      });
    };
    vm.addInvestment = function(){
      var options = {
          url: "http://localhost:8080/investments",
          type: "POST",
          postInfo:JSON.stringify(vm.investment),
      }
      ajaxService.ajaxData(options).then(function (x) {
        var data = JSON.parse(x.data);
        vm.investments.push(data.resources);
      });
    };
    // vm.acceptInvestors = function(offering){
    //   var options = {
    //       url: "http://localhost:8080/offerings/"+offering.id,
    //       type: "PUT",
    //       postInfo:'',
    //   }
    //   ajaxService.ajaxData(options).then(function (x) {
    //     var data = JSON.parse(x.data);
    //     vm.investments.push(data.resources);
    //   });
    // };
    // vm.getInvestments = function(offering){
    //   var options = {
    //       url: "http://localhost:8080/investments"+offering.id,
    //       type: "GET",
    //       postInfo: " ",
    //   }
    //   ajaxService.ajaxData(options).then(function (x) {
    //     var data = JSON.parse(x.data);
    //     console.log(data)
    //     vm.investments = data.resources;
    //   });
    // };
}]);
 angular.element(document).ready(function() {
   angular.bootstrap(document.body,['myApp']);
 })﻿;
