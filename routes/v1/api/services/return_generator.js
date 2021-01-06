export default function(res,code,message,response) { 
    return res.status(code).json({
        success: code == 200 ? true : false,
        code: code,
        message: message,
        response: response
    });
}