angular.module('stackWatch').factory('Tech', () => {
    let tech = {},
        name2logo = {
            PHP: 'css/images/tech/php.png',
            CSS3: 'css/images/tech/css3.png',
            HTML5: 'css/images/tech/html5.png',
            JavaScript: 'css/images/tech/javascript.png'
        };

    tech.getTechList = () => {
        return ['All', 'PHP', 'JavaScript', 'HTML5', 'CSS3'];
    };

    tech.getLogo = name => {
        return name2logo[name];
    };

    tech.getTechData = () => {
        return [{
            showInLegend: false,
            name: null,
            data: [
                {name: 'PHP', y: 23.7, color: '#6082bb'},
                {name: 'JavaScript', y: 16.1, color: '#e5a228'},
                {name: 'HTML5', y: 14.2, color: '#f16529'},
                {name: 'CSS3', y: 14.0, color: '#0170ba'}
            ]
        }];
    };

    return tech;
});