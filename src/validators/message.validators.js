// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createMessageValidator = [
  check("content", "Error con el campo content")
    .exists()
    .withMessage("Content es obligatorio")
    .notEmpty()
    .withMessage("Content no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string"),
  validateResult,
];

const loginUserValidator = [
  check("email", "Error con el campo email")
    .exists()
    .withMessage("email es obligatorio")
    .notEmpty()
    .withMessage("email no puede estar vacio")
    .isEmail()
    .withMessage("email no tiene formato de correo")
    .isLength({ min: 10, max: 50 })
    .withMessage("El email debe tener minimo 10 caracteres y máximo 50"),
  check("password", "Error con el campo password")
    .exists()
    .withMessage("password es obligatorio")
    .notEmpty()
    .withMessage("password no puede estar vacio")
    .isString()
    .withMessage("El password debe ser un string")
    .isLength({ min: 4 })
    .withMessage("El password debe tener minimo 8 caracteres"),
  validateResult,
];

// object.hasOwnProperty('propertyName')
module.exports = { createMessageValidator };