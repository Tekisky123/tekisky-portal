import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import style from '../assets/Styles/RegisterUser.module.css'
import RingLoader from "react-spinners/RingLoader";
import { useNavigate, useParams } from 'react-router-dom';

function RegisterUser() {
    const [loading, setLoading] = useState(false)
    const [data, setdata] = useState()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://tekisky-portal-e544.onrender.com/user/getOneUser/${id}`)
            .then((response) => {
                setdata(response.data.user);
                console.log(response.data.user);
                const user = response.data.user;
                // Set default values for the form fields using the reset function
                reset({
                    userName: user.userName,
                    mobileNumber: user.mobileNumber,
                    email: user.email,
                    password: user.password,
                    confirmPassword: user.password, // Assuming confirmPassword is the same as password
                    userType: user.userType,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, reset]);

    const onSubmit = async (data) => {
        console.log(id)
        if (id) {
            const url = `https://tekisky-portal-e544.onrender.com/user/${id}`;
            console.log("Updating user at:", url);

            try {
                const response = await axios.post(url, data);
                setLoading(response?.data);
                console.log("Response:", response?.data);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            if (data.password === data.confirmPassword) {
                setLoading(false);
                try {
                    const response = await axios.post("https://tekisky-portal-e544.onrender.com/user/create", data);
                    console.log("create Response:", response);
                } catch (error) {
                    console.error("Error:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                alert("Password not matching");
            }
        }
    };

    return (
        <div className={style.mainDiv}>
            {loading ?
                <div className={style.ringLoader}>
                    <RingLoader
                        color={"#18dcff"}
                        loading={loading}
                        size={150}
                    />
                </div>
                :
                <div>
                    <h1 style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>Telisky Pvt.Ltd.</h1>
                    <div className={style.formDiv}>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <tr>
                                <td > <label className={style.regLabel} htmlFor="">Name:</label></td>
                                <td>
                                    <input className={style.regInput} type="text" placeholder='Enter Name'   {...register("userName", {
                                        required: { value: true, message: "Enter Your Name" }
                                    })} />
                                    <p className={style.errorPara}>{errors.userName?.message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className={style.regLabel} htmlFor="">Mobile Number:</label>
                                </td>
                                <td>
                                    <input className={style.regInput} type="bumber" placeholder='Enter Mobile Number'   {...register("mobileNumber", {
                                        required: { value: true, message: "Enter Mobile Number" }
                                    })} />
                                    <p className={style.errorPara}>{errors.mobileNumber?.message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className={style.regLabel} htmlFor="">Email:</label>
                                </td>
                                <td>
                                    <input className={style.regInput} type="email" placeholder='Enter Email'   {...register("email", {
                                        required: { value: true, message: "Enter Email" }
                                    })} />
                                    <p className={style.errorPara}>{errors.email?.message}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label className={style.regLabel} htmlFor="">Password:</label>
                                </td>
                                <td>
                                    <input className={style.regInput} type="text" placeholder='Enter Password'  {...register("password", {
                                        required: { value: true, message: "Enter Password" }
                                    })} />
                                    <p className={style.errorPara}>{errors.password?.message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className={style.regLabel} htmlFor="">Confirm Password:</label>

                                </td>
                                <td>
                                    <input className={style.regInput} type="text" placeholder='Re-Enter Password'  {...register("confirmPassword", {
                                        required: { value: true, message: "Enter Password" }
                                    })} />
                                    <p className={style.errorPara}>{errors.password?.message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <select className={style.seletInput} name="" id="" defaultValue=""
                                        {...register("userType", {
                                            required: { value: true, message: "Select User Type" },
                                        })}>
                                        <option value="" disabled>
                                            Select User Type
                                        </option>
                                        <option value="admin">Admin</option>
                                        <option value="operator">Operator</option>
                                    </select>
                                    <p className={style.errorPara}>{errors.userType?.message}</p>
                                </td>
                            </tr>


                            {/* <br /> */}
                            {id ? (
                                <button className={style.regButton} variant="primary" type="submit">
                                    Update
                                </button>
                            ) : (
                                <button className={style.regButton} variant="primary" type="submit">
                                    Register
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default RegisterUser;