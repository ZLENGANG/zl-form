<template>
  <el-input
    ref="el-input"
    v-model="newValue"
    v-bind="col.attrs"
    v-on="col.on"
    @input="handleChange"
  >
    <template v-for="(render, key) of compSlot" v-slot:[getSlotKey(key)]>
      <extend-slot :key="key" :render="render" />
    </template>
  </el-input>
</template>
<script>
import formMixin from "../mixins/formMixins";

export default {
  name: "ZlFormInput",
  abbrName: "input",
  mixins: [formMixin],
};
</script>

<style></style>
