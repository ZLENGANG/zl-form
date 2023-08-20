<template>
  <div id="app">
    <Form :schema="schema" :formData="data" ref="testRef" :rules="rules">
    </Form>

    <el-button @click="submit" type="primary">提交</el-button>
  </div>
</template>

<script>
import Form from "./lib/form";

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
      schema: [
        {
          type: "input",
          label: "姓名",
          key: "name",
          rules: {
            required: true,
            type: "string",
            message: "必须填写标题",
          },
          attrs: {
            placeholder: "placeholder",
            "show-word-limit": true,
            maxlength: 10,
            clearable: true,
          },
          on: {
            blur: (e) => {
              console.log(e.target.value, this.data.name);
            },
            clear() {
              console.log("clear");
            },
          },
        },
        {
          type: "input",
          label: "年龄",
          key: "age",
        },
        {
          type: "select",
          label: "班级",
          key: "class",
          required: true,
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          attrs: {
            clearable: true,
            placeholder: "请选择班级",
          },
          on: {
            clear() {
              console.log("清除");
            },
          },
        },
      ],

      data: {
        name: "",
        age: 25,
        class: "",
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

<style lang="less"></style>
