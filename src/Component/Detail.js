import React from 'react'
import '../Detail.css';
export default function Sample()
 {
    function notify(){
      alert("Form is Sucessfully Submitted")
    }
  return (
    <div>
        <form>
                <h1>Registration Form</h1>
                <table className="Regform">
                    <tr>
                        <td>
                    <label for="name">Full Name</label>
                        </td>
                        <td>
                        <input type="text" id="nam" name="txt" placeholder="Full Name" required=""></input>
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label>Email Address</label>
                        </td>
                        <td>
                        <input type="email" id="mail1" name="email" placeholder="Email" required=""></input>
                        </td>
                         </tr>

                         <tr>
                        <td>
                    <label for="Phnum">Phone Number</label>
                        </td>
                        <td>
                        <input type="number" id="num" name="num1" placeholder="Phone Number" required=""></input>
                        </td>
                        </tr>
                        <tr>
                        <td>
                    <label for="password">Password</label>
                        </td>
                        <td>
                        <input type="name" id="pwf1" name="passw" placeholder="Password" required=""/>
                        </td>
                        </tr>

                        <tr>
                        <td>
                    <label for="password">Confirm Password</label>
                        </td>
                        <td>
                        <input type="name" id="pwf2" name="passw" placeholder="Confirm Password" required=""/>
                        </td>
                        </tr>
                        <tr  colspan="2" >
                        <td>
                           <button id="btn" 
                            onClick ={notify} type="submit" id="Sub">Submit</button>
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
