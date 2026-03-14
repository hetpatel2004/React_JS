function Task3() {
    let array = [{id:1,name:"het"},{id:2,name:"aastha"},{id:3,name:"kunal"},{id:4,name:"kavy"}]
    return(
        <>
    
        {array.map((abc)=>(
            <>
            <p key={abc.id}>{abc.id}</p>
            <p key={abc.name}>{abc.name}</p>
            </>
        ))
        }
        </>
    )
}
export default Task3