import jwt from 'jsonwebtoken'
import 'dotenv/config'

const getTokenFromHeaders = req => {
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1]
  }
  return null 
}

const isAuthenticatedMiddleware = (req, res, next) => {
    //Acessar o token
    const token = getTokenFromHeaders(req)
    //Verificar se a request veio com um token
    if(!token) {
      return res.status(401).json({message: 'Unauthorized 1'})
    }
    
    try {
        const secret = process.env.JWT_SECRET
        const decodedToken = jwt.verify(token, secret)
        req.user = decodedToken
        next()
    } catch (error) {
        console.log("Esse ==> ", error)
        return res.status(401).json({message: 'Unauthorized 2'})
    }
}

export default isAuthenticatedMiddleware