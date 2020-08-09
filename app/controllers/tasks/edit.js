import Controller from '@ember/controller';

export default class TasksEditController extends Controller {
    saveEdit() {        
        this.model.setProperties({
            description: this.description,
            deadline: this.deadline
        });
        this.model.save();
    }
}
