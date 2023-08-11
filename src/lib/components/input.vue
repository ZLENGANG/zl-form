<script>
import { handleSlot } from "@/lib/utils/slot";
export default {
  name: "ZlFormInput",
  abbrName: "input",
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
    handleChange(val) {
      this.$emit("input", val);
    },
  },
  render(h) {
    console.log(this.col.attrs);
    return (
      <el-input
        v-model={this.newValue}
        v-on:input={this.handleChange}
        placeholder={this.col.attrs?.placeholder}
      >
        {handleSlot(this)}
      </el-input>
    );
  },
};
</script>

<style></style>
