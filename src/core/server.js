const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');


const init = (options)=>{
    let {staticFolder, port} = options;

    
    return new Promise((resolve, reject)=>{        
        const app = express();
        app.use(morgan('dev'));
        app.use(helmet());
        app.use((err, req, res, next)=>{
            reject(new Error('Something went wrong!, err: ' + err));
            res.status(500).send('Something went wrong!');
        });        
        
        app.use(express.static(staticFolder));

        resolve({
            app,
            start: ()=>{
                return new Promise((r, s)=>{
                    const server = app.listen(options.port, ()=>r(server));
                });                
            }
        });
    });
}

module.exports = Object.assign({}, {init})