<template>
  <div id="app">
    <Form :schema="schema" :formData="data">
      <!-- <template v-slot:top>这是人头部</template> -->
    </Form>
  </div>
</template>

<script>
import Form from './lib/form'

export default {
  name: 'App',
  components: {
    Form
  },
  data() {
    return {
      schema: [
        {
          type: 'input',
          label: '姓名',
          key: 'name'
        },
        {
          type: 'input',
          label: '年龄',
          key: 'age'
        }
      ],


      data: {
        name: 'zl',
        age: 25
      }
    }
  }
}
</script>

<style lang="less"></style>
