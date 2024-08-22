import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axiosInstance from "../config/axiosInstance";

const InProgressTasks = () => {
    const [inProgressTodos, setInProgressTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axiosInstance.get("/api/todos/");
                const filteredTodos = response.data.filter(todo => todo.status === "in_progress");
                setInProgressTodos(filteredTodos);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchTodos();
    }, []);



    return (
        <>
            <div className="page-content container note-has-grid">
                <Header/>
                <div className="tab-content bg-transparent">
                    <div id="note-full-container" className="note-has-grid row">
                        {inProgressTodos.length > 0 ? (
                            inProgressTodos.map(todo => (
                                <Card
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                    date={todo.created_at}
                                    description={todo.description}
                                    status={todo.status}
                                    priority={todo.priority}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-danger mt-5 text-center">
                                <img src={`${process.env.PUBLIC_URL}/not-found.webp`}
                                     alt="Not Found"
                                     style={{maxWidth: '100px', marginBottom: '20px'}}/>
                                <h5>No tasks in progress.</h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InProgressTasks;
