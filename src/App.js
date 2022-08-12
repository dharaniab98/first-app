import {useState} from 'react'
import StudentInfo from "./components/StudentInfo";
import NewStudent from "./components/NewStudent";

const DUMMY_DATA = [
    {
      id:1,
      fullName:"dharani",
     education:"degree",
     percentage:78
    },{
    id:2,
    fullName:"ramesh",
     education:"btech",
     percentage:78
    },
    {
      id:3,
      fullName:"suresh",
     education:"bcom",
     percentage:78
    },{
      id:4,
    fullName:"Ajay",
     education:"cs",
     percentage:78
    },
    {
      id:5,
    fullName:"vijay",
     education:"itbs",
     percentage:79
    },
  ]
function App() {
  
  const [students, setStudents] = useState(DUMMY_DATA)
  const [percentage, setPercentage] = useState("99")
  const studentDataHandler = (studentInfo) => {
    console.log("app.js")
    setStudents([...students, studentInfo])
   }
   const onChangeHandler= (event) =>{
    console.log(event.target.value)
    setPercentage(event.target.value)
   }
   const filteredStudents = students.filter(student => student.percentage == percentage)
   let studentInfoList = filteredStudents.map(student =>  <StudentInfo key={student.id} fullName={student.fullName} education={student.education} percentage={student.percentage}/>)
   if(filteredStudents == 0){
     studentInfoList = <h1>No Students Info</h1>
   }
  return (
    <div className="App">
      <select onChange={onChangeHandler} value={percentage}>
        <option value="76">76</option>
        <option value="78">78</option>
        <option value="99">99</option>
        <option value="98">98</option>
      </select>
       <NewStudent onStudentHandler={studentDataHandler}/>
       {/* {students.map(student =>  <StudentInfo fullName={student.fullName} education={student.education} percentage={student.percentage}/>)} */}
       {/* { filteredStudents.length == 0 ? <h1>No Students Info</h1> : studentInfoList} */}
        {/* { filteredStudents.length == 0 && <h1>No Students Info</h1> }
        {filteredStudents.length > 0 &&  */}
        {studentInfoList}
      {/* <StudentInfo fullName={students[0].fullName} education={students[0].education} percentage={students[0].percentage}/> 
      <StudentInfo fullName={students[1].fullName} education={students[1].education} percentage={students[1].percentage}/> 
       <StudentInfo fullName={students[2].fullName} education={students[2].education} percentage={students[2].percentage}/> 
        <StudentInfo fullName={students[3].fullName} education={students[3].education} percentage={students[3].percentage}/>  */}
    </div>
  );
}

export default App;
