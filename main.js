const pizzas = [
  {
    id: 1,
    nombre: "muzzarella",
    precio: 560,
    ingredientes: ["harina", "agua","levadura", "quesoMuzzarella"],
  },
  {
    id: 2,
    nombre: "napolitana",
    precio: 700,
    ingredientes: ["harina", "agua","levadura", "tomate"],
  },
  {
    id: 3,
    nombre: "fugazza",
    precio: 800,
    ingredientes: ["harina", "agua","levadura", "cebolla"],
  },
  {
    id: 4,
    nombre: "pollo",
    precio: 900,
    ingredientes: ["harina", "agua","levadura", "pollo"],
  },
  {
    id: 5,
    nombre: "tomate y morrón",
    precio: 950,
    ingredientes: ["harina", "agua","levadura", "morron","tomate"],
  },
  {
    id: 6,
    nombre: "la incomible de anchoas",
    precio: 650,
    ingredientes: ["harina", "agua","levadura", "quesoMuzzarella"],
  },
];




// a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizzas)=>{
return (pizzas.id % 2 !== 0)
 })

 console.log("Las pizzas con id impar son:",idImpar) 

// b) ¿Hay alguna pizza que valga menos de $600?

const menos600 = pizzas.filter((pizzas)=>{
  return (pizzas.precio < 600)   
})

console.log("La pizza que cuesta menos de $600 es:",menos600);

// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizzas)=>{
  console.log("Los nombres y precios de cada pizza:" ,pizzas.nombre,pizzas.precio)

})

// d) Todos los ingredientes de cada pizza

const ingredientes = pizzas.map(pizzas => pizzas.ingredientes)
console.log("Los ingredientes de cada una de nuestras pizzas son:",ingredientes);