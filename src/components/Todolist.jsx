
import TodolistFunc from "./TodoListFunc"

function Todolist(props) {

    const activityList = props.activityList
    const setActivity = props.setActivity
    return (<div style={{ backgroundColor: "#9990BD" }} className=" p-3 boreder rounded-md flex-grow" >
        <h1 className="text-2xl font-bold">Today's Activities</h1>

        {activityList.length === 0 ? <p>You have not add anything yet !</p> : ''}
        {
            activityList.map(function (item, index) {
                return <TodolistFunc item={item} index={index} activityList={activityList} setActivity={setActivity} />
            })
        }
    </div>)
}

export default Todolist