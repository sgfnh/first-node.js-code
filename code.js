const http=require('http')
http.createServer(function(req,res){
    res.write("Pooja Patel")
    res.end()
}).listen(4000)
