//import React, {useState} from 'react'
import "./StudentInfo.css"
function StudentInfo(props){
    //  const [count, setCount] = useState(0)
	const arrNames = props.fullName.split(" ");
    // const clickAddHandler = () => {
	// 	setCount((prevState) => prevState + 1)
	// }
	// const clickSubAddHandler = () => {
	// 	console.log("button clicked")
	// 	setCount((prevState) => prevState - 1)
	// }
	return(
		<div className='student-item'>
			<div> 
				<label>First Name</label>
				<h1> 
					{arrNames[0]} 
				</h1>
			
		    </div>
			<div> {props.education}</div>
			<div> {props.percentage}</div>
			{/* <div>
				<h7> {count}</h7>
			</div>
			<button onClick= {clickAddHandler} >increase</button>
			<button onClick= {clickSubAddHandler} >decrease</button> */}
		</div>
	)
}

export default StudentInfo;