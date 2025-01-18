// The type for a task
type taskType = {
  id: string;
  name: string;
  category: string;
  description: string;
  priority: 0 | 1 | 2 | 3; // 1 is lowest priority, 3 is highest priority
  isComplete: boolean;
};

export default taskType;
