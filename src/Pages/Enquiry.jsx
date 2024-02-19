import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../assets/Styles/Enquiry.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Enquiry() {
    const [data, setdata] = useState([])
    const [deleteId, setDeleteId] = useState("")
    const [editId, seteditId] = useState("")
    const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
    const [openEditModel, setOpenEditModel] = React.useState(false);
    const handleDeleteOpen = (id) => {
        setOpenDeleteModel(true)
        setDeleteId(id)
    };
    const handleEditOpen = (id) => {
        setOpenEditModel(true)
        seteditId(id)
    };
    const handleClose = () => setOpenDeleteModel(false);
    const handleClose1 = () => setOpenEditModel(false);
    const navigate = useNavigate()
    const id = useParams()

    useEffect(() => {
        axios.get(`https://tekisky-portal-e544.onrender.com/enquiry/getRecords`)
            .then((responce) => {
                setdata(responce.data.data)
                console.log(responce.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDelete = (e, id) => {
        e.preventDefault()
        axios.get(`https://tekisky-portal-e544.onrender.com/enquiry/${id}`)
            .then((response) => {
                console.log(response)
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleUpdate = (e, id) => {
        navigate(`update/${id}`)
    }
    return (
        <>
            <button className={styles.createButton} onClick={() => {
                navigate('/enquiry/create')
            }}>Add Enquiry +</button>
            <div className={styles.enqMainDiv}>
                <table className={styles.enqTable}>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Education</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{data.map((enquiry, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{enquiry.serielNo}</td>
                                    <td>{enquiry.name}</td>
                                    <td>{enquiry.mobile}</td>
                                    <td>{enquiry.address}</td>
                                    <td>{enquiry.education}</td>
                                    <td>
                                        <Button onClick={() => handleDeleteOpen(enquiry._id)}><MdDeleteForever /></Button>
                                        <Button><FaPencilAlt onClick={() => handleEditOpen(enquiry._id)} /></Button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}</tbody>
                </table>
                <div>
                    <Modal
                        open={openDeleteModel}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Are you sure to Delete
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <button onClick={() => {
                                    handleClose()
                                }} className={styles.deleteButton}>Cancel</button>
                                <button className={styles.deleteButton} onClick={(e) => handleDelete(e, deleteId)} >Delete</button>
                            </Typography>
                        </Box>
                    </Modal>
                    <Modal
                        open={openEditModel}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Are you sure to Update
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <button onClick={() => {
                                    handleClose1()
                                }} className={styles.deleteButton}>Cancel</button>
                                <button className={styles.deleteButton} onClick={(e) => handleUpdate(e, editId)} >Update</button>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Enquiry;
