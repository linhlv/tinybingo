const path = require('path');
const core = require('./core');
const services = require('./services');
const setup = require('./setup');
const web = require('./web');
const api = require('./api');

const options = {
    staticFolder : path.join(__dirname, 'client'),
    port : (process.env.PORT||8080)
};

core.server
    .init(options)
    .then((server)=>{
        const {app, start} = server;                

        setup(app);
        web(app);
        
        
        //const apiOptions = {service : services.payment()};
        const apiOptions = {service : null};
        api.ping(app, apiOptions);       
        //api.fileManager(app, apiOptions);       
        

        start().then((listeningServer)=>{
            console.log(`Magic happen on ${options.port}`);
        });
    });
    