angular.module('stackWatch').factory('Dice', ($http) => {
    const API_URL = ``;

    let dice = {};

    dice.fetchFromApi = () => {
        $http.get(API_URL).then(data => {
            dd(data);
        });
    };

    dice.saveToDatabase = () => {

    };

    return dice;
});