import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import style from '../assets/Styles/RegisterUser.module.css'

function RegisterUser() {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {

        if (data.password === data.confirmPassword) {
            console.log("Password is confirm");
        } else {
            alert("Password not matching")
        }

        console.log(data);
        try {
            const response = await axios.post("https://tekisky-portal.onrender.com/user/register", data);
            if (response) {
                console.log(response.data);
                reset();
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className= {style.mainDiv}>
            <h1 style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "40px" }}>Telisky Pvt.Ltd.</h1>
            <div className={style.formDiv}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <label className={style.regLabel} htmlFor="">Name:</label>
                    <input className={style.regInput} type="text" placeholder='Enter Name'   {...register("name", {
                        required: { value: true, message: "Enter Your Name" }
                    })} />
                    <p className={style.errorPara}>{errors.name?.message}</p>
                    <br />
                    <label className={style.regLabel} htmlFor="">Mobile Number:</label>
                    <input className={style.regInput} type="bumber" placeholder='Enter Mobile Number'   {...register("mobileNumber", {
                        required: { value: true, message: "Enter Mobile Number" }
                    })} />
                    <p className={style.errorPara}>{errors.mobileNumber?.message}</p>
                    <br />
                    <label className={style.regLabel} htmlFor="">Email:</label>
                    <input className={style.regInput} type="email" placeholder='Enter Email'   {...register("email", {
                        required: { value: true, message: "Enter Email" }
                    })} />
                    <p className={style.errorPara}>{errors.email?.message}</p>
                    <br />
                    <label className={style.regLabel} htmlFor="">Password:</label>
                    <input className={style.regInput} type="text" placeholder='Enter Password'  {...register("password", {
                        required: { value: true, message: "Enter oPassword" }
                    })} />
                    <p className={style.errorPara}>{errors.password?.message}</p>
                    <br />
                    <label className={style.regLabel} htmlFor="">Confirm Password:</label>
                    <input className={style.regInput} type="text" placeholder='Re-Enter Password'  {...register("confirmPassword", {
                        required: { value: true, message: "Enter Password" }
                    })} />
                    <p className={style.errorPara}>{errors.password?.message}</p>
                    <br />
                    <button className={style.regButton} type='submit' onClick={() => { }}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterUser;


// const onSubmit = async (data) => {

//     if (data.password === data.confirmPassword) {
//         console.log("Password is confirm");
//     } else {
//         alert("Password not matching")
//     }

//     console.log(data);
//     axios.post("https://tekisky-portal.onrender.com/user/register", data)
//         .then((response) => {
//             if (response) {
//                 console.log(response.data);
//                 reset();
//             }
//         })
//         .catch((error) => {
//             alert(error.message);
//         })
// }