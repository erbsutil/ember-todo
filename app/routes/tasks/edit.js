import Route from '@ember/routing/route';

export default class TasksEditRoute extends Route {
    model(params) {
        return this.store.find('task', params.id);
    }
    setupController(controller, model) {
        super.setupController(...arguments);
        controller.setProperties({task: model});
    }
}
