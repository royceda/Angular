/*
Factory
*/

app.factory("factoryExample", function(){
    return{
        service1: function(){...},
        service2: function(){...},
    }
});

app.controller("factoryCtrl", function($scope, factoryExample){
     factoryExample.service1();
});

/*
Service
*/
app.service("serviceExample", function(){
    this.service1 = function(){...};
    this.service2 = function(){...};
});

app.controller("serviceCtrl", function($scope, serviceExample){
     serviceExample.service1();
});

/*
Provider
*/
app.provider("greeter", function(){
    var salutation = "Hello";
    this.setSalutation = function(_salutation){
        salutation = _salutation;
    };
    
    function Greeter(){
        this.greet = function(){
            return salutation;   
        };
    };
    
    this.$get = function(){
        return new Greeter();
    };
});

var app = angular.module("app", []).config(function(greeterProvider){
    greeterProvider.setSalutation("Bonjour");  
});

app.controller("providerCtrl", function($scope, greeter){
     console.log(greeter.greet());
});
