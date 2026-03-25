import React, { useState } from 'react';

function Crud() {
    const [data, setdata] = useState([]);
    const [show, setShow] = useState("");
    const [update, setUpdate] = useState(null)

    function add() {
        if (show.trim() === "") return;

        const newData = {
            id: Date.now(),
            text: show
        };

        setdata([...data, newData]);
        setShow("");
    }

    function remove(id) {
        const removedata = data.filter((data) => data.id !== id);
        setdata(removedata);
    }

    function edit(edit) {
        setUpdate(edit.id)
        setShow(edit.text)
    }

    function Update() {
        const update_item = data.map((Data) =>
            Data.id === update ? { ...Data, text: show } : Data,
        )
        setdata(update_item)
        setUpdate(null)
        setShow("")
    }

    function Cencel() {
        setUpdate(null);
        setShow("");
    }
    return (
        <>
            <input
                type="text"
                value={show}
                onChange={(e) => setShow(e.target.value)}

            />

            {/* <button onClick={add}>Add</button> */}
            {update ? (

                <>
                    <button onClick={Update}>Update</button>
                    <button onClick={Cencel}>Cencel</button>
                </>

            ) : (
                <button onClick={add}>Add</button>
            )}


            <ul>
                {data.map((data) => (
                    <li key={data.id}>
                        {data.text}

                        <button onClick={() => remove(data.id)} style={{ marginLeft: "10px" }}>
                            Delete
                        </button>

                        <button onClick={() => edit(data)}>
                            Edit
                        </button>


                    </li>
                ))}
            </ul>
        </>
    );
}

export default Crud;   