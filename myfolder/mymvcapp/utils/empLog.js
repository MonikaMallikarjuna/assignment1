const winston=require('winston')

const logger=winston.createLogger({
    transports:[
        new winston.transports.File({
            filename:"mymvcapp.log",
            level:"info",
            format:winston.format.combine(winston.format.timestamp(),winston.format.json())
        }),
        new winston.transports.File({
            filename:"mymvcappError.log",
            level:"error",
            format:winston.format.combine(winston.format.timestamp(),winston.format.json())
        })
    ]
})
module.exports=logger