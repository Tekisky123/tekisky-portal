import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from '../assets/Styles/ViewUser.module.css'
import { useNavigate } from 'react-router-dom';


function ViewUser() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://tekisky-portal-e544.onrender.com/user/getuser")
      .then((response) => {
        setdata(response?.data?.data)
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const deleteStudent = (e, id) => {
    e.preventDefault()
    axios.get(`https://tekisky-portal-e544.onrender.com/user/${id}`)
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
    navigate(`/getOneUser/${id}`)
  }

  return (
    <div className={style.maincontainer}>
      {data.map((user, index) => {
        return (
          <div className={style.mainDiv} key={index} >
            <div className={style.divTable} >
              <tr>
                <td className={style.tableData}>Name:</td>
                <td className={style.tableData}>{user?.userName}</td>
              </tr>
              <tr>
                <td className={style.tableData}>Email:</td>
                <td className={style.tableData}>{user?.email}</td>
              </tr>
              <tr>
                <td className={style.tableData}>Mobile Number:</td>
                <td className={style.tableData}>{user.mobileNumber}</td>
              </tr>
              <tr>
                <td><button onClick={(e) => deleteStudent(e, user._id)} className={style.RegButton}>
                  Delete
                </button></td>
                <td><button className={style.RegButton} onClick={() => details(user._id)}>
                  View More
                </button></td>
              </tr>
            </div>
          </div>

          // <div key={user._id}>
          //   <div className={style.mainDiv}>
          //     <div className={style.infoDiv}>
          //       <p>Name:</p><h5 className={style.userRegH4}>{user?.userName}</h5>
          //       <p>Email:</p>
          //       <h5 className={style.userRegH4}>{user?.email}</h5>
          //       <p>Mobile Number:</p>
          //       <h5 className={style.userRegH4}>{user.mobileNumber}</h5>
          //     </div>
          //     <button  onClick={(e) => deleteStudent(e, user._id)} className={style.RegButton}>
          //       Delete
          //     </button>
          //     <br />
          //     <button className={style.RegButton}>
          //       Update
          //     </button>
          //   </div>
          // </div>
        )
      })}
    </div>
  )
}

export default ViewUser