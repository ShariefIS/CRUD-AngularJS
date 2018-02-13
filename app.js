var app = angular.module('myApp', []);
app.controller('myCntrl', function ($scope) {
    $scope.emrg = ["Accident", "Fire", "Theft"];
    $scope.data = [];
    //$scope.data=window.localStorage['emergency_data'];
    $scope.Save = function () {
        x = {
            Typemg: $scope.typemg,
            Name: $scope.name,
            Phn: $scope.phn,
            Addr: $scope.addr,
            Addr2: $scope.addr2,
            Landm: $scope.landm,
            Pin: $scope.pin,
            Check1: $scope.customCheck1,
            Check2: $scope.customCheck2,
            Check3: $scope.customCheck3,
            Num: $scope.counter
        }
        $scope.data.push(x);
        document.forms["emgFomr"].reset();
        $scope.counter = 0;
        $scope.typemg = null;
        $scope.name = null;
        $scope.phn = null;
        $scope.addr = null;
        $scope.addr2 = null;
        $scope.landm = null;
        $scope.pin = null;
        $scope.customCheck1 = null;
        $scope.customCheck2 = null;
        $scope.customCheck3 = null;
        //window.localStorage['emergency_data'] = angular.toJson(data);
    };
});
