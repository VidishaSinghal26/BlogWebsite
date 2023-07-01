import React, { useEffect, useState } from "react";
import Header from './Components/Header'
import Card from './Components/Card'
import "./App.css";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddBlog from "./Components/AddBlog";
import HomeScreen from "./Components/HomeScreen";
function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text, descript) => {
    setIsUpdating(true);
    setDescription(descript);
    setText(text);
    setTodoId(_id);
  };

  return (
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route  path ="/" exact element= {<HomeScreen/>} />
              <Route  path ="/addblog" element={<AddBlog />}/>
          </Routes>
      </BrowserRouter>
         
      </div>
  );
}

export default App;