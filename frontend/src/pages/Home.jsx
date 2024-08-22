import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axiosInstance from "../config/axiosInstance";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axiosInstance.get("/api/todos/");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    // Function to refresh todos list
    const refreshTodos = async () => {
        await fetchTodos();
    };

    return (
        <>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="page-content container note-has-grid">
                <Header />
                <div className="tab-content bg-transparent">
                    <div id="note-full-container" className="note-has-grid row">
                        {todos.length === 0 ? (
                            <div className="col-12 text-center">
                                <img src={`${process.env.PUBLIC_URL}/not-found.webp`}
                                     alt="Not Found"
                                     style={{maxWidth: '100px', marginBottom: '20px'}}/>
                                <p>Task Not Found</p>
                            </div>
                        ) : (
                            todos.map(todo => (
                                <Card
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                    date={todo.created_at}
                                    description={todo.description}
                                    status={todo.status}
                                    priority={todo.priority}
                                    refreshTodos={refreshTodos} // Pass down the refreshTodos function
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
