angular.module('stackWatch').factory('Tech', (MyFirebase, FilterState) => {
    const TECH_ALL = 'All';

    let tech = {},
        name2logo = {
            PHP: 'css/images/tech/php.png',
            CSS3: 'css/images/tech/css3.png',
            HTML5: 'css/images/tech/html5.png',
            JavaScript: 'css/images/tech/javascript.png'
        },
        name2color = {
            PHP: '#6082bb',
            CSS3: '#0170ba',
            HTML5: '#f16529',
            JavaScript: '#e5a228'
        },
        techData = [];

    let getData = () => {
        let data        = [],
            filterState = FilterState.getState(),
            techList    = filterState.tech === TECH_ALL ? tech.getTechList() : [filterState.tech];

        _.each(techList, tech => {
            let rawData     = techData[filterState.provider][tech],
                jobListings = 0;

            _.each(rawData, item => {
                jobListings += item.numJobs;
            });
            jobListings && data.push({name: tech, y: jobListings, color: name2color[tech]})
        });

        return data;
    };

    tech.getTechList = () => {
        return ['All', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Python', 'Ruby', 'Perl', 'C#', 'C++', 'C', 'Swift', 'Objective-C']; 
    };

    tech.getLogo = name => {
        return name2logo[name];
    };

    tech.fetchTechData = () => {
        return MyFirebase.getAll().then(data => techData = data);
    };

    tech.getTechData = () => {
        return [{
            showInLegend: false,
            name: null,
            data: getData()
        }];
    };

    return tech;
});