
import { useEffect } from "react";
import { Form, useActionData, useNavigate, Link } from "react-router-dom";

export default function Register() {

  const res = useActionData()
  console.log("return res", res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])


  return (
    <>
      <h1 className="library">JOIN THE CLUB</h1>
      <div className="form-container">
        <Form method="post" className="registerform" >
          <input className="registeruser" type="text" name="username" placeholder='Username' /><br />
          <input className="registeremail" type="email" name="email" placeholder='Email address' /><br />
          <input className="registerpass" type="password" name="password" placeholder='Password' /><br />
          <input className="registerpasscon" type="password" name="password_confirmation" placeholder='Confirm password' /><br /><br />
          <button className="reg-login-btn" type="submit">Sign me up!</button><br /><br />
          <p className="register">Already a member? <Link to="/login"><span className='reg-login-link'> Enter here</span></Link></p>
          {res && <p className="danger">{res.data.message}</p>}
        </Form>
      </div>
    </>
  );
}