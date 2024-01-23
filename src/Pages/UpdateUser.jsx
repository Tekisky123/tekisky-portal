import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from '../assets/Styles/UpdateUser.module.css'

function UpdateUser() {
    
    // const [data, setdata] = useState([]);
    const { id } = useParams()
    const [formData, setFormData] = useState({
        courseName: '',
        sessionoryear: '',
        name: '',
        dateOfBirth: '',
        gender: '',
        nationality: '',
        correspondenceAddress: '',
        mobileNumber: '',
        emailId: '',
        fatherName: '',
        nameOfSchool10th: '',
        board10th: '',
        yearOfPassing10th: '',
        subjects10th: '',
        percentage10th: '',
        nameOfCollage12th: '',
        board12th: '',
        yearOfPassing12th: '',
        subjects12th: '',
        percentage12th: '',
        nameOfCollagegrd: '',
        boardgrd: '',
        yearOfPassinggrd: '',
        subjectsgrd: '',
        percentagegrd: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`${name}: ${value}`);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`https://tekisky-portal.onrender.com/student/${id}`, formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://tekisky-portal.onrender.com/student/getstudent`)
            .then((response) => {
                setFormData(response?.data?.result);
                console.log(response)
                console.log(response.educationalDetails)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Tekisky Pvt.Ltd.</h1>
            <h2 className={style.apph2}>Application for Admission</h2>
            <hr />
            <form onSubmit={handleUpdate} >
                <div className={style.courceDetais}>
                    <h3>Cource Detais:-</h3>
                    <label className={style.courceDetaisLabels} htmlFor="">Course Name :</label>
                    <input className={style.courceDetaisInputs} type="text" placeholder="Enter Course Name" onChange={handleChange} name="courseName" value={formData.courseName} />
                    <p className={style.validParaCource}>{errorMsg.courseName}</p>
                    <br />
                    <label className={style.courceDetaisLabels} htmlFor="">Sessionoryear : </label>
                    <input className={style.courceDetaisInputs} type="number" placeholder="sessionoryear" onChange={handleChange} name='sessionoryear' value={formData.sessionoryear} />
                    <p className={style.validParaCource}>{errorMsg.sessionoryear}</p>
                </div>
                <h3 className={style.courceDetaish2}>Personal Detais:-</h3>
                <div className={style.personalDetais}>
                    <label className={style.personalDetaisLabels} htmlFor="">Name(Mr./Ms.):</label>
                    <input className={style.personalDetaisInputs} type="text" placeholder="name" onChange={handleChange} name='name' value={formData.name} />
                    <p className={style.validParaPersonal}>{errorMsg.name}</p>
                    <br />
                    <label className={style.personalDetaisLabels} htmlFor="">Date Of Birth(DD/MM/YYYY):</label>
                    <input className={style.DOBInputs} type="date" placeholder="dateOfBirth" onChange={handleChange} name='dateOfBirth' value={formData.dateOfBirth} />
                    <p className={style.validParaPersonal}>{errorMsg.dateOfBirth}</p>
                    <br />
                    <label className={style.personalDetaisLabels} htmlFor="">Gender:-</label>
                    <label className={style.genderLabels} htmlFor="">Male</label>
                    <input type="radio" onChange={handleChange} value="male" name='gender' />
                    <label className={style.genderLabels} htmlFor="">Female</label>
                    <input type="radio" onChange={handleChange} value="female" name='gender' />
                    <p className={style.validParaPersonal}>{errorMsg.gender}</p>
                    <label className={style.personalDetaisLabels} htmlFor="">Nationality</label>
                    <input className={style.nationalityInputs} type="text" placeholder="nationality" onChange={handleChange} name='nationality' value={formData.nationality} />
                    <p className={style.validParaPersonal}>{errorMsg.nationality}</p>
                </div>
                <h3 className={style.courceDetaish2}>Contact Detais:</h3>
                <div className={style.contactDetais}>
                    <label className={style.contactDetaisLabels} htmlFor="">Correspondence Address :</label> <br />
                    <input className={style.contactDetaisInputs} type="text" placeholder="correspondenceAddress" onChange={handleChange} name='correspondenceAddress' value={formData.correspondenceAddress} />
                    <p className={style.validParaContact}>{errorMsg.correspondenceAddress}</p>
                    <br />
                    <label className={style.contactDetaisLabels} htmlFor="">Mobile Number :</label>
                    <input className={style.mobAndEmailInputs} type="number" placeholder="mobileNumber" onChange={handleChange} name='mobileNumber' value={formData.mobileNumber} />
                    <p className={style.validParaContact}>{errorMsg.mobileNumber}</p>
                    <label className={style.contactDetaisLabels} htmlFor="">Email Id :</label>
                    <input className={style.mobAndEmailInputs} type="email" placeholder="emailId" onChange={handleChange} name='emailId' value={formData.emailId} />
                    <p className={style.validParaContact}>{errorMsg.emailId}</p>
                    <br />
                    <label className={style.contactDetaisLabels} htmlFor="">Father Name(With Mobile No) :</label>
                    <input className={style.fatherInputs} type="text" placeholder="fatherName" onChange={handleChange} name='fatherName' value={formData.fatherName} />
                    <p className={style.validParaContact}>{errorMsg.fatherName}</p>
                </div>
                <h3 className={style.courceDetaish2}>Educational Details:</h3>
                <table className={style.stdTable}>
                    <tr style={{ textAlign: "center" }}>
                        <th>Exam <br /> Passed</th>
                        <th>Name of School</th>
                        <th>Board</th>
                        <th>Year of passing</th>
                        <th>Subject</th>
                        <th>% of Marks</th>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td><input type="text" placeholder="nameOfSchool" onChange={handleChange} name='nameOfSchool10th' value={formData.nameOfSchool10th} className={style.tableInputs} /></td>
                        <td> <input type="text" placeholder="board" onChange={handleChange} name='board10th' value={formData.board10th} className={style.tableInputs} /></td>
                        <td> <input type="number" placeholder="yearOfPassing" onChange={handleChange} name='yearOfPassing10th' value={formData.yearOfPassing10th} className={style.tableInputs} /></td>
                        <td><select id="subjects10th" name="subjects10th" onChange={handleChange} value={formData.subjects10th} className={style.tableInputs}   >
                            <option value="" disabled>select subject</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                            <option value="urdu">Urdu</option>
                        </select></td>
                        <td><input type="number" placeholder="percentage" onChange={handleChange} name='percentage10th' value={formData.percentage10th} className={style.tableInputs} /></td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td><input type="text" placeholder="nameOfCollage" onChange={handleChange} name='nameOfCollage12th' value={formData.nameOfCollage12th} className={style.tableInputs} /></td>
                        <td><input type="text" placeholder="board" onChange={handleChange} name='board12th' value={formData.board12th} className={style.tableInputs} /></td>
                        <td><input type="number" placeholder="yearOfPassing" onChange={handleChange} name='yearOfPassing12th' value={formData.yearOfPassing12th} className={style.tableInputs} /></td>
                        <td><select id="subjects12th" name="subjects12th" onChange={handleChange} value={formData.subjects12th} className={style.tableInputs}>
                            <option value="" disabled>select subject</option>
                            <option value="math">Arts</option>
                            <option value="science">Science</option>
                            <option value="english">commerce</option>
                        </select></td>
                        <td>  <input type="number" placeholder="percentage" onChange={handleChange} name='percentage12th' value={formData.percentage12th} className={style.tableInputs} /></td>
                    </tr>
                    <tr>
                        <td>Graduation</td>
                        <td><input type="text" placeholder="nameOfCollage" onChange={handleChange} name='nameOfCollagegrd' value={formData.nameOfCollagegrd} className={style.tableInputs} /></td>
                        <td><input type="text" placeholder="board" onChange={handleChange} name='boardgrd' value={formData.boardgrd} className={style.tableInputs} /></td>
                        <td> <input type="number" placeholder="yearOfPassing" onChange={handleChange} name='yearOfPassinggrd' value={formData.yearOfPassinggrd} className={style.tableInputs} /></td>
                        <td><select id="subjectsgrd" name="subjectsgrd" onChange={handleChange} value={formData.subjectsgrd} className={style.tableInputs}>
                            <option value="" disabled>select subject</option>
                            <option value="BSc">BSc</option>
                            <option value="BCom">BCom</option>
                            <option value="BA">BA</option>
                            <option value="BCS">BCS</option>
                            <option value="BCA">BCA</option>
                        </select></td>
                        <td><input type="number" placeholder="percentagegrd" onChange={handleChange} name='percentagegrd' value={formData.percentagegrd} className={style.tableInputs} /></td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <br />
                <button className={style.nextButton} variant="primary" type="submit">
                    Next
                </button>
            </form>
        </div>
    )
}

export default UpdateUser;