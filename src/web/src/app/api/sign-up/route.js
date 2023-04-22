import { hash } from "bcrypt"

export async function POST(req) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const request = await req.json()

  console.log(request)

  const { email, password } = request

  const hashedPassword = await hash(password, 2)

  console.log(hashedPassword)

  return Response.json({
    message: 'User created!',
    email: email,
    password: hashedPassword
  })
}
