<template>
  <div id="app">
    <Form :schema="schema" :formData="data" ref="formRef">
      <template #name-label="{ col }">
        <span>{{ col.label }}666</span>
      </template>

      <template #name-input-append>
        <span>name-append</span>
      </template>

      <template #name-input-prepend>
        <span>name-prepend</span>
      </template>

      <template #name>
        <span>name-prepend111</span>
      </template>

      <template #age-input-append>
        <span>age-append</span>
      </template>

      <template #age-input-prepend>
        <span>age-prepend</span>
      </template>

      <template #class-select-empty>
        <span>select-prefix</span>
      </template>
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
      schema: [
        {
          type: "input",
          label: "姓名",
          key: "name",
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
          slots: {
            append: (h) => {
              return h("span", null, 666);
            },
            prepend: (h) => {
              return h("span", null, "prepend");
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
  created() {
    console.log(this);
  },
  methods: {
    submit() {
      console.log(this.data);
    },
  },
};
</script>

<style lang="less"></style>
