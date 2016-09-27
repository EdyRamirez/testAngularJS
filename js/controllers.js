app.controller("appController", function appController($scope){
    //creamos un cliente default para la app
    $scope.client=[
        {
            person:{
                name:"Edgar",
                last_name:"Ramirez",
                second_last_name:"Celestino"
            },
            car:[
                {
                    mark:"Oldsmobile",
                    model:"Cutlass Supreme",
                    year:"1991",
                    color:"Blanco"
                }
            ]
        }
    ];
});

//route params es para identificar los segmentos de la url, en este caso, para reconocer usuarios
app.controller("infoUserController", function infoController($scope,$routeParams){
    $scope.client = $scope.client[$routeParams.id];
    $scope.id = $routeParams.id;
});

//creamos el controlador addPersonController para guardar personas nuevas con push
app.controller("addPersonController", function addPersonController($scope,$location){
    $scope.titleForm = "Informacion de la Persona";
    $scope.newPerson = {};
    $scope.newPerson = function(){
        $scope.client.push(
            {
                person: {
                    name: $scope.newPerson.first_name,
                    last_name: $scope.newPerson.last_name,
                    second_last_name: $scope.newPerson.second_last_name
                },
                car:[]
            }
        );
        $location.url("/");
    }
})

//creamos el controlador addCarPersonController para guardar automoviles nuevos con push
app.controller("addCarPersonController", function addCarPersonController($scope,$routeParams,$location){
    $scope.titleForm = "Informacion del Automovil";
    $scope.id = $routeParams.id;
    $scope.newCar = {};
    $scope.newCar = function(){
    //actualizamos la información del person con la id que lleva $routeParams
        $scope.client[$routeParams.id].car.push({
            mark: $scope.newCar.mark,
            model: $scope.newCar.model,
            year: $scope.newCar.year,
            color: $scope.newCar.color
        })
        $location.url("/info/user/"+$routeParams.id);
    }
})

//eliminamos el automovil dependiendo de su id de person y car
app.controller("removeCarPersonController", function removeController($scope,$routeParams,$location){

    $scope.user = $routeParams.id_person;
    $scope.car = $scope.client[$routeParams.id_person].car[$routeParams.id_car];

    $scope.removeCar = function(){
        //con splice  eliminamos un auto del array car, en este caso le decimos que debe eliminar
        //el que tenga el id que le pasamos con $routeParams, y con el 1, le decimos que sólo
        //debe eliminar 1, la función splice, como primer parámetro necesita la posición, que en este caso
        //es la id, y el segundo debe ser el número de elementos a eliminar
        $scope.client[$routeParams.id_person].car.splice($routeParams.id_car, 1);
        $location.url("/info/user/"+$routeParams.id_person);
    }


})

