import { TrashIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const Task = ({ tasks, setTasks, isDeleteMode, index }) => {
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div key={index}>
      <li className="flex items-center justify-between">
        <label className="relative flex items-center p-1 rounded-full cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox min-h-6 min-w-6 h-6 w-6 cursor-pointer appearance-none rounded-full border border-gray-900/20 transition-all  checked:bg-blue-500 hover:scale-110"
            id="checkBox"
          />
        </label>
        <span id={`text${index}`} className="ml-2 flex-grow">
          {tasks[index]}
        </span>
        {isDeleteMode == index ? (
          <button
            className="min-w-6 max-w-6 text-gray-600"
            onClick={() => handleDeleteTask(index)}
          >
            <TrashIcon id="button-text"></TrashIcon>
          </button>
        ) : (
          <></>
        )}
      </li>
      <hr className="my-1 ml-10 border-t border-gray-300 border-dotted" />
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTasks: PropTypes.func.isRequired,
  isDeleteMode: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Task;
