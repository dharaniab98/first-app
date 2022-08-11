import {useState} from 'react'
import StudentInfo from "./components/StudentInfo";
import NewStudent from "./components/NewStudent";


function App() {
  const [student, setStudent] = useState({fullName:"dharani", education:"btech", percentage:78})
  const studentDataHandler = (studentInfo) => {
  console.log("app.js")
  console.log(student)
  setStudent(studentInfo)
}
  return (
    <div className="App">
       <NewStudent onStudentHandler={studentDataHandler}/>
      <StudentInfo fullName={student.fullName} education={student.education} percentage={student.percentage}/> 
     
    </div>
  );
}

export default App;
