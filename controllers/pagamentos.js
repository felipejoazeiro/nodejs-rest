module.exports=function(app){
    app.get('/pagamentos', (req,res) => {
        res.send('Estou na página de pagamentos.')
    })
}

