/**
 * Created by Administrator on 2016/10/25.
 */
var mdModule = angular.module('app.movieDetail',[]);

mdModule.controller("MovieDetailController",
    ['$scope','URLConfig','$http','$rootScope','$route','$routeParams',
        function ($scope,URLConfig,$http,$rootScope,$route,$routeParams) {
            console.log("翠花");
            var appurl = URLConfig.appURL;

            var movieId = $routeParams.movieId;

            var url = appurl + '/subject/' + movieId + "?callback=movieDetailCallBack";
            console.log(url);
            $http.jsonp(url).error(function () {

            });

            window.movieDetailCallBack = function (jsonData) {
                $scope.movie = jsonData;
            }
        }]);
