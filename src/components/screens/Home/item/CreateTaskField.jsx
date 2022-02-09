import React, {  useState } from 'react'


const CreateTaskField = ({setTasks}) => {
const [title,setTitle]=useState('')
const [titleDirty,setTitleDirty]=useState(false)
const [error,setError]=useState('Строка не должна быть пустой!')
	const validateTask = (title) => {
		if (title === ''){
			setTitleDirty(true)
			setError('Строка не должна быть пустой!')
		}
		else{
		setError('')
		setTasks (prev =>[...prev,
			{
			_id:new Date(),
			title:title,
			isCompleted:false,

		},
		])
		setTitle('')
	}	

	}

return (
	<>
{(titleDirty && error) && <div style={{color:'red'}}>{error}</div> }
	
<div className='flex items-center  justify-between mb-4 rounded-2xl border-gray-800 
px-5 py-3 border-2 w-full mt-10'>
<input type='text'className='bg-transparent w-full border-none'  
onChange={e => setTitle( e.target.value) } 

value={title}
onKeyPress={e => e.key === 'Enter'  && validateTask(title) }
placeholder="Add a task"
/>
</div>
</>
)	
}

export default CreateTaskField