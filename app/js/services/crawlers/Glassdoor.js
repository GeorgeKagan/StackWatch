angular.module('stackWatch').factory('Glassdoor', ($http, $q, Tech, MyFirebase) => {
    const API_URL      = `https://api.glassdoor.com/api/api.htm?t.p=66461&t.k=OuQ7fvdsiM&format=json&v=1&action=jobs-stats&returnJobTitles=true&callback=JSON_CALLBACK`;
    const FIREBASE_KEY = 'Glassdoor';

    let glassdoor = {},
        techList  = Tech.getTechList(),
        techCount = techList.length,
        data      = {};

    glassdoor.fetchFromApi = () => {
        let q = $q.defer();

        _.each(techList, (tech, i) => {
            $http.jsonp(`${API_URL}&q=${encodeURIComponent(tech)}`).then(({data: {response: {jobTitles: jobs}}}) => {
                data[tech] = [];
                _.each(jobs, ({jobTitle, numJobs}) => data[tech].push({jobTitle, numJobs}));
                techCount - 1 === i && q.resolve();
            });
        });

        return q.promise;
    };

    glassdoor.saveToDatabase = () => {
        if (!_.isEmpty(data)) {
            MyFirebase.reset(FIREBASE_KEY).then(() => MyFirebase.save(FIREBASE_KEY, data));
        }
    };

    return glassdoor;
});