'use strict';
{
  var vm = new Vue({
    el: '#app',
    data: {
      newitem: "",
      // todos: [{
      //   title: 'task 1',
      //   isDone: false
      // }, {
      //   title: 'task 2',
      //   isDone: false
      // }, {
      //   title: 'task 3',
      //   isDone: true
      // }]
      todos: []
    },
    watch: {
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved!');
      // }
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Data saved!');
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newitem,
          isDone: false
        }
        this.todos.push(item);
        this.newitem = '';
      },
      deleteItem: function(index) {
        if (confirm('Are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if (!confirm('Delete finished?')) {
          return;
        }
        this.todos = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
}