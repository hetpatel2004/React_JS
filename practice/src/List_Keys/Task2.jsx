function Task2() {
    let fruits =[
        {id:1,fruits:"Apple"},
        {id:2,fruits:"orange"},
        {id:3,fruits:"mango"}
    ]
    return(
        <ul>
        {fruits.map((fruits)=>(
            <li key={fruits.id}>{fruits.fruits}</li>
        ))}
        </ul>
    )
}
export default Task2;