import PropTypes from "prop-types";
import { ListBulletIcon } from "@heroicons/react/24/solid";

const Task = ({ tasks }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">{tasks.length}</h1>
        <h2 className="text-blue-500 font-bold text-xl">To-Do List</h2>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-500 rounded-full w-14 h-12"></div>
        </div>
        <ListBulletIcon className=" relative w-12 h-8 stroke-black"></ListBulletIcon>
      </div>
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Task;
