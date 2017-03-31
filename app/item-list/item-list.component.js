'use strict';

angular.module('itemList')
	   .component('itemList', {
		  
		   templateUrl: 'item-list/item-list.template.html',
		   controller:  function TechLikesController() {
		                  
			   				var items = [
			   						{name : 'LG', likes : 0, dislikes:0, views:18000, price:20000, releaseDate:new Date('Jan 5 2016'), model:'nexus 5', rating:3},
			   						{name : 'Apple iPhone', likes : 0, dislikes:0, views:148800, price:10000, releaseDate:new Date('Jan 8 2016'), model:'5S', rating:4},
			   						{name : 'Samsung', likes : 0, dislikes:0, views:12050, price:24000, releaseDate:new Date('September 5 2014'), model:'edge', rating:5},
			   						{name : 'Coolpad', likes : 0, dislikes:0, views:111200, price:14000, releaseDate:new Date('August 12 2012'), model:'note 3', rating:2},
			   						{name : 'Nokia', likes : 0, dislikes:0, views:18900, price:23000, releaseDate:new Date('November 20 2015'), model:'N920', rating:1},
			   						{name : 'HTC', likes : 0, dislikes:0, views:1201, price:44000, releaseDate:new Date('June 5 2014'), model:'Hive', rating:3},
			   						{name : 'OnePlus', likes : 0, dislikes:0, views:17741, price:18000, releaseDate:new Date('March 15 2013'), model:'one', rating:3},
			   						{name : 'Lenovo', likes : 0, dislikes:0, views:12630, price:8999, releaseDate:new Date('July 8 2016'), model:'Vibe', rating:4}
			   				];
			   				
			   				var incrementLikes = function (technology){
			   					technology.likes++;
			   				}
			   				
			   				var incrementDislikes = function (technology){
			   					technology.dislikes++;
			   				}
			   				
			   				var updateSortModels = function(){
			   					this.sortColumn = this.sortByModel.substr(1);
				   				if(this.sortByModel.startsWith("+"))
			   					{
				   					this.reverseSort=false;
			   					}
				   				else
			   					{
				   					this.reverseSort=true;
			   					}
			   				}
			   				
			   				var getClassName = function(column){
			   					
			   					if(this.sortColumn == column){
			   						return this.reverseSort ? 'arrow-down':'arrow-up';
			   					}
			   					return '';
			   				}
			   				
			   				var sortData = function(column){
			   					
			   					this.items;
			   					this.reverseSort = (this.sortColumn == column)? !this.reverseSort : false;
			   					this.sortColumn = column;
			   				}
			   				
			   				var search = function(item){
			   					
			   					this.items;
			   					if(this.searchText == undefined){
			   						return true; // continue search.. 
			   					}
			   					
			   					if(item.name.toLowerCase().contains(this.searchText.toLowerCase())
			   							||item.model.toLowerCase().contains(this.searchText.toLowerCase()))
		   						{
		   							return true;	
		   						}
			   					
			   					return false;
			   				}
			   				
			   				
			   				this.items = items;
			   				this.incrementLikes = incrementLikes;
			   				this.incrementDislikes = incrementDislikes;
			   				this.rowLimit = 8;
			   				this.reverseSort = false;
			   				this.sortColumn = 'views';
			   				this.sortByModel = '+views';
			   				
			   				this.updateSortModels = updateSortModels;
			   				this.sortData = sortData;
			   				this.getClassName = getClassName;
			   				/*this.search = function(item){
			   					
			   					this.items;
			   					if(this.searchText == undefined){
			   						return true; // continue search.. 
			   					}
			   					
			   					if(item.name.toLowerCase().contains(this.searchText.toLowerCase())
			   							||item.model.toLowerCase().contains(this.searchText.toLowerCase()))
		   						{
		   							return true;	
		   						}
			   					
			   					return false;
			   				};*/
		                }
		   
	   });