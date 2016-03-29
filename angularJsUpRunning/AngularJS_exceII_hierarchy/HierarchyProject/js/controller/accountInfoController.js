myMngtHierarchyApp.controller('accountInfoController',[ '$scope', 'commonNodeHeirarchyModel', function($scope, commonNodeHeirarchyModel) {
	
	var self = this;
	var commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	var selectedNodeId = 0;
	var selectedNodeObject = "";
	self.possition = "";
	self.dob = "";
	self.startWorkingDay = "";
	self.comments = ""
	$scope.$watch(
		 function()
            {
				selectedNodeId = commonNodeHeirarchyModel.selectedTopNode.id;
				if(selectedNodeId){
					selectedNodeObject = getSelectedNodeObject(selectedNodeId);
					initializeVariables(selectedNodeObject);
				}
			}
	);
	
	var initializeVariables = function(selectedNodeObject) {
		self.possition = selectedNodeObject.possition;
		self.dob = selectedNodeObject.dob;
		self.age = calculateDiffYearTocurrentDayFromFormatDay(self.dob)
		self.startWorkingDay = selectedNodeObject.start;
		self.comments = selectedNodeObject.comments;
		self.yearsWorking = calculateDiffYearTocurrentDayFromFormatDay(self.startWorkingDay);
		self.daysWorking = calculateDiffDaysTocurrentDayFromFormatDayAndYear(self.startWorkingDay, self.yearsWorking);
	}

	var calculateDiffDaysTocurrentDayFromFormatDayAndYear = function(format, yearsWorking){
		var day   = parseInt(format.substring(0,2));
    	var month  = parseInt(format.substring(3,5));
   	 	var year   = parseInt(format.substring(6,10));
   	 	var dayToCurerntDay = getDiffDayToCurrentDay(new Date(year, month-1, day));
   	 	var yearsDay = getDayOfTheYear(year, new Date().getFullYear(), yearsWorking);
   	 	var diffDay = dayToCurerntDay - yearsDay;
    	return diffDay;
	}
	var getDiffDayToCurrentDay = function(startDay){
		var timeDiff = Math.abs(new Date().getTime() - startDay.getTime());   
    	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    	return diffDays;
	}
	var getDayOfTheYear = function(startYear, currentYear, yearsWorking) {
		if(startYear > currentYear){
			throw "Start year cannot be greater that current year!";
		}
		var leapYearDays = 0;
		for(var i = startYear; i <= currentYear; i++){
			if(leapYear(i)){
				leapYearDays++;
			}
		}
		return (yearsWorking * 365) + leapYearDays;
	}


	leapYear = function(year)
	{
  		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}


	var calculateDiffYearTocurrentDayFromFormatDay = function(format) {
    	var day   = parseInt(format.substring(0,2));
    	var month  = parseInt(format.substring(3,5));
   	 	var year   = parseInt(format.substring(6,10));
   	 	var diffYear = calculateDifferentYearTocurrentDay(month, day, year);
    	return diffYear;
	}

	var calculateDifferentYearTocurrentDay = function (Month, Day, Year){
		var todayDate = new Date();
	   	var todayYear = todayDate.getFullYear();
	  	var todayMonth = todayDate.getMonth();
	  	var todayDay = todayDate.getDate();
	  	var age = todayYear - Year;

		if (todayMonth < Month - 1){
		    age--;
		}

		if (Month - 1 == todayMonth && todayDay < Day){
		    age--;
		}
		return age;
	}

	var getSelectedNodeID = function(){
		return commonNodeHeirarchyModel.selectedTopNode.id;
	};

	var getSelectedNodeObject = function(selectedNodeId) {
		for(var i = 0; i < commonNodeHeirarchyModel.nodesDetails.length; i++){
			if(commonNodeHeirarchyModel.nodesDetails[i].id == selectedNodeId){
				return commonNodeHeirarchyModel.nodesDetails[i];
			}
		}
		return null;
	}
	
}]);