class MyApiError extends Error
  {
     constructor(statusCode,message)
       {
         super(message)
         this.statusCode =statusCode
         this.status =404 
         Error.captureStackTrace(this,this.constructor)
       }
  }

module.exports = MyApiError