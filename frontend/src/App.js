// src/App.js
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";
import InProgressTasks from "./pages/InProgressTasks";
import CompletedTasks from "./pages/CompletedTasks";
import DeleteTask from "./pages/DeleteTask";
import {ThemeProvider} from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/in-progress-tasks" element={<InProgressTasks/>}/>
                    <Route path="/completed-tasks" element={<CompletedTasks/>}/>
                    <Route path='/add-todo' element={<AddTask/>}/>
                    <Route path='/update-todo/:id' element={<UpdateTask/>}/>
                    <Route path="/delete-todo/:id" element={<DeleteTask/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
