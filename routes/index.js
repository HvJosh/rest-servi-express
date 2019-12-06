const express = require('express');
const router = express.Router();


router.get('/get', (req, res) => {
    res.json({ msg: 'hello word!' });

});


//cuando se va registar informacion nueva
router.post('/post', (req, res) => {

    let body = req.body;
    if (req.body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            msg: "Necesita nombre"
        });
    } else {
        res.json({
            persona: body
        });
    }
});

//actualizar la informacion
router.put('/put/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

//eliminar, realmente no se elimina si no se actualiza el estado
router.delete('/delete', (req, res) => {
    res.json('eliminar');
});

module.exports = router;