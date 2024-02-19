import { useNavigate } from 'react-router-dom';
import style from '../assets/Styles/Terms.module.css'
import { useState } from 'react';

function Terms() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()

    return (
        <div className={style.termsStyle}>
            <h1 style={{ textAlign: "center" }}>TEKISKY</h1>
            <h4 style={{ textAlign: "center" }}>Your technology Partner</h4>
            <div className={style.termsDiv}>
                <h3>Terms and Conditions:</h3>
                <ol>
                    <li>You will be working as Trainee Software Engineer at Tekisky Pvt td.</li>
                    <li>You should maintain at least 85 % attendance.</li>
                    <li>You should complete all the assignments given during training period.</li>
                    <li>You should take assessment test after each module.</li>
                    <li>You should at least spend 3 - 4 hours daily for learning the topic covered in office.</li>
                    <li>Assigned project completion is mandatory.</li>
                    <li>If your performance is not up to the mark or falls short of the minimum standards set by the <br /> Company, the Company shall have the right to terminate you forthwith without giving any <br /> notice.</li>
                    <li> You shall not act in any manner, which may be prejudicial or detrimental to the reputation <br /> and standing of the Company. </li>
                    <li>The Company may in its sole discretion may extend duration of training based on your <br /> performance, conduct and / or other factors as the company may deem fit.</li>
                    <li>All intellectual property rights, including but not limited to Projects, artifact, Patents, <br /> Copyrights, Designs and Trademarks developed by you during training or using the Company <br /> infrastructure, or while performing or discharging official duties shall be the sole and <br /> exclusive property of the Company and company has all the right over it.</li>
                    <li>In the event of any discrepancy, willful neglect of your duties, breach of trust, gross <br /> indiscipline or any other serious dereliction of duties that may be prejudicial to the interests <br /> of the Company, the Company has the discretion to terminate your Training forthwith or <br /> with such notice as it deems fit and without any notice whatsoever.</li>
                    <li>If you Discontinue course in middle without proper communication then still you have to <br /> pay complete fees.</li>
                    <li>Due to any emergency if you want to take leave, you have to take written permission from <br /> the management.</li>
                    <li> Those who will remain absent for more than 3 days without informing, their admission will be <br /> considered as canceled, they should have to pay the penalty.</li>
                    <li>You agree to abide by all the Company rules, regulations, instructions, policies, practices, <br /> and procedures that the Company may amend from time to time.</li>
                </ol>
            </div>
            <div className={style.inpButton}>
                <input type="checkbox" onClick={() => {
                    setIsChecked(!isChecked)
                }} />
                I accept Terms and Conditions
            </div>
            <div>
                <button
                    className={style.backButton}
                    onClick={() => {
                        navigate("/student/create")
                    }}>
                    Back
                </button>
                <button
                    className={style.submitButton}
                    style={{ backgroundColor: isChecked ? ' #70a1ff' : '#dcdde1', color: isChecked ? 'white' : 'black' }}
                    onClick={() => {
                        if (isChecked) {
                            navigate('/');
                        } else {
                            alert('Please accept the Terms and Conditions');
                        }
                    }}
                    disabled={!isChecked}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Terms;