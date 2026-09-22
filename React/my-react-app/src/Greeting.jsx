import PropTypes from "prop-types";
function Greeting(props){
    const welcomMes = <h1 className="greeting-mess">Welcome {props.name}</h1>;
    const loginMes = <h1 className="logIn-mess">{props.name} is not log in </h1>
    return(
        (props.isLogin)
        ?   welcomMes
        :   loginMes
    )
}
Greeting.propTypes = {
    isLogin : PropTypes.bool,
    name : PropTypes.string
}
Greeting.defaultProps = {
    isLogin : false,
    name : "blank"
}
export default Greeting