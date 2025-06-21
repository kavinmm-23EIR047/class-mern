import "./style/Login.css"
import Img from "../assets/react.svg"
function Login(){
    return (
        <>
         
        <div className="login">
        <img src={Img} alt="React Logo" />
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        </div>
      
        </>
    )
}
export default Login