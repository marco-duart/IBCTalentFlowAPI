import { NextFunction, Request, Response } from "express";
import { verify, decode } from "jsonwebtoken";
import { env } from "../config/env";

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
  const autorization = req.headers["authorization"];
  if (!autorization) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
      status: 401
    })
  }

  const token = autorization.replace("Bearer ", "")

  try {
    //PASSOU DA PROXIMA LINHA, ENTÃO POSSUI UM TOKEN VÁLIDO
    verify(token, env.JWT_SECRET_KEY)

    const decriptedToken = decode(token)

    //VERIFICANDO SE DECRIPTED É DIFERENTE DE NULL E DIFERENTE DE STRING (MENSAGEM DE ERRO). NESSE CASO É UM PAYLOAD
    const role = decriptedToken && typeof decriptedToken !== "string" ? decriptedToken.role : decriptedToken

    //ULTIMA VALIDAÇÃO DE AUTORIZAÇÃO, SE ROLE NÃO FOR DO NÍVEL CORRETO, RETORNAR ERRO
    if(role !== "ti" && role !== "admin") return res.status(401).json({ error: true, message: "Unauthorized", status: 401 })
    
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
      status: 401
    })
  }

  next()
}
