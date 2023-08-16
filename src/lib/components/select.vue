<template>
  <el-select v-model="newValue" placeholder="请选择" @input="handleChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "ZlFormSelect",
  abbrName: "select",
  props: {
    value: null,
    col: {
      type: Object,
      default: () => ({}),
    },
    slots: null,
  },
  data() {
    return {
      newValue: null,
      options: [],
    };
  },
  watch: {
    col: {
      handler(val) {
        this.getOptions();
      },
      immediate: true,
    },
    value: {
      handler(val) {
        this.newValue = val;
      },
      immediate: true,
    },
  },
  methods: {
    handleChange(val) {
      this.$emit("input", val);
    },
    getOptions() {
      const { options } = this.col;
      if (options instanceof Array) {
        this.options = options;
      }
    },
  },
};
</script>

<style>
</style>