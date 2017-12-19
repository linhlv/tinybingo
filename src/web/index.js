module.exports = (app) =>{
    app.get('/', (req, res, next)=>{
        return res.render('index.ejs', {});
    });   
}