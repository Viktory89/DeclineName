const express = require("express");
const lvovich = require("lvovich");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/sklonenie", (req, res) => {
    const { fio } = req.query; // ФИО из запроса
    if (!fio) {
        return res.status(400).json({ error: "Укажите ФИО в параметре fio" });
    }

    const result = lvovich.getNameCases(fio);
    res.json({ rod: result.genitive }); // Родительный падеж
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
