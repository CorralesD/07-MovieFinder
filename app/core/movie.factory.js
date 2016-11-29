(function() {
    'use strict';

    angular
        .module('movie-finder')
        .factory('movieFactory', movieFactory);

    function movieFactory($http) {
        var service = {
            searchForMovie: function(input) {
                return $http.get('http://omdbapi.com/?s=' + input)
            },
            getById: function(imdbId) {
                return $http.get('http://omdbapi.com?i=' + imdbId);
            }
        };

        return service;
    }

})();