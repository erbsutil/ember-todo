import Controller from '@ember/controller';

export default class TasksController extends Controller {  
  save() {
    this.store.createRecord('task', {
        description: this.description,
        deadline: this.deadline
    }).save();
  }
  
  delete(task){
    task.deleteRecord();
    task.save();
  }
}
