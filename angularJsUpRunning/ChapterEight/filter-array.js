angular.module('filterArrayApp', [])
	.controller('filterArrayCtrl', [function() { 
			console.log('page loading');
			var self = this;
			this.notes = [
				{label: 'FC Todo', type: 'chore', done: false },
				{label: 'FT Todo', type: 'task', done: false },
				{label: 'FF Todo', type: 'fun', done: true },
				{label: 'CS Todo', type: 'chore_1', done: false },
				{label: 'ST Todo', type: 'task_1', done: true },
				{label: 'SF Todo', type: 'fun_1', done: true },
				{label: 'TC Todo', type: 'chore_2', done: false },
				{label: 'TT Todo', type: 'task_2', done: false },
				{label: 'TF Todo', type: 'fun_2', done: false },
				{label: 'RC Todo', type: 'RADIO', done: true }
			];
			this.sortOrder = [' +type', '-label'];
			this.filterOptions = {
				"string": '',
				"object": {done: false, label: 'C'},
				"function": function(note) {
					return (note.type === 'task' || note.type === 'task_1' || note.type === 'task_2') && note.done === false;
				}
			};
			this.currentFilter = 'string';
   		    console.log('loaded');
}]);