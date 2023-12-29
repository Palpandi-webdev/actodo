import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const [eUname, sUname] = useState("")
    const [ePwd, sPwd] = useState("")
    const [ruser,suser]=useState(true)
    const navigate = useNavigate()

    const users=props.users
    const setusers=props.setusers

   
    function unamechange(evt) {
        sUname(evt.target.value)
    }

    function upwdchange(evt) {
        sPwd(evt.target.value)

    }

    function handleLogin() {
        var validUser = false
        users.forEach(function (item) {
            if (item.uname === eUname && item.pwd == ePwd) {
                console.log("Succcess")
                validUser = true
                navigate("/landing",{state:{name:eUname}})
            } 
        });

        if(validUser === false){
            console.log("Login Failed")
        }
    }
    return (

        <div className=" bg-black p-10">
            <div className=" bg-white p-10 border rounded-md">
                <h1>Hey Hi</h1>
                {ruser?<p>I help you to manage your activities :)</p>:<p className=" text-red-500">Please signup</p>}
                <div className=" my-2 flex flex-col gap-3">
                    <input type="text"
                        placeholder="Username"
                        onChange={unamechange}
                        className="border border-grey bg-transparent rounded-md p-1  w-48" />
                    <input type="text"
                        placeholder="Password"
                        onChange={upwdchange}
                        className="border border-grey bg-transparent rounded-md p-1 w-48" />

                    <button onClick={handleLogin} className=" bg-blue-500 rounded-md  p-1 text-1xl font-bold w-20">Login</button>

                    <p>Does not have account? <Link className=" underline" to={'/signup'}>SignUp</Link></p>
                </div>
            </div>

        </div>


    )
}

export default Login