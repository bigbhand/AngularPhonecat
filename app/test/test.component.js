angular.module('test')
       .component('test',{
    	   
    	   templateUrl:'test/test.template.html',
    	   controller:function TestController(){
    		   var self = this;
    		   
    		   this.greet = 'hello world!!';
    		   this.phones = ['Apple','Samsung','Nokia','Coolpad'];
    	   }
       	
       })