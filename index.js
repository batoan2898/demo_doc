var express = require('express')
const dotenv = require('dotenv');

dotenv.config()

var app = express()

var todos = {"code":200,"data":{"items":[{"plant":"1201","sloc":"1001","sloc_name":"Wood","plant_name":"AA Long An"},{"plant":"1201","sloc":"1011","sloc_name":"Core/EBd/Lam.","plant_name":"AA Long An"},{"plant":"1201","sloc":"1012","sloc_name":"Finished Sheets","plant_name":"AA Long An"},{"plant":"1201","sloc":"1031","sloc_name":"Hardwares","plant_name":"AA Long An"},{"plant":"1201","sloc":"1041","sloc_name":"Metalworks","plant_name":"AA Long An"},{"plant":"1201","sloc":"1051","sloc_name":"Paint/Coatings","plant_name":"AA Long An"},{"plant":"1201","sloc":"1061","sloc_name":"Fabric","plant_name":"AA Long An"},{"plant":"1201","sloc":"1071","sloc_name":"Leather","plant_name":"AA Long An"},{"plant":"1201","sloc":"1081","sloc_name":"Uphol. foam","plant_name":"AA Long An"},{"plant":"1201","sloc":"1091","sloc_name":"Furn. glass","plant_name":"AA Long An"}],"meta":{"total":51,"page":1}}}

app.get('/list',function (req, res){
  res.json(todos)
})

app.listen(process.env.NODE_DOCKER_PORT)

module.exports = app;