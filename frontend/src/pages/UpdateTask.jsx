// src/pages/UpdateTodoPage.jsx
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Header from "../components/Header";
import axiosInstance from "../config/axiosInstance";

const UpdateTodoPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('in_progress');
    const [priority, setPriority] = useState('low');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axiosInstance.get(`/api/todos/${id}/`);
                const todo = response.data;
                console.log(todo);
                setTitle(todo.title);
                setDescription(todo.description);
                setStatus(todo.status);
                setPriority(todo.priority);
            } catch (err) {
                setError('Failed to load todo. Please try again.');
                console.error('Error fetching todo:', err);
            }
        };

        fetchTodo();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put(`/api/todos/${id}/`, {
                title,
                description,
                status,
                priority,
            });

            // Redirect to the home page or show a success message
            navigate('/');
        } catch (err) {
            setError('Failed to update todo. Please try again.');
            console.error('Error updating todo:', err);
        }
    };

    return (
        <>
            <div className="page-content container note-has-grid">
                <Header/>
                <div className="container mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>Update Task</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Status</label>
                                    <select
                                        id="status"
                                        className="form-control"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Priority</label>
                                    <select
                                        id="priority"
                                        className="form-control"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Update Todo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateTodoPage;
