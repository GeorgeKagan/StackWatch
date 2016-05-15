angular.module('stackWatch').factory('Indeed', ($http) => {
    const API_URL = `http://api.indeed.com/ads/apisearch?publisher=6162743557302639&q=java&v=2&limit=1000&format=json&highlight=0&start=0&end=25&callback=JSON_CALLBACK`;

    let indeed = {};

    indeed.fetchFromApi = () => {
        $http.jsonp(API_URL).then(data => {
            dd(data);
        });
    };

    indeed.saveToDatabase = () => {

    };

    return indeed;
});