<template>
  <div id="app">
    <Form :schema="schema" :formData="data" ref="testRef" :rules="rules">
    </Form>

    <el-button @click="submit" type="primary">提交</el-button>
  </div>
</template>

<script>
import Form from "./lib/form";
import { schema } from "./App.config";

export default {
  name: "App",
  components: {
    Form,
  },
  data() {
    return {
      rules: {
        age: [{ required: true, message: "必须填写标题1" }],
      },
      schema,

      data: {
        name: "",
        age: 25,
        class: "",
        sex: "",
      },
    };
  },
  methods: {
    submit() {
      console.log(this.data);
      this.$refs.testRef
        .validateForm()
        .then((valid) => {
          console.log(valid);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less">
.el-form {
  // width: 800px;
  margin: 0 auto;
  .el-form-item {
  }
}
</style>
