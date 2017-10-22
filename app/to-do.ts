class Task{
  done: boolean;
  description: string;
  priority: string;

  constructor(public descriptionParameter: string, priorityParameter: string){
    this.done = false;
  }
}

let tasks: Task[]=[];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
