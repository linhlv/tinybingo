module.exports = (app) =>{
    app.get('/', (req, res, next)=>{
        return res.render('index.ejs', {});
    });    

    app.get('/login', (req, res, next)=>{
        return res.render('login.ejs', {});
    });    
}