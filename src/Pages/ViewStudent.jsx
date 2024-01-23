import axios from "axios";
import { useEffect, useState } from "react";
import style from '../assets/Styles/ViewStudent.module.css'
import { useNavigate } from "react-router-dom";

function ViewStudent() {
    const [data, setdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://tekisky-portal.onrender.com/student/getstudent`)
            .then((response) => {
                setdata(response?.data?.result);
                console.log("ress",response?.data?.result)
                console.log(response.educationalDetails
                )
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const deleteStudent = (e, id) => {
        e.preventDefault()
        axios.get(`https://tekisky-portal.onrender.com/student/${id}`)
            .then((response) => {
                console.log(response)
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
                console.log("Error details:", error.response);
            });
    };
    const details = (id) => {
        navigate(`/student/${id}`)
      }

    return (
        <>
            {data.map((student, index) => (
                <div className={style.cartDiv} key={index}>
                    <table className={style.cart}>
                        <tr>
                            <td className={style.tableData}>Name:</td>
                            <td className={style.tableData}>{student?.personalDetails?.name}</td>
                        </tr>
                        <tr>
                            <td className={style.tableData}>Course Name:</td>
                            <td className={style.tableData}>{student?.courseDetails?.courseName}</td>
                        </tr>
                        <tr>
                            <td className={style.tableData}>Address:</td>
                            <td className={style.tableData}>{student?.contactDetails?.correspondenceAddress}</td>
                        </tr>
                        <tr>
                            <td className={style.tableData}>Mobile Number:</td>
                            <td className={style.tableData}>{student?.contactDetails?.mobileNumber}</td>
                        </tr>
                        <tr>
                            <td className={style.tableData}>Email Id:</td>
                            <td className={style.tableData}>{student?.contactDetails?.emailId}</td>
                        </tr>
                        <tr>
                            <td className={style.tableData}><button
                                type="button"
                                className="btn btn-primary popButton"
                                onClick={(e) => deleteStudent(e, student._id)}
                            >
                                Delete
                            </button></td>
                            <td className={style.tableData}><button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target={`#staticBackdrop-${student._id}`}
                            >
                                More Info
                            </button></td>
                        </tr>
                    </table>

                    <div>


                        <div>

                        </div>

                        {/* Modal */}

                        <div className="modal fade" id={`staticBackdrop-${student._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${student._id}`} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id={`staticBackdropLabel-${student._id}`}>{student?.personalDetails?.name}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className={style.cart}>
                                            <tr>
                                                <td className={style.tableData}>Name:</td>
                                                <td className={style.tableData}>{student?.personalDetails?.name}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Course Name:</td>
                                                <td className={style.tableData}>{student?.courseDetails?.courseName}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Address:</td>
                                                <td className={style.tableData}>{student?.contactDetails?.correspondenceAddress}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Mobile Number:</td>
                                                <td className={style.tableData}>{student?.contactDetails?.mobileNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Email Id:</td>
                                                <td className={style.tableData}>{student?.contactDetails?.emailId}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Father Name:</td>
                                                <td className={style.tableData}>{student?.contactDetails?.fatherName}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Date Of Birth:</td>
                                                <td className={style.tableData}>{student?.personalDetails?.dateOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Gender:</td>
                                                <td className={style.tableData}>{student?.personalDetails?.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className={style.tableData}>Nationality:</td>
                                                <td className={style.tableData}>{student?.personalDetails?.nationality}</td>
                                            </tr>
                                            {student?.educationalDetails.map((education, value) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td colSpan={2}>
                                                                <h6>Education Details of 10th:</h6>
                                                            </td>
                                                        </tr>
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
                                                        <tr>
                                                            <td colSpan={2}>
                                                                <h6>Education Details of 12th:</h6>
                                                            </td>
                                                        </tr>
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
                                                        <tr>
                                                            <td colSpan={2}><h6>Education Details of Graduation:</h6></td>
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
                                                    </>
                                                )
                                            })}


                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={() => details(student._id)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ViewStudent;
