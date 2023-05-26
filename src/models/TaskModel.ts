import { TaskState } from "./TaskState.ts";

export interface TaskModel {
    id: number;
    taskState: TaskState;
    content: string;
}