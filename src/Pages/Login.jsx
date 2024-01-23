import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import style from '../assets/Styles/Login.module.css'


function Login() {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://tekisky-portal.onrender.com/user/login", data)
            .then((response) => {
                if (response) {
                    console.log(response.data)
                    reset()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.compDiv}>
                <div >
                    <LeftComponent />
                </div>
                <div className={style.logDiv}>
                    <img className={style.imgLog} src="\public\login.png" alt="" />
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className={style.loginLable}>Employee Id:</label>
                        <input className={style.loginInput} type="text" placeholder='Enter Your Employee Id'  {...register("empId")} />
                        <br />
                        <label htmlFor="" className={style.loginLable}>Password:</label>
                        <input className={style.loginInput} type="text" placeholder='Enter Password' {...register("password")} />
                        <button className={style.loginButton}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function LeftComponent() {
    return (
        <div style={{textAlign: "center"}}>
            <h2>Welcome To Tekisky</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam soluta dolorum sed repudiandae expedita dolore natus eum praesentium! Eius, a?</p>
        </div>
    )
}


export default Login;