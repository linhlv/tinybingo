module.exports = (app, options) =>{
    const {service} = options;
    //const validation = require('./subscription.validation.middleware');
    //const process = require('./subscription.process.middleware');
    
    app.get('/ping', (req, res, next)=>{
        res.send('Pong');
    });
}