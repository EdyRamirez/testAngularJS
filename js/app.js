//creamos nuestro modulo llamado app
var app = angular.module("app", []);

//hacemos el ruteo de nuestra aplicación
app.config(function($routeProvider){
    $routeProvider.when("/", {
            templateUrl : "templates/index.html"
        })
        //esta es la forma de decirle a angular que vamos a pasar una variable por la url
        .when('/info/user/:id', {
            title: 'Automoviles',
            templateUrl : "templates/person/info.html",
            controller : "infoUserController"
        })
        .when("/addPerson", {
            title: 'Añadir Persona',
            templateUrl : "templates/person/add.html",
            controller : "addPersonController"
        })
        .when('/add/car/user/:id', {
            title: 'Agregar Automovil',
            templateUrl : "templates/car/add.html",
            controller : "addCarPersonController"
        })
        .when("/remove/car/:id_car/user/:id_person", {
            title: 'Eliminar usuario',
            templateUrl : "templates/car/remove.html",
            controller : "removeCarPersonController"
        })
        .otherwise({ redirectTo : "/"})
})
