import { useState } from "react";

const Addtask = () => {

    let [name , setName] = useState("");
    let [email , setEmail] = useState("");
    let [taskName , setTaskName] = useState("");
    let [description , setDescription] = useState("");
    let [endDate , setEndDate] = useState("");


    let handleSubmit = (e)=>{
        e.preventDefault();

        let newTask = {
                        name , email , taskName , description , endDate ,
                        startDate : new Date().toLocaleString ,
                        status : ""
                      }    
    new Date() >= new Date(endDate) ? newTask.status = "Completed" : newTask.status = "Pending";

    fetch("http://localhost:5000/tasks&quot"
    ,{
                                            method:"POST",
                                            headers:{"Content-Type":"application/json"},
                                            body : JSON.stringify(newTask)
                                            })
                              

    }

    return (
        <div className="add-task">
            <h1> ADD THE TASK </h1>
            <hr />
            <h1>{endDate}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{ setName(e.target.value); }}/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{ setEmail(e.target.value); }}/>
                <input type="text" placeholder="Task Name" value={taskName} onChange={(e)=>{ setTaskName(e.target.value); }}/>
                <textarea cols="30" rows="10" placeholder="Task Description" value={description} onChange={(e)=>{ setDescription(e.target.value); }}></textarea>
                <input type="date" placeholder="End Date" onBlur={(e)=>{ setEndDate(e.target.value); }}/>

                <input type="submit"  value="Add task"/>
            </form>

        </div>

    );
}
 
export default Addtask;