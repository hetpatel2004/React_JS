// Render a list of products as cards showing name and price.
function Task4() {
  let array = [
    { id: 1, name: "het", age: 22 },
    { id: 2, name: "aastha", age: 21 },
    { id: 3, name: "kunal", age: 24 },
    { id: 4, name: "kavy", age: 20 },
  ];
  return (
    <>
      {array.map((h) => (
        <div
          key={h.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            width: "150px",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px lightgray"
          }}
        >
          <h3>{h.name}</h3>
          <h3>{h.age}</h3>
        </div>
      ))}
    </>
  );
}
export default Task4;
