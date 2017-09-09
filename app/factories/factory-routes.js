"use strict";

/*

    provide the basic crud interactions with firebase
 
*/

app.factory("routeFactory", function($q, $http){

    const getRoute1 = function(user){
        // let routes1 = [];
        return $q( (resolve, reject) => {
            $http.get("data/route1.json")
            .then((itemObject) => {
                let highway1 = itemObject.data.highway1;
                resolve(highway1);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getRoute2 = function(user){
        // let routes1 = [];
        return $q( (resolve, reject) => {
            $http.get("data/route2.json")
            .then((itemObject) => {
                let highway2 = itemObject.data.highway2;
                resolve(highway2);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return {getRoute1, getRoute2};
});