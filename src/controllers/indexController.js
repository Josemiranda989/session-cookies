const { validationResult } = require("express-validator");

module.exports = {
  // render de la vista principal
  index: function (req, res) {
    //Validamos si existe una session y renderizamos con la data
    if (req.session.name) {
      let usuario = req.session;
      return res.render("index", { data: usuario });
    }
      res.render("index");
  },
  // formulario de registro del usuario
  store: function (req, res) {
    // validación de errores
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("index", { errors: errors.errors });
    }
    // si no hay errores, creamos la session y redirigimos a la vista principal
    req.session.name = req.body.name;
    req.session.color = req.body.color;
    req.session.email = req.body.email;
    req.session.age = req.body.age;
    // si escogemos el checkbox recordar color creamos una cookie
    if (req.body.recordar_color) {
      res.cookie("color", req.body.color, { maxAge: 60 * 1000 });
    }
    res.redirect("/");
  },
  // render de vista colors
  color: function (req, res) {
    if (req.session.name) {
      let usuario = req.session;
      return res.render("color", { data: usuario });
    }
    res.render("color");
    },
    // borrar la session y la cookie
  borrar: (req, res) => {
    req.session.color = null;
    res.cookie("color", null, { maxAge: -1 });
    res.send("Color borrado");
  },
};
