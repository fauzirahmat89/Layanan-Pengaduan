let users = [
    {id: 1, name:'fauzi', email:'fauzi@gmail.com'},
    {id: 2, name:'rahmat', email:'rahmat@gmail.com'}
]

module.exports ={
    index:function(request,response){
        if(users.length > 0 ){
            response.json({
                status:true,
                data:users,
                method:request.method,
                url:request.url
            })
        }else{
            response.json({
                status:false,
                massage:'data user kosong'
            }) 
        }
        
    },
    store:function(request,response){
        users.push(request.body)
        response.send({
            status:true,
            data:users,
            message:'data user berhasil disimpan',
            method:request.method,
            url:request.url
        })
    },
    update:function(request,response){
        //update data
        const id = request.params.id
        users.filter(user => {
            if(user.id == id){
                user.id = id
                user.name = request.body.name
                user.email = request.body.email
    
                return user
            }
        })
        
        response.json({
            status:true,
            data:users,
            message:'data user berhasil diupdate',
            method:request.method,
            url:request.url
        })
    },
    delete:function(request,response){
        //untuk hapus data
        let id = request.params.userid
        users = users.filter(user => user.id != id)
        response.send({                
            status:true,
            data:users,
            message:'data user berhasil dihapus',
            method:request.method,
            url:request.url})
    } 
}