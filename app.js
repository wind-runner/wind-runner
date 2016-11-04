/**
 * Created by Administrator on 2016/10/25.
 */

var app = angular.module('app',[
        'app.movieList',
        'app.movieDetail',
        'ui.bootstrap',
        'ngRoute'
    ]);

app.directive('selectLink',[function () {
    var item = [];
    return{
        restrict:"A",
        link: function (scope, element, attr) {
            item. push(element);
            element.bind('click', function (e) {
                item.forEach(function (item) {
                    if(item === element){
                        item.parent().addClass('active');
                    }else{
                        item.parent().removeClass('active');
                    }
                })
            })
        }

    }
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/detail/:movieId',{
        controller:'MovieDetailController',
        templateUrl:'movie/movie_detail.html'
}).when('/:type/:page?',{
        controller:'MovieListController',
        templateUrl:'movie/movie_list.html'
    }).otherwise({
        redirectTo:'/in_theaters/1'
    })
}]);
app.constant('URLConfig',{
    page_size: 20,
    appURL:'https://api.douban.com/v2/movie'
});