import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import Header from "../components/Header";

const DeleteTask = () => {
    const {id} = useParams(); // Get the ID from the route params
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/api/todos/${id}/`);
            navigate("/"); // Navigate back to the home page after deletion
        } catch (error) {
            console.error("Error deleting task: ", error);
        }
    };

    const handleCancel = () => {
        navigate("/"); // Navigate back to the home page without deleting
    };

    return (
        <>
            <div className="page-content container note-has-grid">
                <Header/>
                <div className="container mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h2>Are you sure you want to delete this task?</h2>
                        </div>
                        <div className="card-body">
                            <button onClick={handleDelete} className="btn btn-danger mr-2">Yes, Delete</button>
                            <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteTask;


