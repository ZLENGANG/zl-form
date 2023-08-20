<template>
  <div class="zl-form-container" @click="eventTarget">
    <el-form :model="formData" ref="formRef" :rules="formRules">
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
          :ref="col.key"
          :slots="$scopedSlots"
          @input="setValue(col, $event)"
        />
      </el-form-item>

      <slot name="bottom" />
    </el-form>
  </div>
</template>

<script>
import { tranToArray } from "@/lib/utils/util";
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

    rules: {
      type: Object,
      default: () => ({}),
    },
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
  computed: {
    formRules() {
      let resRules = {};
      this.formSchema.forEach((item) => {
        const rules = [
          ...tranToArray(item.rules),
          ...tranToArray(this.rules[item.key]),
        ];

        if (item.required) {
          rules.push({
            required: true,
            message: `${item.label}必填！`,
          });
        }

        resRules[item.key] = rules;
      });
      return resRules;
    },
  },
  methods: {
    setValue(col, value) {
      this.formData[col.key] = value;
    },

    getColType(type) {
      const originTags = ["input", "select"];
      if (originTags.includes(type)) {
        return `zl-form-${type}`;
      }
      return type;
    },

    eventTarget(event) {
      this.$emit("eventTarget", event);
    },

    validateForm() {
      return new Promise((resolve, reject) => {
        if (Object.keys(this.formRules).length > 0) {
          this.$refs.formRef.validate((valid, invalidFields) => {
            if (valid) {
              resolve();
            } else {
              // 显示错误
              reject(invalidFields);
            }
          });
        } else {
          resolve();
        }
      });
    },
  },
};
</script>

<style></style>
