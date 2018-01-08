var wiki = angular.module('wiki', []);
wiki.controller('wikiController', function($scope, $http){
	 $scope.search = "";
	 $scope.$watch('search', function() {
        $scope.l = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $scope.search + "&format=json&callback?";
		
		if ($scope.search != '') {
			$http.get($scope.l).then(function(response) {
               var names = response.data[1];
			   var describe = response.data[2];
			   var temp = [];
			   for (var i = 0; i < names.length; i++) {
				   temp.push({name: names[i], description: describe[i]});
			   }
			   $scope.data = temp;
            });
		} else {
			$scope.data = [];
		}
	});
});