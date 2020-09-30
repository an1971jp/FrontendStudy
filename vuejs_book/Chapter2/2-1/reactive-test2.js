let app = new Vue({
    el: '#app',
    data: {
        msg1: 'こんにちは',
        msg2: '',
        msg3: '',
    }
});

// msg2プロパティに文字列を代入
app.msg2 = 'さようなら';

app.msg3 = 'また明日';
