<template>
  <div class="zl-form-container" @click="eventTarget">
    <el-form :model="formData" ref="formRef">
      <slot name="top" />

      <el-form-item
        v-for="col in formSchema"
        :label="col.label"
        :prop="col.key"
        :key="col.key"
      >
        <!-- 表单字段label插槽 -->
        <template #label>
          <slot :name="`${col.key}-label`" :col="col" />
        </template>

        <component
          :is="getColType(col.type)"
          :value="formData[col.key]"
          :col="col"
          :slots="$scopedSlots"
          @input="setValue(col, $event)"
        />
      </el-form-item>

      <slot name="bottom" />
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ZlForm",
  props: {
    // 表单项配置，若从后端获取需要传formId，且接口需要返回schema字段
    schema: {
      type: Array,
      default: () => [],
    },

    // 表单数据，需要与schema中key的值对应
    formData: null,

    formId: String,
  },
  data() {
    return {
      formSchema: [],
    };
  },
  created() {
    // console.log(this);
    if (this.schema.length > 0) {
      this.formSchema = this.schema;
    } else {
      // 请求接口，获取schema
    }
  },
  methods: {
    setValue(col, value) {
      this.formData[col.key] = value;
    },

    getColType(type) {
      const originTags = ["input"];
      if (originTags.includes(type)) {
        return `zl-form-${type}`;
      }
      return type;
    },

    eventTarget(event) {
      this.$emit("eventTarget", event);
    },
  },
};
</script>

<style></style>
