import React, { useState } from "react";
import RegisteredStudent from "./components/registeredStudent/RegisteredStudent";
import NewStudent from "./components/newStudent/NewStudent";
import { useState } from "react";

const AVAILABLE_COURSES = {
  fullstack: {
    id: "1",
    name: "fullstack",
    displayName: "Fullstack Course",
    startDate: new Date(2023, 7, 14),
  },
  qa: {
    id: "2",
    name: "qa",
    displayName: "QA Course",
    startDate: new Date(2023, 2, 20),
  },
  cyber: {
    id: "3",
    name: "cyber",
    displayName: "Cyber Course",
    startDate: new Date(2023, 4, 5),
  },
  product: {
    id: "4",
    name: "product",
    displayName: "Product Course",
    startDate: new Date(2023, 6, 30),
  },
};

const DUMMY_REGISTERED_STUDENTS = [
  {
    id: "1",
    studnetName: "Yonit Levi",
    course: "fullstack",
  },
  {
    id: "2",
    studnetName: "Eli Finish",
    course: "qa",
  },
];

function App() {

  const [registeredStudent, setRegisteredStudent] = useState(DUMMY_REGISTERED_STUDENTS);


  const addStudentHandler = (registeredStudent) => {
    console.log("this is enterRegisteredStudentData from App components: " +
    JSON.stringify(enterRegisteredStudentData));

    setRegisteredStudent((prevStudents) => {
      return [enterRegisteredStudentData, ...prevStudents]
    });
  };


  return (
    <div>
      <NewStudent courses={AVAILABLE_COURSES}
      onRegisteredStudent={addStudentHandler}></NewStudent>
      {registeredStudent.map((student) => {
        return <RegisteredStudent registeredStudent={student}/>;
      })}
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[0]} />
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[1]} />
    </div>
  );
}

export default App;