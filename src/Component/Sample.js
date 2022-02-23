import React from 'react'
import '../Sample.css';
import {Link} from 'react-router-dom';
export default function Sample()
{
  return (
    <div>
        <form>
                <h1>Sign In</h1>
                <table className="form-group">
                    <tr>
                        <td>
                    <label for="email">Email address</label>
                        </td>
                        <td>
                        <input type="email" id="mails" name="email" placeholder="Enter your Email" required=""/>
                        </td>
                        </tr>
                        <tr><td>
                        <label>Password</label>
                        </td>
                        <td>
                        <input type="password" id="userpw" name="pswd" placeholder="Enter your Password" required=""/>
                        </td>
                        
                        </tr>
                        <tr  colspan="2" >
                        <td>

                        <button>
                                <Link to="/detail">Signin</Link>
                                </button>
                        </td>
                        </tr>
                        <tr colspan="2" >
                        <td>
                            <a className="frg" href="#">Forget Password</a>
                        </td>
                    </tr>
                        
                </table>  
            </form>
    </div>
  )
}

