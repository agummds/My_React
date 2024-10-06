
// read only properties that are shared between components(cara berkomunikasi dan berbagi data)
// Terdiri dari datatype dan adajuga PropTypes.number

import propTypes from 'prop-types'

function Student(props){
    return(
        <div className= "student" >
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

// bagian propTypes
// PropTypes adalah mekanisme yang digunakan di React.js untuk memvalidasi tipe data yang diberikan sebagai props ke sebuah komponen
Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool,
}

// Default props 
// menetapkan nilai default untuk props suatu komponen. Jika suatu props tidak diberikan nilai saat komponen dirender, maka nilai default-nya akan digunakan

Student.defaultProps = {
    name : " Guest",
    age : 0,
    isStudent : false,
}

export default Student