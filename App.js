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


app.listen(PORT, () => {
    console.log(`servicio corriendo en http://localhost:${PORT}`);
})

