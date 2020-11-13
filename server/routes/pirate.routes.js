const piratesCtl = require('../controllers/pirates.controller');

module.exports = app => {
    app.get('/api/pirates', piratesCtl.getAll)
    app.post('/api/pirates', piratesCtl.create)
    app.get('/api/pirates/:id', piratesCtl.getOne)
    app.put('/api/pirates/:id', piratesCtl.update)
    app.delete('/api/pirates/:id', piratesCtl.delete)
    
}