angular.module('stackWatch').factory('Dom', $q => {
    let dom = {};

    dom.scrollToElem = (selector, speed = 1000, topBuffer = 0) => {
        let q = $q.defer();

        angular.element('html, body').animate({
            scrollTop: angular.element(selector).offset().top - topBuffer
        }, {duration: speed, done: () => q.resolve()});

        return q.promise;
    };

    return dom;
});