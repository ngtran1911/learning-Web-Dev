
function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.defaultProps = {
    name : "Guest",
    age : 0 ,
    isStudent : true,
}

export default Student