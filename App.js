const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000

app.get("/estado", (req, res) => {
    const datos = new Date();

    res.status(200).json({
        servicio: "backend",
        version: "1.11.2",
        entorno: "production",
        estado: "servicio en funcionamiento",
        fecha: datos.toISOString().slice(0, 19).replace("T", " "),
        hora: Date.now()
    });
});

app.post("/datos", (req, res) => {
    const { nombre, correo, edad } = req.body;

    if (!nombre || !correo || !edad) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    const ahora = new Date();

    const data = {
        id: Date.now(),
        nombre,
        correo,
        edad
    };

    res.status(201).json({
        mensaje: "Registro creado correctamente",
        data: data,
        fechaRegistro: ahora.toISOString(),
        horaRegistro: String(Date.now())
    });
});

app.put("/datos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({
      mensaje: "Nombre y correo son obligatorios"
    });
  }

  const ahora = new Date();

  res.status(200).json({
    mensaje: "Registro creado correctamente",
    idUsuario: id,
    dataactualizados: {
      nombre: nombre,
      correo: correo
    },
    fechaRegistro: ahora.toISOString(),
    horaRegistro: String(Date.now())
  });
});

app.listen(PORT, () => {
    console.log(`servicio corriendo en http://localhost:${PORT}`);
})
