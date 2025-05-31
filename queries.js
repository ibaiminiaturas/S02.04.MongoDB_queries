//1.- Escriba una consulta para mostrar todos los documentos de la colección Restaurantes.

db.restaurants.find()

//2.- Escribe una consulta para mostrar el restaurante, nombre, barrio y cocina de todos los documentos de la colección del restaurante.

db.getCollection('restaurants').find(
  {},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1
  }
);

//3.- Escriba una consulta para mostrar el restaurante, nombre, barrio y cocina, pero excluyendo el campo de todos los documentos de la colección del restaurante.

db.getCollection('restaurants').find(
  {},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id" : 0
  }
);

//4.- Escriba una consulta para mostrar el restaurante, nombre, barrio y código postal, pero excluyendo el campo de identificación de todos los documentos de la colección del restaurante.

db.getCollection('restaurants').find(
  {},
  {
    "borough": 1,
    "address.zipcode": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id" : 0
  }
);

//5.- Escriba una consulta para mostrar todos los restaurantes que están en el Bronx.

db.restaurants.find({"borough" : "Bronx"})

//6.- Escribe una visita para mostrar los primeros cinco restaurantes en el Bronx.

db.restaurants.find({"borough" : "Bronx"}).limit(5)

//7.- Escribe una llamada para mostrar a los cinco restaurantes después de saltar los primeros cinco del Bronx.

db.restaurants.find({"borough" : "Bronx"}).limit(5).skip(5)


//8.- Escriba una consulta para encontrar los restaurantes que tienen una puntuación igual o mayor de 90.

db.restaurants.find({"grades.score": {$gte: 90}})

//9.- Escriba una consulta para encontrar restaurantes que tengan una puntuación superior a 80 pero menos de 100.

db.restaurants.find({"grades.score" : {$gt : 80, $lt : 100 }})

//10.- Escriba una consulta para encontrar los restaurantes que se encuentran en una longitud de menos de -95,754168.

db.restaurants.find({"address.coord.0" : { $lt : -95.754168}})

//11.- Escribe una visita a MongoDB para encontrar restaurantes que no cocinan comida americana y tengan una puntuación de más de 70 y latitudes más bajas que -65,754168.

db.restaurants.find({
               $and: [
                     {"cuisine" : { $ne : "American" }},
                     {"grades.score" : { $gt : 70 }},
                     {"address.coord.1" : { $lt : 65.754168}}
                    ]
                })


//12.- Escribe una consulta para encontrar restaurantes que no preparen comida americana y tengan una puntuación de más de 70, 
// y que se encuentran en menos de 65,754168. Nota: Por favor, haga esto sin usar el operador 

db.restaurants.find({"cuisine" : { $ne : "American" },
                     "grades.score" : { $gt : 70 },
                     "address.coord.1" : { $lt : 65.754168}})

//13.- Escriba una consulta para encontrar restaurantes que no preparen comida americana, tengan una nota de "A" y no pertenezcan a Brooklyn. El documento debe ser mostrado de acuerdo con la cocina en orden descendente.

db.restaurants.find({
                $and: [
                    {"cuisine" : { $ne : "American" }},
                    {"grades.grade" : "A"},
                    {"borough" : { $ne : "Brooklyn" }}  
                ]
            })

//14.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para aquellos restaurantes que contienen 'Wil' en las tres primeras letras a su nombre.

db.restaurants.find( 
                    {"name": { $regex: "^Wil"}},
                    {"borough": 1,  
                    "cuisine": 1,
                    "name": 1,
                    "restaurant_id": 1,
                    "_id": 0
                    })
                


//15.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para aquellos restaurantes que contienen "ces" en las últimas tres letras a su nombre.

db.restaurants.find( 
                    {"name": { $regex: "ces$"}},
                    {"borough": 1,  
                    "cuisine": 1,
                    "name": 1,
                    "restaurant_id": 1,
                    "_id": 0
                    })

//16.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para restaurantes que contienen 'Reg' en cualquier lugar de su nombre.

db.restaurants.find( 
                    {"name": { $regex: "Reg"}},
                    {"borough": 1,  
                    "cuisine": 1,
                    "name": 1,
                    "restaurant_id": 1,
                    "_id": 0
                    })

//17.- Escriba una consulta para encontrar los restaurantes que pertenecen al Bronx y preparar platos americanos o chinos.

db.restaurants.find({
    $and: [
        {"borough": "Bronx"},
        {"cuisine": { $in: ["American", "Chinese"] }}
    ]
})  

