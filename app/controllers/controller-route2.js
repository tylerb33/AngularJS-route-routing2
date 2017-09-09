"use strict";

/*

    handle data and functionality needed in list.html
    using routeFactory to load names an descriptions separately

 */

app.controller("route2Ctrl", function($scope, routeFactory){


    routeFactory.getRoute2()
        .then((highway2) => {
                $scope.highwayname = highway2.name;
                $scope.highwaydescription = highway2.description;
                // $scope.allNames = allNames.name;
                // console.log ("all highway names", $scope.allNames);
        });
});