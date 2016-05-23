angular.module('stackWatch').factory('Dom', () => {
    let dom = {};

    dom.scrollToElem = (selector, speed = 1000) => {
        angular.element('html, body').animate({
            scrollTop: angular.element(selector).offset().top
        }, speed);
    };

    return dom;
});