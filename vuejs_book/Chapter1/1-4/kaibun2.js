let app = new Vue({
    el: '#app',
    data: {
        inStr: ''
    },
    methods: {
        kaibun: function() {
            if (this.inStr.length == 0) return;
            console.log('inStr');
            var rStr = this.inStr.split('').reverse().join('');
            if (this.inStr == rStr) {
                return '回文です!';
            } else {
                return '回文ではありません';
            }
        }
    }
});
