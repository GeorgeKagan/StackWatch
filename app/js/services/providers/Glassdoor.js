angular.module('stackWatch').factory('Glassdoor', ($http, $q, Tech, MyFirebase) => {
    const API_URL      = `http://api.glassdoor.com/api/api.htm?t.p=66479&t.k=gPkUAiDFPWa&format=json&v=1&action=jobs-stats&returnJobTitles=true&jc=29&callback=JSON_CALLBACK`;
    const FIREBASE_KEY = 'Glassdoor';

    let glassdoor = {},
        techList  = Tech.getTechList().splice(1),
        techCount = techList.length;

    glassdoor.fetchFromApi = () => {
        let q = $q.defer();

        _.each(techList, (tech, i) => {
            let url = `${API_URL}&q=${encodeURIComponent(tech)}`;

            $http.jsonp(url).then(({data: {response: {jobTitles: jobs}}}) => {
                let data = [];

                _.each(jobs, ({jobTitle, numJobs}) => data.push({jobTitle, numJobs}));
                glassdoor.saveToDatabase(tech, data);
                techCount - 1 === i && q.resolve();
            });
        });

        return q.promise;
    };

    glassdoor.saveToDatabase = (techKey, data) => {
        if (!_.isEmpty(data)) {
            MyFirebase.saveTechData(FIREBASE_KEY, techKey, data);
        }
    };

    glassdoor.parseRawData = (techData, techList, name2color) => {
        let data = [];

        _.each(techList, tech => {
            let rawData     = techData['Glassdoor'][encodeURIComponent(tech)],
                jobListings = 0;

            _.each(rawData, item => {
                //todo: filter results to count only relveant ones
                jobListings += item.numJobs;
            });
            jobListings && data.push({name: tech, y: jobListings, color: name2color[tech]})
        });

        return data;
    };

    return glassdoor;
});