angular.module('stackWatch').factory('Tech', ($injector, MyFirebase, FilterState) => {
    const TECH_ALL = 'All';

    let tech = {},
        name2logo = {
            PHP: 'css/images/tech/php.png',
            CSS3: 'css/images/tech/css3.png',
            HTML5: 'css/images/tech/html5.png',
            JavaScript: 'css/images/tech/javascript.png',
            'Objective-C': 'css/images/tech/objective-c.png',
            Swift: 'css/images/tech/swift.png',
            Ruby: 'css/images/tech/ruby.png',
            Perl: 'css/images/tech/perl.png',
        },
        name2color = {
            PHP: '#6082bb',
            CSS3: '#0170ba',
            HTML5: '#f16529',
            JavaScript: '#e5a228'
        },
        techData = [];

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
        let filterState = FilterState.getState(),
            techList    = filterState.tech === TECH_ALL ? tech.getTechList().splice(1) : [filterState.tech],
            provider    = $injector.get(filterState.provider),
            data        = provider.parseRawData(techData, techList, name2color);

        return [{
            showInLegend: false,
            name: null,
            data: data
        }];
    };

    return tech;
});