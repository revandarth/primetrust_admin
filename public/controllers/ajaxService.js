angular.module('ajaxApp',[]).service('ajaxService', ajaxService);
ajaxService.$inject = ['$http', '$q'];
function ajaxService($http, $q) {
    this.ajaxData = function (options) {
        options.postInfo = options.postInfo || undefined;
        options.request = options.request || undefined;
      //  options.headType = (options.upload) ? undefined : options.headType || "application/json; charset=utf-8";  //options.headType
        options.responseType = options.responseType || undefined;
        options.params = options.params || undefined;
        var def = $q.defer();
        $http({
            url: options.url,
            method: options.type,
            params: options.params,
            data: options.postInfo,
            transformRequest: options.request,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', "Authorization": "Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6"},
            responseType: options.responseType
        }).then(function (x) {
            def.resolve(x);
        }, function (e) {
            def.reject(e);
        });
        return def.promise;
    };
};
