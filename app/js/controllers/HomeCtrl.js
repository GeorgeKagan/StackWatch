angular.module('stackWatch').controller('HomeCtrl', function($scope, $timeout) {
    $scope.$on('$viewContentLoaded', () => $timeout(() => $scope.$broadcast('updateChart')));
});