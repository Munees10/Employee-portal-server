const jsonServer = require ('json-server')
const empServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000 || process.env

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee Portal server started at port :${PORT}`);
})