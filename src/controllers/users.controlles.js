const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ firstname, lastname, username, email, password: hashed });
    // de aqui para abajo no se ejecuta si create User tiene un error

    res.status(201).send();
    transporter
      .sendMail({
        from: "neitorme@gmail.com",
        to: email,
        subject: "Probando nodemailer",
        text: "Este seria el mensaje en texto plano",
        html: "<h1>Bienvenido al foro</h1><p>Espero que contribuyas y aprendas demasiado</p>",
      })
      .then(() => console.log("mensaje enviado"))
      .catch((error) => console.log(error));
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      // null -> false niego un falso obtengo un verdadero
      return next({
        status: 400,
        name: "Invalid email",
        message: "user not exist",
      });
    }

    // comparar las contraseñas
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "The password does not match with user email",
      });
    }
    const { firstname, lastname, id, username, rolId } = user;

    // no responder la contraseña

    // debemos devolver un token para que el usuario loggeado
    // pueda acceder a los recursos del back

    // Genear token
    const userData = { firstname, lastname, id, username, email, rolId };

    const token = jwt.sign(userData, "parangaricutirimucuaro", {
      algorithm: "HS512",
      expiresIn: "5m",
    });
    // agregar el token en userData
    userData.token = token;

    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createUser,
  login,
  findAllUsers,
};

// alguien esta editando