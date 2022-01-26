import React, {  useState } from 'react' 
import TaskItem from './item/TaskItem'
import CreateTaskField from './item/CreateTaskField'
const data=[]
const Home = () => {
	const [tasks,setTasks]= useState(data)

	const changeTask = id => {
		const copy =[...tasks]
		const current =copy.find(t =>t._id === id)
		current.isCompleted= !current.isCompleted
		setTasks(copy)
	}

	const removeTask = id => {
		setTasks([...tasks].filter(t =>t._id !== id))
	}

	
return (
<div className=' text-white w-4/5 mx-auto'>
<h1 className='text-2xl font-bold text-center mb-8'>React Todo App</h1>
{tasks.map(task => 
	<TaskItem 
	key={task._id} 
	task={task} 
	changeTask={changeTask} 
	removeTask={removeTask}/>)}
<CreateTaskField setTasks={setTasks}/>
</div>
)	
}

export default Home