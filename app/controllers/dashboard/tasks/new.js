import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(task) {
			let newTask = task;
			newTask.save().catch((error) => {}).then(() =>{
				this.transitionToRoute('dashboard.tasks')
			})
		}
	}
});