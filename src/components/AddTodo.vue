<template>
  <form @submit.prevent="onsubmit">
    <input type="text" v-model="title">
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  name: 'AddTodo',
  methods: {
    onsubmit () {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
  form{
    display: flex;
  }
  input {
    width: 400px;
  }
</style>
