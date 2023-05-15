const app = Vue.createApp({
    data() {
        return {
            nome: 'Igor Simões Fugiwara',
            idade: '29',
            imageLink: 'https://m.media-amazon.com/images/M/MV5BNzgxNzU5MjAtZDlmOC00NWMwLTk3OTgtNjA4N2Q0OTg2MTg3XkEyXkFqcGdeQXVyMTE3MjM1NDcw._V1_.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');
