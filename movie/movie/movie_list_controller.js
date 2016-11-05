/**
 * Created by Administrator on 2016/10/25.
 */
var mlmodule = angular.module('app.movieList',[]);

mlmodule.controller('MovieListController',[
    '$scope','URLConfig','$routeParams','$http','$rootScope','$route',
    function ($scope,$URLConfig,$routeParams,$http,$rootScope,$route) {
        console.log("翠花");
        var count = $URLConfig.page_size || 20;
        var appurl = $URLConfig.appURL;

        var type = $routeParams.type || 'in_theaters';
        var page = $routeParams.page || 1;

        $scope.currentPage = page;
        $scope.type = type;
        $scope.loading = true;
        $scope.size = count;

        var url = appurl +'/'+ type + '?count=' + count + '&start='+ page + '&callback=movieListCallBack';
        console.log(url);
        $http.jsonp(url).error(function () {

        });
    window.movieListCallBack = function (jsonData) {
        console.log(jsonData);
        $scope.title = jsonData.title;
        $scope.total = jsonData.total;
        $scope.movies = jsonData.subjects;
        $scope.loading = false;
    };
        $scope.$watch('currentPage', function (newValue, oldValue) {
            if(newValue !== oldValue){
                $scope.updateParams({
                    page: newValue
                })
            }
        })
    }
]);