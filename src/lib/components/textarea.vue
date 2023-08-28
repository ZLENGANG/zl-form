<template>
  <el-input
    v-model="newValue"
    type="textarea"
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
  name: "ZlFormTextarea",
  abbrName: "textarea",
  mixins: [formMixin],
};
</script>

<style lang="less" scoped>
</style>
