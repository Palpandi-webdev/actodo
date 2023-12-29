function TodolistFunc(props) {

    const activityList = props.activityList
    const setActivity = props.setActivity
    function deleteActivity(id) {
        var temparr = activityList.filter(function (item) {
            if (item.id == id) {
                return false
            } else {
                return true
            }
        })

        setActivity(temparr)
    }
    return (

        <div className=" flex justify-between">
            <p>{props.index + 1}.{props.item.act}</p>
            <button className=" text-red-700" onClick={() => deleteActivity(props.item.id)}>Delete</button>
        </div>

    )
}

export default TodolistFunc