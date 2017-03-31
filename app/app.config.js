'use strict';

angular.module('phonecatApp')
  	   .config(['$locationProvider' ,'$routeProvider',
			    function config($locationProvider, $routeProvider) {
			      $locationProvider.hashPrefix('!');
			
			      $routeProvider.
			        when('/phones', {
			          template: '<phone-list></phone-list>'
			        }).
			        when('/phones/:phoneId', {
			          template: '<phone-detail></phone-detail>'
			        }).
			        when('/tech-likes',{
			        	template:'<tech-likes><tech-likes>'
			        }).
			        when('/item-list',{
			        	template:'<item-list><item-list>'
			        }).
			        when('/test',{
			        	template:'<test><test>'
			        }).
			        otherwise('/phones');
			    }
		  ]);
