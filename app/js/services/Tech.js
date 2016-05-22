angular.module('stackWatch').factory('Tech', ($injector, MyFirebase, FilterState) => {
    const TECH_ALL = 'All';

    let tech = {},
        name2logo = {
            PHP: 'php.png',
            CSS3: 'CSS3.png',
            HTML5: 'html5.png',
            JavaScript: 'javascript.png',
            iOS: 'objective-c.png',
            Swift: 'swift.png',
            Ruby: 'ruby.png',
            Perl: 'perl.png',
            Java: 'java.png',
            Python: 'python.png',
            'C': 'c.png',
            'C#': 'csharp.png',
            'C++': 'cpp.png'
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
        return `css/images/tech/${name2logo[name]}`;
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