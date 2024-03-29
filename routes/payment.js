const { Router } = require('express');
const paymentController = require('../controllers/payment');

const app = Router();

    app.get('/', paymentController.index);
    app.post('/confirmPayment', paymentController.confirmPayment);
    app.post('/update', paymentController.update);
    app.get('/delete', paymentController.deleteRow);
    app.get('/show', paymentController.show);

module.exports = app ;