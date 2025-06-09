//1.- Escriba una consulta para mostrar todos los documentos de la colección Restaurantes.

db.restaurants.find()

//2.- Escribe una consulta para mostrar el restaurante, nombre, barrio y cocina de todos los documentos de la colección del restaurante.

db.restaurants.find(
  {},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1
  }
);

//3.- Escriba una consulta para mostrar el restaurante, nombre, barrio y cocina, pero excluyendo el campo de todos los documentos de la colección del restaurante.

db.restaurants.find(
  {},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//4.- Escriba una consulta para mostrar el restaurante, nombre, barrio y código postal, pero excluyendo el campo de identificación de todos los documentos de la colección del restaurante.

db.restaurants.find(
  {},
  {
    "borough": 1,
    "address.zipcode": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//5.- Escriba una consulta para mostrar todos los restaurantes que están en el Bronx.

db.restaurants.find({ "borough": "Bronx" })

//6.- Escribe una visita para mostrar los primeros cinco restaurantes en el Bronx.

db.restaurants.find({ "borough": "Bronx" }).limit(5)

//7.- Escribe una llamada para mostrar a los cinco restaurantes después de saltar los primeros cinco del Bronx.

db.restaurants.find({ "borough": "Bronx" }).limit(5).skip(5)


//8.- Escriba una consulta para encontrar los restaurantes que tienen una puntuación igual o mayor de 90.

db.restaurants.find({ "grades.score": { $gte: 90 } })

//9.- Escriba una consulta para encontrar restaurantes que tengan una puntuación superior a 80 pero menos de 100.

db.restaurants.find({ "grades": { $elemMatch: { "score": { $gt: 80, $lt: 100 } } }})

//10.- Escriba una consulta para encontrar los restaurantes que se encuentran en una longitud de menos de -95,754168.

db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } })

//11.- Escribe una visita a MongoDB para encontrar restaurantes que no cocinan comida americana y tengan una puntuación de más de 70 y latitudes más bajas que -65,754168.

db.restaurants.find({
  $and: [
    { "cuisine": { $ne: "American " } },
    { "grades.score": { $gt: 70 } },
    { "address.coord.1": { $lt: 65.754168 } }
  ]
})


//12.- Escribe una consulta para encontrar restaurantes que no preparen comida americana y tengan una puntuación de más de 70, 
// y que se encuentran en menos de 65,754168. Nota: Por favor, haga esto sin usar el operador 

db.restaurants.find({
  "cuisine": { $ne: "American " },
  "grades.score": { $gt: 70 },
  "address.coord.1": { $lt: 65.754168 }
})

//13.- Escriba una consulta para encontrar restaurantes que no preparen comida americana, tengan una nota de "A" y no pertenezcan a Brooklyn. El documento debe ser mostrado de acuerdo con la cocina en orden descendente.

db.restaurants.find({
  $and: [
    { "cuisine": { $ne: "American " } },
    { "grades.grade": "A" },
    { "borough": { $ne: "Brooklyn" } }
  ]
})

//14.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para aquellos restaurantes que contienen 'Wil' en las tres primeras letras a su nombre.

db.restaurants.find(
  { "name": { $regex: "^Wil" } },
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  })



//15.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para aquellos restaurantes que contienen "ces" en las últimas tres letras a su nombre.

db.restaurants.find(
  { "name": { $regex: "ces$" } },
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  })

//16.- Escribe una consulta para encontrar el restaurante, nombre, barrio y cocina para restaurantes que contienen 'Reg' en cualquier lugar de su nombre.

db.restaurants.find(
  { "name": { $regex: "Reg" } },
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  })

//17.- Escriba una consulta para encontrar los restaurantes que pertenecen al Bronx y preparar platos americanos o chinos.

db.restaurants.find({
  $and: [
    { "borough": "Bronx" },
    { "cuisine": { $in: ["American ", "Chinese"] } }
  ]
})


//18.- Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn.

db.restaurants.find({
  $or: [
    {
      "borough": {
        $in: [
          "Staten Island",
          "Queens",
          "Brooklyn"]
      }
    }
  ]
},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//19.- Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn.

db.restaurants.find({
  "borough": {
    $nin: [
      "Staten Island",
      "Queens",
      "Brooklyn"]
  }

},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//20.- Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10.

db.restaurants.find({
  "grades.score": { $lt: 10 }
},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//21.- Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ',
//  'Chinese' o el name del restaurant comença amb lletres 'Wil'.

db.restaurants.find({
  $and: [
    { "cuisine": "Seafood" },
    { "cuisine": { $nin: ["American ", "Chinese"] } },
    { "name": { $not: /^Wil/ } }
  ]
},
  {
    "borough": 1,
    "cuisine": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//22.- Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".

db.restaurants.find(
  {
    "grades": {
      $elemMatch: {
        "grade": "A",
        "score": 11,
        "date": ISODate("2014-08-11T00:00:00Z")
      }
    }
  },
  {
    "grades": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);

//23.- Escriu una consulta per trobar el restaurant_id, name i grades 
// per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z".

db.restaurants.find(
  {
    "grades.1.grade": "A",
    "grades.1.score": 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z")

  },
  {
    "grades": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);


//24-. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element de l'array coord conté un valor entre 42 i 52.

db.restaurants.find(
  {
    "address.coord.1": { $gte: 42, $lte: 52 },
  },
  {
    "address": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);


//25.- Escriu una consulta per organitzar els restaurants per nom en ordre ascendent.

db.restaurants.find().sort({ "name": 1 })

//26.- Escriu una consulta per organitzar els restaurants per nom en ordre descendent.

db.restaurants.find().sort({ "name": -1 })

//27.- Escriu una consulta per organitzar els restaurants pel nom de la cuisine en ordre ascendent i pel barri en ordre descendent.

db.restaurants.find().sort([
  { "cuisine": 1 },
  { "burough": -1 }])

//28.- Escriu una consulta per saber si les direccions contenen el carrer.

db.restaurants.find({
  "address.street": { $exists: true }
})


//29.- Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double.

db.restaurants.find({
  "address.coord": { $elemMatch: { $type: "double" } }
})

//30.- Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7.

db.restaurants.find(
  {
    "grades.score": { $mod: [7, 0] }
  },
  {
    "grades": 1,
    "name": 1,
    "restaurant_id": 1,
    "_id": 0
  }
);


//31.- Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name.

db.restaurants.find(
  {
    "name": { $regex: "mon" }
  },
  {
    "borough": 1,
    "name": 1,
    "cuisine": 1,
    "address.coord": 1,
    "_id": 0
  }
);

//32.- Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'Mad' com a primeres tres lletres del seu name.

db.restaurants.find(
  {
    "name": { $regex: "^Mad" }
  },
  {
    "borough": 1,
    "name": 1,
    "cuisine": 1,
    "address.coord": 1,
    "_id": 0
  }
);


