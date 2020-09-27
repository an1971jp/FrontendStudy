let app = new Vue({
    el: '#app',
    data: {
        msg1: 'はじめてのVue.js！',
        msg2: 'Vue.js'
    },
    methods: {
        clicked: function() {
            this.msg1 = 'クリックしたねVue.js';
        }
    }
});