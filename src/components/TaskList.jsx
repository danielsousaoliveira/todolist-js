import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  setTasks,
  inputRef,
  isInputMode,
  isDeleteMode,
  newTaskInput,
  handleInputChange,
  handleInputKeyDown,
  handleOutsideClick,
}) => {
  return (
    <div className="task-list-container max-h-[350px] overflow-y-auto">
      <ul className="mt-4 space-y-4">
        {tasks.map((task, index) => (
          <Task
            key={index}
            tasks={tasks}
            setTasks={setTasks}
            isDeleteMode={isDeleteMode}
            index={index}
          ></Task>
        ))}
      </ul>
      <div>
        {isInputMode ? (
          <li className="flex items-center gap-3 my-2">
            <input
              type="checkbox"
              className="ml-1 form-checkbox h-6 w-6 cursor-pointer appearance-none rounded-full border border-gray-900/20 transition-all  checked:bg-blue-500 hover:scale-110 min-w-6 min-h-6"
            />
            <input
              id="text"
              ref={inputRef}
              type="text"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter a new task..."
              value={newTaskInput}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onBlur={handleOutsideClick}
            />
          </li>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTasks: PropTypes.func.isRequired,
  inputRef: PropTypes.any.isRequired,
  isInputMode: PropTypes.bool.isRequired,
  isDeleteMode: PropTypes.number.isRequired,
  newTaskInput: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyDown: PropTypes.func.isRequired,
  handleOutsideClick: PropTypes.func.isRequired,
};

export default TaskList;
