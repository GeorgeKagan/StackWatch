angular.module('stackWatch').factory('Tech', () => {
    let tech = {};

    tech.getList = () => {
        return ['PHP', 'JavaScript', 'HTML5', 'CSS3'];
    };

    tech.getTechData = () => {
        return [{
            name: 'PHP',
            data: [5],
            color: '#ddb641'
        }, {
            name: 'JavaScript',
            data: [3],
            color: '#5a3e30'
        }, {
            name: 'HTML5',
            data: [2],
            color: '#6aae87'
        }, {
            name: 'CSS3',
            data: [3],
            color: '#da5e18'
        }];
    };

    return tech;
});