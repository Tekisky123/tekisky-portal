import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from '../assets/Styles/InfoUser.module.css'

function InfoUser() {

    const [data, setdata] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        console.log(data)
        axios.get(`https://tekisky-portal-e544.onrender.com/user/getOneUser/${id}`)
            .then((response) => {
                setdata(response.data.user)
                console.log(response.data.user)
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            })
    }, [])

    const handleUpdate = (id) => {
        navigate(`/user/update/${id}`)
    }

    return (
        <div className={style.userMainDiv}>
            <div className={style.tableDiv}>
                <h4>User details of  {data.userName}</h4>
                <tr>
                    <td className={style.tableData}>Name:</td>
                    <td className={style.tableData}>{data.userName}</td>
                </tr>
                <tr>
                    <td className={style.tableData}>Email:</td>
                    <td className={style.tableData}>{data.email}</td>
                </tr>
                <tr>
                    <td className={style.tableData}>Mobile Number:</td>
                    <td className={style.tableData}>{data.mobileNumber}</td>
                </tr>
                <tr>
                    <td className={style.tableData}>User Type:</td>
                    <td className={style.tableData}>{data.userType}</td>
                </tr>
                <tr>
                    <td>
                        <button className={style.infoButton} onClick={() => {
                            navigate(-1)
                        }}>
                            back
                        </button>
                    </td>
                    <td>
                        <button className= {style.infoButton} onClick={() => handleUpdate(data._id)}>
                            Update
                        </button>
                    </td>
                </tr>
            </div>
        </div>
    )
}

export default InfoUser