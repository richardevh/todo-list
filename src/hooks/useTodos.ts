import useStorage, { type Task, type TaskStatus } from "./useStorage";

const useTodos = () => {
  return useStorage();
};

export type { Task, TaskStatus };
export default useTodos;
