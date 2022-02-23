import React,{useState} from 'react'
import '../Sample1.css';
import {Link} from 'react-router-dom'
export default function Sample1() 
{
    const [Name,setName]=useState("");
  const[Password,setPassword] = useState("");
  const handle =() => {
    localStorage.setItem("a", Name);
    localStorage.setItem("b", Password);
  };
  return (
    <div>
        <form>
                <h1>Sign Up</h1>
                <table className="form-group1">
                <tr>
                    <td>
                    <label for="First">First Name</label>
                    </td>
                    <td>
                        <input type="text" id="name" name="txt" placeholder="Enter your First Name" required=""/>
                    </td>
                </tr>
                    <tr>
                        <td>
                        <label>Last Name</label>
                    </td>
                    <td>
                        <input type="text" id="name" name="txt" placeholder="Enter your Last Name" required=""/>
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Email Address</label>
                        </td>
                        <td>
                            <input type="email" id="email" name="email" placeholder="Enter your Email Address" required="" value={Name} onChange={(e) => setName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <input type="password" id="pwd" name="pwd" placeholder="Enter your confirm Password" required="" value={Password} onChange={(e) => setPassword (e.target.value)}/>
                        </td>
                    </tr>
                    <tr colspan="4">
                        <td>
                            <button onClick={handle}>
                                <Link to="/sample">Signup
                                </Link>
                                </button>
                        </td>
                    </tr>
        
                </table>
            </form>
    </div>
  );
}
