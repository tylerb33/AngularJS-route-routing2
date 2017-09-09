"use strict";

/*

    handle data and functionality needed in list.html
    using routeFactory to load names an descriptions separately

 */

app.controller("route1Ctrl", function($scope, routeFactory){


    routeFactory.getRoute1()
    	.then((highway1) => {
                $scope.highwayname = highway1.name;
                $scope.highwaydescription = highway1.description;
                // $scope.allNames = allNames.name;
                // console.log ("all highway names", $scope.allNames);
        });
});