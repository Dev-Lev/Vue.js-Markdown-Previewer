const vm = new Vue({
el: '#app',
data: {
    message: '',
},
computed: {
    output(){
      return marked(this.message)
    }
},
methods: {
    deleteMarkdown(){
    this.message = '';
    },
    addMarkdown(){
        this.$refs.textBox.focus()
    }
}
});