module.exports = (app) =>{
    const ejs = require('ejs');
    const engine = require('ejs-locals');
    const path = require('path');
    const compression = require('compression');
    const bodyParser = require('body-parser');
    const methodOverride = require('method-override');
    const cookieParser = require('cookie-parser');
    const errorHandler = require('errorhandler');
    const expressValidator = require('express-validator');

    
    app.set('views', path.join(__dirname, '../views'));
    app.engine('ejs', engine);
    app.set('view engine', 'ejs'); // set up ejs for templating
    
    app.use(expressValidator());
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
}
