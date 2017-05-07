import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    submit(){
      let task = this.get('task');
      this.triggerSave(task);
    }
  }
});
