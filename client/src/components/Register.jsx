
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
      <h1 className="page-header">JOIN THE CLUB</h1>
      <div className="form-container">
      <p><mark>Join the Club to share and review your favourite books</mark></p>
        <Form method="post" className="login-form" >
          <input className="registeruser" type="text" name="username" placeholder='Username' />
          <input className="registeremail" type="email" name="email" placeholder='Email address' />
          <input className="registerpass" type="password" name="password" placeholder='Password' />
          <input className="registerpasscon" type="password" name="password_confirmation" placeholder='Confirm password' />
          <button className="submit-btn" type="submit">SIGN ME UP!</button><br /><br />
          <p className="register">Already a member? <Link to="/login"><span className='reg-login-link'> Enter here</span></Link></p>
          {res && <p className="danger">{res.data.non_field_errors}</p>}
        </Form>
      </div>
    </>
  );
}