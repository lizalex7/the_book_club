/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react'
import { Form, useActionData, useNavigate, Link } from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'
// import jtclogo from '../images/jtc_png/logo-color.png'

export default function Login(){
  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 200){
      setToken(res.data.access)
      navigate('/books/')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="library">ENTER</h1>
      <div className='form-container'>
        <Form className='registerform' method="POST">
          <input type="username" name="username" placeholder='Username' /><br/ >
          <input type="password" name="password" placeholder="Password" /><br/ >
          <button className='reg-login-btn' type="submit">COME ON IN</button><br /><br />
          {/* <img className='jtc-image' src={jtclogo} alt='Join The Club' /> */}
          {res && <p className='danger'>{res.data.message}</p>}
          <p className='login'>Not a member? <Link to="/register"><span className='reg-login-link'> Join the club here</span></Link></p>
        </Form>
      </div>
    </>
  )
}