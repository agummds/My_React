import Student from './Student.jsx'

function App() {

  return (

    <>
    <Student name="Agum" age={21} isStudent ={true}/>
    <Student name="Medisa" age = {30} isStudent = {false}/>
    <Student name="fufufafa" age = {50} isStudent = {false}/>
    {/* Default Props */}
    <Student/>
    </>

  );
}

export default App
