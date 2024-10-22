const express = require('express')

const app = express()

app.get('/', function(request, response){
    response.send('hello world!')
})

app.get('/about', function(request,response){
    response.send('about')
})

app.listen(3000, function(){
    console.log('server is okay')
})