import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function InfoStudent() {
    const [data, setdata] = useState([])
    const { id } = useParams()

    useEffect(() => {
        console.log(data);
        axios
            .get(`https://tekisky-portal.onrender.com/student/getstudent/${id}`)
            .then((response) => {
                setdata(response?.data?.result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div>
                    {data?.personalDetails?.name}
            </div>
        </>
    )
}

export default InfoStudent;