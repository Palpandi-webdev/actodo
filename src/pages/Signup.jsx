import { Link } from "react-router-dom"
import { useState } from "react"


function Signup(props) {
    
    const users = props.users
    const setusers = props.setusers

    const [eUname, sUname] = useState("")
    const [ePwd, sPwd] = useState("")


    function unamechange(evt) {
        sUname(evt.target.value)
    }

    function upwdchange(evt) {
        sPwd(evt.target.value)

    }

    function addNewUsers() {
        setusers([...users, { uname: eUname, pwd: ePwd }]);
    }

    return (

        <div className=" bg-black p-10">
            <div className=" bg-white p-10 border rounded-md">
                <h1>Hey Hi</h1>
                <p>I help you to manage your activities :) </p>

                <div className=" my-2 flex flex-col gap-3">
                    <input type="text"
                        placeholder="Username"
                        onChange={unamechange}
                        className="border border-grey bg-transparent rounded-md p-1  w-48" />
                    <input type="text"
                        placeholder="Password"
                        onChange={upwdchange}
                        className="border border-grey bg-transparent rounded-md p-1 w-48" />
                    <input type="text"
                        placeholder="confirm Password"
                        className="border border-grey bg-transparent rounded-md p-1 w-48" />

                    <button
                        onClick={addNewUsers}
                        className=" bg-yellow-400 rounded-md  p-1 text-1xl font-bold w-24">Sign up</button>
                    <p>Already have an account? <Link className=" underline" to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>


    )
}

export default Signup