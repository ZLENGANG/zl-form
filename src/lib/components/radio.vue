<template>
  <el-radio-group
    v-model="newValue"
    @input="handleChange"
    v-bind="col.attrs"
    v-on="col.on"
  >
    <el-radio v-for="item in options" :key="item.value" :label="item.value">{{
      item.label
    }}</el-radio>
  </el-radio-group>
</template>

<script>
import formMixin from "../mixins/formMixins";
export default {
  name: "ZlFormRadio",
  abbrName: "radio",
  mixins: [formMixin],
  watch: {
    col: {
      handler(val) {
        this.getOptions();
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
