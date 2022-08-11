import StudentForm from "./StudentForm";
import "./NewStudent.css"
function NewStudent(props){
	const saveStudentHandler = (enteredData) => {
      props.onStudentHandler(enteredData)
	} 
	return <div className="student-item">
      <StudentForm onStudentSaveHandler= {saveStudentHandler}/>
	</div>
} 

export default NewStudent;