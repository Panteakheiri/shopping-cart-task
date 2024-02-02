import React , {useState , useEffect} from 'react';
import validate from './Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from "./Login.module.css";
import logo from "../assets/logo-blue.jpg"
import authContext from '../context/authContext';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

const Login = () => {

    const navigate = useNavigate();
  const AuthContext = useContext(authContext);

const notify = (text , type) => {
    if(type === "success") {
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } else {
        toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    };

    const [data , setData] = useState({
        username: "",
        email: "",
        password : "" ,
    });

    const changeHandler = event => {
            setData({...data,[event.target.name] : event.target.value} )
    }

    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    const focusHandler = (event) => {
        setTouched({...touched , [event.target.name]: true})
    }

    const submitHandler =(event) => {
        event.preventDefault()
        if(!Object.keys(errors).length) {
            notify("you loged in successfully" , "success")
            localStorage.setItem('userName', data.username);
            AuthContext.logedin(data.username);
            navigate("/");
              
            
        } else {
            notify("invalid data!" , "error")
            setTouched({
                email:  true,
                password :  true ,
            })
        }
    }

    useEffect(() => {
        setErrors(validate(data))
        console.log(errors)
    } , [data])

    return (
        <div className={Styles.containerall}>
            
            <form className={Styles.form} onSubmit={submitHandler}>
                <img src={logo} alt='logo' className={Styles.logo}/>
                <h2 className={Styles.header}>login</h2>
                <div className={Styles.formfield}>
                    <label>Username</label>
                    <input className={(errors.username && touched.username) ? Styles.uncomplete :  Styles.forminput }
                    type='text' name='username' value={data.username} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.username && touched.username && <span>{errors.username}</span>}

                </div>
                <div className={Styles.formfield}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? Styles.uncomplete :  Styles.forminput }
                    type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                <div className={Styles.formfield}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? Styles.uncomplete :  Styles.forminput}
                    type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={Styles.buttons}>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;