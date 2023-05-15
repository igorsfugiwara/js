const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://entretenimento.uol.com.br/noticias/redacao/2019/06/10/show-de-hardcore-acaba-no-dp-apos-musica-contra-a-pm-vocalista-relata-ameacas.htm'
        }
    },
    methods: {
        outputGoal(){
         const randonNumber = Math.random();
         if(randonNumber <0.5){
            return 'Learn Vue!';
         }else{
            return 'Master Vue!'
         }
        }
    }
});

app.mount('#user-goal');