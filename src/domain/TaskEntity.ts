export class TaskEntity {
    public uuid: string;
    public taskDescription: string;
    public isCompleted: boolean;

    constructor(uuid: string, taskDescription: string, isCompleted: boolean) {
      this.uuid = uuid;
      this.taskDescription = taskDescription;
      this.isCompleted = isCompleted;
    }
}