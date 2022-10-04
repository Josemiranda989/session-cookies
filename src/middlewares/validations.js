const { body, check } = require('express-validator')

let validations = [
  check("name").isLength({ min: 1 }).withMessage("Debe ingresar un nombre"),
  check("email").isEmail().withMessage("Debe ingresar un email valido"),
  check("color").isLength({ min: 1 }).withMessage("Debe seleccionar un color"),
  body("age").custom((value) => {
    if (isNaN(value)) {
      throw new Error("El valor ingresado debe ser un numero");
    } else {
      return true;
    }
  }),
];

module.exports = validations;