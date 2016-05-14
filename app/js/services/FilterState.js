angular.module('stackWatch').factory('FilterState', () => {
    let filterState = {},
        state = {};

    filterState.setCountry   = country => state.country = country;
    filterState.setProvider  = provider => state.provider = provider;
    filterState.setTech      = tech => state.tech = tech;
    filterState.canShowChart = () => Object.keys(state).length === 3;
    filterState.getState     = () => state;

    return filterState;
});