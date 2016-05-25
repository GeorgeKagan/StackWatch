angular.module('stackWatch')
    .directive('includeReplace', $timeout => {
        return {
            restrict: 'A',
            link: (scope, el) => {
                $timeout(() => el.replaceWith(el.children()));
            }
        };
    })
;