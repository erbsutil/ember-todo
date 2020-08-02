import Route from '@ember/routing/route';
import EmberResolver from 'ember-resolver';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll('task');
  },

  actions: {
    save(description, deadline) {
      this.get('store').createRecord('task', {
        description,
        deadline
      }).save();
    },
    delete(task) {
      task.deleteRecord();
      task.save();
    },
    toggleTask(task) {
      let isDone = task.get('isDone');
      task.set('isDone', !isDone);
      task.save();
    }
  }
});
