const messages = [
    "Harrison",
    "Ana",
    "Diego",
    "Laura",
    "Briggite",
    "Caroline",
    "Paulina"
];

// retornar el nombre del arreglo de manera aleatorea
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    // Math.floor: regresa el primer valor redondeado
    // Math.random: regresa un valor random
    // messages.length: multiplico este valor y el anterior para garantizar que devolvera un numero entre los indices de la lista.
    console.log(message);
};

module.exports = { randomMsg };