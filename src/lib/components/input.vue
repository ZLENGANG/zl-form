<template>
  <el-input
    v-model="newValue"
    v-on:input="handleChange"
    v-bind="col.attrs"
    v-on="events"
    ref="el-input"
  >
    <template v-for="(render, key) of compSlot" v-slot:[getSlotKey(key)]>
      <extend-slot :key="key" :render="render" />
    </template>
  </el-input>
</template>
<script>
import extendSlot from "./ExtendSlot";
export default {
  name: "ZlFormInput",
  abbrName: "input",
  components: {
    extendSlot,
  },
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
      oldVal: null,
    };
  },
  computed: {
    events() {
      return {
        ...this.col.on,
        blur: () => {
          this.col.on?.blur(this.newValue, this.oldVal);
        },
      };
    },
    compSlot() {
      return this.col.slots || this.slots;
    },
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
  methods: {
    getSlotKey(key) {
      if (this.col.slots) return key;
      const [colName, compName, slotName] = key.split("-");
      if (colName === this.col.key && compName === this.$options.abbrName) {
        return slotName;
      }
    },
    handleChange(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style></style>
