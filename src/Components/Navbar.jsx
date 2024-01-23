import { useNavigate } from 'react-router-dom';
import style from '../assets/Styles/Navbar.module.css'

function Navbar() {

    const navigate = useNavigate()

    return (
        <>
            <div className={style.NavDiv}>
                <img className={style.imgNav} src="\public\logo.png" alt="" onClick={() => {
                    navigate("/")
                }} />
                <div>
                    <ul className={style.NavList}>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/enquiry")
                        }}>Enquiry</li>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/newAdmin")
                        }}>New Admin</li>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/users")
                        }}>Users</li>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/fees")
                        }}>Fees</li>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/reports")
                        }}>Reports</li>
                        <li className={style.NavListDetails} onClick={() => {
                            navigate("/batches")
                        }}>Batches</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;