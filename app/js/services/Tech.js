angular.module('stackWatch').factory('Tech', ($injector, MyFirebase, FilterState) => {
    const TECH_ALL = 'All';

    let tech = {},
        name2logo = {
            PHP: 'css/images/tech/php.png',
            CSS3: 'css/images/tech/CSS3.png',
            HTML5: 'css/images/tech/html5.png',
            JavaScript: 'css/images/tech/javascript.png',
            iOS: 'css/images/tech/objective-c.png',
            Swift: 'css/images/tech/swift.png',
            Ruby: 'css/images/tech/ruby.png',
            Perl: 'css/images/tech/perl.png',
            Java: 'css/images/tech/java.png',
            Python: 'css/images/tech/python.png',
            'C': 'css/images/tech/c.png',
            'C#': 'css/images/tech/c#.png',
            'C++': 'css/images/tech/c++.png'
        },
        name2color = {
            PHP: '#6082bb',
            CSS3: '#0170ba',
            HTML5: '#f16529',
            JavaScript: '#e5a228',
            'C#': '#9c6fd7',
            'C++': '#3d739c',
            'C': '#a8b9cc',
            Java: '#ea8733',
            Python: '#ffcc3c',
            Ruby: '#d84a35',
            Perl: '#b2d0f0',
            Swift: '#fa7547',
            iOS: '#848484'
        },
        techData = [];

    tech.getTechList = () => {
        return ['All', 'PHP', 'JavaScript', 'Java', 'Python', 'Ruby', 'Perl', 'C#', 'C++', 'iOS'];
    };

    tech.getLogo = name => {
        return encodeURIComponent(name2logo[name]);
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