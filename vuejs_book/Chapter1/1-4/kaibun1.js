var app = new Vue({
    el: '#app',
    data: {
        inStrVue: ''
    },
    methods: {
        kaibun: function() {
            // console.log(this.inStrVue);
            if (this.inStrVue.length == 0) return;
            var rStr = this.inStrVue.split('').reverse().join('');
            console.log(rStr);
            if (this.inStrVue == rStr) {
                return '回文です!';
            } else {
                return '回文ではありません';
            }
        }
    }
});
