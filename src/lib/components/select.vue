<template>
  <el-select
    v-model="newValue"
    @input="handleChange"
    v-bind="col.attrs"
    v-on="col.on"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>

    <template v-for="(render, key) of compSlot" v-slot:[getSlotKey(key)]>
      <extend-slot :key="key" :render="render" />
    </template>
  </el-select>
</template>

<script>
import formMixin from "../mixins/formMixins";
export default {
  name: "ZlFormSelect",
  abbrName: "select",
  mixins: [formMixin],
  data() {
    return {
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
  },

  methods: {
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