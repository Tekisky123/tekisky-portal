import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from '../assets/Styles/InfoStudent.module.css'

function InfoStudent() {
    const [data, setdata] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(data);
        axios
            .get(`https://tekisky-portal-e544.onrender.com/student/getOneStudent/${id}`)
            .then((response) => {
                setdata(response?.data?.result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleUpdate = (id) => {
        navigate(`/student/update/${id}`)
    }

    return (
        <div className={style.viewMainDiv}>
            <div className={style.tableMainDiv}>
                <div className={style.tableDiv}>
                    <h5 className={style.tableheading}>Course Details:</h5>
                    <tr>
                        <td className={style.tableData}>Course Name:</td>
                        <td className={style.tableData}>{data?.courseDetails?.courseName}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Sessionor Year:</td>
                        <td className={style.tableData}>{data?.courseDetails?.sessionoryear}</td>
                    </tr>
                    <hr />
                    <h5 className={style.tableheading}>Personal Details:</h5>
                    <tr>
                        <td className={style.tableData}>Name:</td>
                        <td className={style.tableData}>{data?.personalDetails?.name}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Date Of Birth:</td>
                        <td className={style.tableData}>{data?.personalDetails?.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Gender:</td>
                        <td className={style.tableData}>{data?.personalDetails?.gender}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Nationality:</td>
                        <td className={style.tableData}>{data?.personalDetails?.nationality}</td>
                    </tr>
                    <hr />
                    <h5 className={style.tableheading}>Contact Details:</h5>
                    <tr>
                        <td className={style.tableData}>Address:</td>
                        <td className={style.tableData}>{data?.contactDetails?.correspondenceAddress}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Mobile Number:</td>
                        <td className={style.tableData}>{data?.contactDetails?.mobileNumber}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Email Id:</td>
                        <td className={style.tableData}>{data?.contactDetails?.emailId}</td>
                    </tr>
                    <tr>
                        <td className={style.tableData}>Father Name:</td>
                        <td className={style.tableData}>{data?.contactDetails?.fatherName}</td>
                    </tr>
                    <hr />
                    {data?.educationalDetails?.map((education, value) => {
                        return (
                            <>
                                {/* <h3 style={{textAlign: "center"}}>Details of Education</h3> */}
                                <h6 className={style.tableheading}>Education Details of 10th:</h6>
                                <tr>
                                    <td className={style.tableData}>Name of School:</td>
                                    <td className={style.tableData}>{education?.tenth.nameOfSchool}</td>
                                </tr>
                                <tr>
                                    <td className={style.tableData}>Board:</td>
                                    <td className={style.tableData}>{education?.tenth.board}</td>
                                </tr>
                                <tr>
                                    <td className={style.tableData}>Year Of Passing:</td>
                                    <td className={style.tableData}>{education?.tenth.yearOfPassing}</td>
                                </tr>
                                <tr>
                                    <td className={style.tableData}>Percentage:</td>
                                    <td className={style.tableData}>{education?.tenth.percentage}</td>
                                </tr>
                                <tr>
                                    <td className={style.tableData}>Subjects:</td>
                                    <td className={style.tableData}>{education?.tenth.subjects}</td>
                                </tr>
                                <div>
                                    <hr />
                                    <h6 className={style.tableheading}>Education Details of 12th:</h6>
                                    <tr>
                                        <td className={style.tableData}>Name of School:</td>
                                        <td className={style.tableData}>{education?.twelfth.nameOfCollege}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Board:</td>
                                        <td className={style.tableData}>{education?.twelfth.board}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Year Of Passing:</td>
                                        <td className={style.tableData}>{education?.twelfth.yearOfPassing}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Percentage:</td>
                                        <td className={style.tableData}>{education?.twelfth.percentage}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Subjects:</td>
                                        <td className={style.tableData}>{education?.twelfth.subjects}</td>
                                    </tr>
                                </div>
                                <div>
                                    <hr />
                                    <tr>
                                        <td colSpan={2} className={style.tableheading}><h6>Education Details of Graduation:</h6></td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Name of School:</td>
                                        <td className={style.tableData}>{education?.graduation.nameOfCollege}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Board:</td>
                                        <td className={style.tableData}>{education?.graduation.board}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Year Of Passing:</td>
                                        <td className={style.tableData}>{education?.graduation.yearOfPassing}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Percentage:</td>
                                        <td className={style.tableData}>{education?.graduation.percentage}</td>
                                    </tr>
                                    <tr>
                                        <td className={style.tableData}>Subjects:</td>
                                        <td className={style.tableData}>{education?.graduation.subjects}</td>
                                    </tr>
                                    <tr>
                                        <td><button className={style.infoButton} onClick={() => {
                                            navigate(-1)
                                        }}>
                                            Back
                                        </button></td>
                                        <td><button className={style.infoButton} onClick={() => {
                                            handleUpdate(data._id)
                                        }}>
                                            Update
                                        </button></td>
                                    </tr>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div >
        </div>
    )
}

export default InfoStudent;