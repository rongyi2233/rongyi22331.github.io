
	var myApp=angular.module("myApp",["ngSanitize"]);//一般只能有一个myApp
		myApp.controller("myCtrl",["$scope",function($scope){
			$scope.name="digua";
			$scope.age=18;
			$scope.oBtn={
				"index":{
					"l":true,
					"c":"首页",
					"r":true
				},
				"index":{
					"l":true,
					"c":"首页",
					"r":true
				},
				"index":{
					"l":true,
					"c":"首页",
					"r":true
				},
				"index":{
					"l":true,
					"c":"首页",
					"r":true
				},
				"index":{
					"l":true,
					"c":"首页",
					"r":true
				}
			};
		}])
	
