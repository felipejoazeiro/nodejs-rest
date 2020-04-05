const app = require('./config/custom-express')();

app.listen(3000,() =>{
    console.log('Servidor rodando na porta 3000')

    app.get('/teste', (req,res)=>{
        console.log('Recebida requisição de teste');
        res.send('Ok.')
    })
    
})
module.exports = app