import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import Todo from "../components/Todo";

function Landing() {

    const data = useLocation()
    return (
        <div className=" bg-black p-10">
            <div className=" bg-white p-10 border rounded-md">
                <Header name={data.state.name}/>
                <div className=" flex justify-between gap-7 my-5 flex-wrap" >
                    <Card bgColor={"#695AAF"} title={"21!"} subtitle={"Chennai"} />
                    <Card bgColor={"#CA524F"} title={"20 December"} subtitle={"10:45:35"} />
                    <Card bgColor={"#CA8202"} title={"Built Using"} subtitle={"React"} />
                </div>
                <Todo />



            </div>
        </div>
    )
}

export default Landing