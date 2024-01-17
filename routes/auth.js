/*  
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok:true
    })
});

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;
