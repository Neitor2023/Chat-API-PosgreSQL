// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationValidator = [
  check("title", "Error con el campo title")
    .exists()
    .withMessage("Title es obligatorio")
    .notEmpty()
    .withMessage("Title no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 100 })
    .withMessage("El Title debe tener minimo 6 caracteres y máximo 100"),
  check("type_couple", "Error con el campo type_couple")
    .exists()
    .withMessage("type_couple es obligatorio")
    .notEmpty()
    .withMessage("type_couple no puede estar vacio")
    .isBoolean()
    .withMessage("type_couple debe ser un Boolean"),
  validateResult,
];

// object.hasOwnProperty('propertyName')
module.exports = { createConversationValidator };