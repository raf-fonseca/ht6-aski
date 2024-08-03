// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    async login(req, res) {
      const returnToQuery = req.query?.returnTo
      const returnTo = typeof returnToQuery === "string" ? returnToQuery : "/"
  
      return await handleLogin(req, res, {
        returnTo
      })
    },
  })