import axios from "axios"

export async function registerUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/register', data, {
    validateStatus: () => true
  })

}

export async function loginUser(request){
  const data = await formToObj(request)
  return await axios.post('/api/login', data, {
    validateStatus: () => true
  })
}

async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}