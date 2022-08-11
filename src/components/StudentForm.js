import {useState} from 'react';
function StudentForm(props){
	const [enteredInput, setInput] = useState({
		enteredName:'',
		enteredEducation:'',
		enteredPercentage:''
        })
	// const [enteredName, setName] = useState('')
	// const [enteredEducation, setEducation] = useState('')
	// const [enteredPercentage, setPercentage] = useState('')
	const nameChangeHandler = (event) => {
		//setName(event.target.value)
		setInput((prevState) => {return {...prevState, enteredName:event.target.value}})

		// setInput({
		// 	...enteredInput, enteredName:event.target.value
		// })
		
		
	}
	const educationChangeHandler = (event) => {
		//setEducation(event.target.value)
		setInput({
			...enteredInput, enteredEducation:event.target.value
		})
		
	}
	const percentageChangeHandler = (event) => {
		//setPercentage(event.target.value)
		setInput({
			...enteredInput, enteredPercentage:event.target.value
		})
		

	}
	const onSubmitHandler = (event) =>{
       event.preventDefault()
	   props.onStudentSaveHandler({
		fullName:enteredInput.enteredName,
		education:enteredInput.enteredEducation,
		percentage:enteredInput.enteredPercentage
	   })
	//    console.log(enteredName)
	//    console.log(enteredEducation)
	//    console.log(enteredPercentage)
	}
  return (
	<form onSubmit={onSubmitHandler}>
		<div>
			<label>Name</label>
			<input type='text' onChange={nameChangeHandler}/>
		</div>
		<div>
			<label>Education</label>
			<input type='text' onChange={educationChangeHandler}/>
		</div>
		<div>
			<label>Percentage</label>
			<input type='number' onChange={percentageChangeHandler}/>
		</div>
			<button type="submit" >Add Student</button>
	</form>
  )
}

export default StudentForm