import React, {  useState } from 'react'

const CreateTaskField = ({setTasks}) => {
const [title,setTitle]=useState('')
	const addTask = (title) => {
		setTasks (prev =>[...prev,
			{
			_id:new Date(),
			title:title,
			isCompleted:false,

		},
		])
		setTitle('')
		

	}

return (
<div className='flex items-center  justify-between mb-4 rounded-2xl border-gray-800 
px-5 py-3 border-2 w-full mt-20'>
<input type='text'className='bg-transparent w-full border-none'  
onChange={e => setTitle(e.target.value) } 
value={title}
onKeyPress={e => e.key === 'Enter' && addTask(title)}
placeholder="Add a task"
/>
</div>
)	
}

export default CreateTaskField