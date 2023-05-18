import { useState } from "react"

function TaskForm() {

    const [name, setName] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your task here" onChange={(e)=>{
                setName(e.target.value);
            }}/>

            <button>Send</button>

        </form>
  )
}

export default TaskForm