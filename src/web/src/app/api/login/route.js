import { compare } from "bcrypt"

export async function POST(req) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const request = await req.json()


  const { password, storedPassword } = request
  console.log(password, storedPassword)

  const authSuccess = await compare(password, storedPassword)

  console.log(authSuccess)

  return Response.json({
    authSuccess: authSuccess
  })
}
