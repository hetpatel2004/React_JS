function Task1() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
    return(
        <ul>
            
        {fruits.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
        ))}
        </ul>
    )
}
export default Task1;