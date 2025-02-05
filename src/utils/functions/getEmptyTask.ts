/*** Returns an empty, fresh task of type taskType. ***/

import { v4 as uuidv4 } from "uuid";
import taskType from "../../types/taskType";

const getEmptyTask = (): taskType => {
  return {
    id: uuidv4(),
    name: "",
    category: "",
    description: "",
    priority: "none",
    isComplete: false,
  };
};

export default getEmptyTask;
