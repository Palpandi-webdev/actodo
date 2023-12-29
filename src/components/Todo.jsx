import Addform from "./Addform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todo() {
    const [activityList, setActivity] = useState([
        {
            id: 1,
            act: "Hi"
        },
        {
            id: 2,
            act: "Hello"
        },
        {
            id: 3,
            act: "Welcome"
        }
    ])
    return (
        <div className=" flex justify-between gap-3 flex-wrap">
            <Addform activityList={activityList} setActivity={setActivity}/>
            <Todolist  activityList={activityList} setActivity={setActivity}/>

        </div>)
}

export default Todo