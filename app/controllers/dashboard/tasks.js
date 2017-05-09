import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		triggerCompleted(task) {
			task.set('completed', !task.get('completed'));
			task.save().catch((error) => {});
		}
	}
});