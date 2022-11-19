
import React, {  useState,useEffect } from 'react' 
import TaskItem from './item/TaskItem'
import CreateTaskField from './item/CreateTaskField'
const data=[]


const Home = () => {
	const [tasks,setTasks]= useState(data)
	const [filtered,setFiltered]=useState(tasks)

	useEffect(() => {
		if (localStorage.getItem('example')){
			setTasks(JSON.parse(localStorage.getItem('example')))
		}

	},[])

	useEffect (() =>{
	localStorage.setItem('example',JSON.stringify(tasks))

	},[tasks])


	
	
	useEffect (() =>{
setFiltered(tasks)


	},[tasks])

	const changeTask = id => {
		const copy =[...tasks]
		const current =copy.find(t =>t._id === id)
		current.isCompleted= !current.isCompleted
		setTasks(copy)
	}

	const removeTask = id => {
		setTasks([...tasks].filter(t =>t._id !== id))

	}

	const filteredTask = isCompleted => {
		if (isCompleted ==="all"){
			setFiltered(tasks)
		}else {
			let newTasks=[...tasks].filter(item => item.isCompleted === isCompleted)
			setFiltered(newTasks)
		}

	}
	
return (
<div className=' text-white w-4/5 mx-auto'>
<h1 className='text-2xl font-bold text-center mb-8'>React Todo App</h1>
<div  className='text-center'> 
<button className='w-[70px] h-[35px] bg-gray-800 mr-4 border-2 rounded-full hover:border-red-600 
hover:text-red-600 transition-colors ease-in-out duration-300' onClick={() => filteredTask('all')}>All</button>
<button  className='w-[70px] h-[35px] bg-gray-800  mr-4 border-2 rounded-full hover:border-red-600 
hover:text-red-600 transition-colors ease-in-out duration-300' onClick={() => filteredTask(false)}>Open</button>
<button className='w-[70px] h-[35px] bg-gray-800 border-2 rounded-full hover:border-red-600 
hover:text-red-600 transition-colors ease-in-out duration-300' onClick={() => filteredTask(true)}>Closed</button>
</div>
<CreateTaskField setTasks={setTasks}/>
{filtered.map(task =>

	<TaskItem 
	key={task._id} 
	task={task} 
	changeTask={changeTask} 
	removeTask={removeTask}/>)}

</div>
)	
}


export default Home