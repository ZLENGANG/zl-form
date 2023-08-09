<template>
  <el-input v-model="newValue"></el-input>
</template>

<script>
export default {
  name: "ZlFormInput",
  props: {
    value: null,
    col: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      newValue: null,
      oldVal: null,
    };
  },
  watch: {
    value: {
      handler(val, oVal) {
        this.newValue = val;
        this.oldVal = oVal;
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
