exports.errorMiddleware = (err,req,res,next)=>{
    err.statusCode = err.status || 500
    err.status =err.status || "error in page"

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}