import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import style from '../assets/Styles/Login.module.css'
import RingLoader from "react-spinners/RingLoader";


function Login() {

    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // useEffect(() => {
    //     setLoading(true)
    // }, [])

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true)
        axios
            .post("https://tekisky-portal-e544.onrender.com/user/login", data)
            .then((response) => {
                if (response) {
                    console.log(response.data)
                    setLoading(false)
                    reset()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className={style.mainDiv}>
            {loading ?
                <div className= {style.ringLoader}>
                    <RingLoader
                        color={"#18dcff"}
                        loading={loading}
                        size={150}
                    />
                </div>
                :
                <div className={style.compDiv}>
                    <div >
                        <LeftComponent />
                    </div>
                    <div className={style.logDiv}>
                        <img className={style.imgLog} src="\public\login.png" alt="" />
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <tr>
                                <td>
                                    <label htmlFor="" className={style.loginLable}>Mobile Number:</label>
                                </td>
                                <td>
                                    <input className={style.loginInput} type="text" placeholder=' Enter Your Employee Id'  {...register("mobileNumber", {
                                        required: { value: true, message: "Enter Mobile number" }
                                    })} />
                                    <p className={style.errorPara}>{errors.mobileNumber?.message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="" className={style.loginLable}>Password:</label>
                                </td>
                                <td>
                                    <input className={style.loginInput} type="text" placeholder='Enter Password' {...register("password", {
                                        required: { value: true, message: "Enter Password" }
                                    })} />
                                    <p className={style.errorPara}>{errors.password?.message}</p>
                                </td>
                            </tr>
                            <button className={style.loginButton}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

function LeftComponent() {
    return (
        <div className={style.compText}>
            <h2>Welcome To Tekisky</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam soluta dolorum sed repudiandae expedita dolore natus eum praesentium! Eius, a?</p>
        </div>
    )
}


export default Login;