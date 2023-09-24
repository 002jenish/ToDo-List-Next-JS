"use client"
import React, { useState } from 'react'

const page = () => {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setMainTassk] = useState([])

    //to prevent reloading of page while click on submit/add task button
    const submitHandle = (e) =>{
        e.preventDefault()
        // console.log(title)
        // console.log(desc)
        setMainTassk([...mainTask,{title,desc}]) //spread operator
        // console.log(mainTask)
        settitle("")
        setdesc("")
    };

    //to delete an perrticular task
    const deleteHandle=(i)=>{
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setMainTassk(copyTask)
    }

    //used to add task in the div after <hr> tag
    let renderTask = <h2>No task Availabel</h2>;
    if(mainTask.length>0)
    {
        renderTask= mainTask.map((t,i)=>{
            return <li className='flex items-center justify-between mb-5'>
            <div className='flex items-center justify-between w-2/4'>
                <h5 className='text-xl font-semibold'>{t.title}</h5>
                <h6 className='text-lg font-semibold '>{t.desc}</h6>
            </div>
            <button
            onClick={()=>{
                deleteHandle(i)
            }}
            className='text-white bg-red-600 px-4 py-2 mr-3 rounded font-bold'>
                Delete</button>
            </li>
        });
    }

    return (
        <>
        <h1 className='bg-sky-400 text-white p-4 text-4xl text-center'>
            My ToDo List</h1>
        
        <form onSubmit={submitHandle}>
            <input placeholder="Enter Task" 
            type="text" 
            className='text-xl border-zinc-600 border-4 m-5 px-3 py-2'
            value={title}
            onChange={(a)=>{
                settitle(a.target.value)
            }}
            />
            
            <input placeholder="Enter Task Description" 
            type="text" 
            className='text-xl border-zinc-600 border-4 m-5 px-3 py-2' 
            value={desc}
            onChange={(a)=>{
                setdesc(a.target.value)
            }}
            />

            <button className='bg-green-500 text-white m-5 px-4 py-3 text-xl font-bold rounded'>
                Add Task
            </button>
        </form>

        <hr/>
        <div className='p-8 bg-slate-200'>
            <ul>
                {renderTask}
            </ul>    
        </div>    
        </>
    )
}

export default page
