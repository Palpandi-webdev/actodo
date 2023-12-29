import { useState } from "react"

function Addform(props) {
    const activityList = props.activityList
    const setActivity = props.setActivity

    const [newActivity, addlistactivity]=useState('')
    function handlechange(evt){
        addlistactivity(evt.target.value)

    }

    function addTask() {
        setActivity([...activityList, { id: activityList.length + 1, act: newActivity }]);
        addlistactivity('');
    }


    return (<div className=" flex flex-col gap-3">
        <h1 className=" text-2xl font-bold">Manage Activities</h1>
        <div>
            <input type="text" value={newActivity} onChange={handlechange} className=" border border-black p-1 bg-transparent" placeholder="Next Activity?" />
            <button className="border border-black p-1 bg-black text-white" onClick={addTask}>Add</button>
        </div>

    </div>)
}

export default Addform