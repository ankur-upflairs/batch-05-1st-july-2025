const http = require('node:http')

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    let route = req.url 
    let method = req.method
    if(route == '/'){
        res.write('hello , welcome to my site')
    res.end() 
    }
    else if(route == '/blogs'){
        res.end('this is all blogs page')
    }
    else if(route == '/create-blog'){
        res.end('this is for creating blog')
    }
    else if(route == '/about'){
        res.end('this is about page')
    }
    else {
        res.end('404!!! , page not found')
    }
})



server.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
