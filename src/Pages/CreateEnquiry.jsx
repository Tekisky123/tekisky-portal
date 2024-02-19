import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import style from '../assets/Styles/CreateEnquiry.module.css'
import { useParams } from 'react-router-dom';


function ViewEnquiry() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://tekisky-portal-e544.onrender.com/enquiry/getOneRecord/${id}`)
            .then((responce) => {
                setData(responce.data.enquiry)
                console.log(responce.data.enquiry)
                const enquiry = responce.data.enquiry;
                const enquiries = responce.data.enquiry;
                console.log("Fetched Data: ", JSON.stringify(enquiries));

                reset({
                    serielNo: enquiry.serielNo,
                    name: enquiry.name,
                    mobile: enquiry.mobile,
                    address: enquiry.address,
                    education: enquiry.education,
                    date: enquiry.date,
                    enquiryAbout: enquiry.enquiryAbout,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id, reset])

    const onSubmit = async (data) => {
        if (id) {
            const responce = await axios.post(`https://tekisky-portal-e544.onrender.com/enquiry/${id}`, data)
                .then((responce) => {
                    console.log(responce)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            try {
                const responce = await axios.post(`https://tekisky-portal-e544.onrender.com/enquiry/create`, data)
                reset()
                // console.log(responce)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className={style.mainDivEnq}>
            <div className={style.formDiv}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Sr. No.</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="number" placeholder='Please Enter Seriel Number' {...register("serielNo",
                                { required: { value: true, message: "Please Enter Seriel Number" } })} />
                            <p className={style.enqPara}>{errors.serielNo?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Name:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="text" placeholder='Please Enter Seriel Number' {...register("name",
                                { required: { value: true, message: "Please Enter Seriel Number" } })} />
                            <p className={style.enqPara}>{errors.name?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Mobile Number:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="number" placeholder='Please Enter Mobile Number' {...register("mobile",
                                { required: { value: true, message: "Please Enter Mobile Number" } })} />
                            <p className={style.enqPara}>{errors.mobile?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Address:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="text" placeholder='Please Enter Address' {...register("address",
                                { required: { value: true, message: "Please Enter Address" } })} />
                            <p className={style.enqPara}>{errors.address?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Education:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="text" placeholder='Please Enter Education' {...register("education",
                                { required: { value: true, message: "Please Enter Education" } })} />
                            <p className={style.enqPara}>{errors.education?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Date:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="date" placeholder='Please Enter Select Date' {...register("date",
                                { required: { value: true, message: "Please Enter Select Date" } })} />
                            <p className={style.enqPara}>{errors.date?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>
                            <label htmlFor="" className={style.enqLabels}>Enquiry About:</label>
                        </td>
                        <td className={style.tableData}>
                            <input className={style.enqInputs} type="text" placeholder='Please Enter Enquiry' {...register("enquiryAbout",
                                { required: { value: true, message: "Please Enter Enquiry" } })} />
                            <p className={style.enqPara}>{errors.enquiryAbout?.message}</p>
                        </td>
                    </tr>
                    {id ? (<button className={style.submitButton} type='submit' >Update</button>)
                        :
                        (<button className={style.submitButton} type='submit' >Submit</button>)
                    }
                </form>
            </div>
        </div>
    )
}

export default ViewEnquiry