(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.message="";
	$scope.result="";
	$scope.checkItems=function(){
		const str= $scope.message;
		const word=str.split(',');
		var items=0;
		for (var i = 0; i < word.length; i++) {
			if(word[i]!="")
			{
				items++;
			}
		}
		if(items==0)
		{
			$scope.myStyle={
				"color":"red"
			}
			$scope.borderClr={
				"border-width":"3px",
				"border-color":"red"
			}
			$scope.result="Please enter data first";
		}
		else{
		if (items<=3)
		{

			$scope.result="Enjoy!!!";
		}
		if(items>3)
		{
			$scope.result="Too Much!!";
		}
			$scope.myStyle={
				"color":"green"
			}
			$scope.borderClr={
				"border-width":"3px",
				"border-color":"green"
			}
		}
	};
}

})();
