const app = Vue.createApp({
    data(){
        return{
            output: '',
            pressedOutput: '',
        }
    },
    methods: {
        alert(){
            alert('Ouça Escombro na sua plataforma de streaming favorita')
        },
        setOutput(event){
            this.output = event.target.value; 
        },
        pressed(event){
            this.pressedOutput = event.target.value
        }
    }

})

app.mount('#assignment')