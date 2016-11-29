(function() {
    'use strict';

    angular
        .module('movie-finder')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function SearchController(movieFactory, toastr) {
        var vm = this;

        vm.callOmdbApi = callOmdbApi;


        ////////////////

        function callOmdbApi(input) {
            movieFactory
                .searchForMovie(input)
                .then(function(response) {
                    vm.results = response.data.Search;
                })
                .catch(function(error) {
                    toastr.error('Something went wrong', 'Error');
                });
        }
    }
})();
