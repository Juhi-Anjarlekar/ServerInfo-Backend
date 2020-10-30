
const express = require("express");
const Router = express.Router();
const serverData = require("../config/serverConfig.json");

// route to get data of serverConfig.json file
Router.get("/", (request, response) => {       
    response.status(200).json(serverData.servergroups);
})

//Route to print groupname, pathatserver & ip 
Router.get("/:ip", (request, response) => {
    const { ip } = request.params;    
    const serverGrps = serverData.servergroups
    for (let grp of serverGrps) {
        for(let server of grp.servers){
            if (server.ip == ip || server.ip == ip) {
                    console.log("Group name: " , grp.groupname);
                    console.log("Path at server: " , grp.pathatserver);
                    console.log("IP: " , server.ip);
                    const result = {'groupname': grp.groupname,
                    "pathatserver": grp.pathatserver,
                    "ip": server.ip
                 };
                    response.status(200).json(result);
            }
        }        
    }   
})

module.exports = Router;