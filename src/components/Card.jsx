function Card(props){
    return(
        <div style={{backgroundColor:props.bgColor}} className=" p-10 border rounded-md text-center flex-grow" >
          <h1 className=" font-bold">{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}


export default Card