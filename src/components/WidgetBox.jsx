import { useState, useRef } from "react";
import TaskList from "./TaskList";
import WidgetHeader from "./WidgetHeader";

const WidgetBox = () => {
  const [tasks, setTasks] = useState([
    "Mail packages",
    "Return library books",
    "Pick up beverages and snacks for birthday party",
  ]);

  const [newTaskInput, setNewTaskInput] = useState("");
  const [isInputMode, setIsInputMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(-1);
  const inputRef = useRef(null);

  const toggleInputMode = (event) => {
    if (
      event.target?.type != "checkbox" &&
      !event.target?.id?.includes("text") &&
      !event.target?.parentElement?.id.includes("text")
    ) {
      setIsInputMode(!isInputMode);
      if (!isInputMode) {
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    } else if (event.target?.id?.includes("text")) {
      const number = parseInt(event.target.id.substring(4));
      if (isDeleteMode == number) {
        setIsDeleteMode(-1);
      } else {
        setIsDeleteMode(number);
      }
    }
  };

  const addTask = () => {
    if (newTaskInput.trim() !== "") {
      setTasks([...tasks, newTaskInput]);
      setNewTaskInput("");
      setIsInputMode(false);
    }
  };

  const handleInputChange = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      inputRef.current &&
      newTaskInput.trim() != ""
    ) {
      addTask();
    } else if (event.key === "Enter") {
      setIsInputMode(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target?.id == "bg") {
      if (inputRef?.current && newTaskInput.trim() != "") {
        addTask();
      } else {
        setIsInputMode(false);
        setIsDeleteMode(-1);
      }
    }
  };

  return (
    <div
      id="bg"
      className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-400 via-blue-300 to-blue-950"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-xl p-6 shadow-md w-96 min-h-[500px] max-h-[500px]"
        onClick={toggleInputMode}
      >
        <WidgetHeader tasks={tasks}></WidgetHeader>

        <hr className="my-4 border-t border-gray-300" />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          inputRef={inputRef}
          isInputMode={isInputMode}
          isDeleteMode={isDeleteMode}
          newTaskInput={newTaskInput}
          handleInputChange={handleInputChange}
          handleInputKeyDown={handleInputKeyDown}
          handleOutsideClick={handleOutsideClick}
        ></TaskList>
      </div>
    </div>
  );
};

export default WidgetBox;
