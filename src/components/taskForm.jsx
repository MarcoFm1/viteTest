import { useState } from "react"

function TaskForm({createTask}) {

    const [name, setName] = useState([]);
    const [price, setPrice] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        createTask({
            name,
            price
        })
    };



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your name here" onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <textarea placeholder="Price" onChange={(e)=>{
                setPrice(e.target.value);
            }}></textarea>
            <button>Send</button>

        </form>
  )
}

export default TaskForm