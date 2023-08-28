<template>
  <div class="zl-form-container" @click="eventTarget">
    <el-row :gutter="20">
      <el-form
        :model="formData"
        ref="formRef"
        :rules="formRules"
        label-position="top"
      >
        <slot name="top" />

        <el-col
          :span="getFormItemSpan(col)"
          v-for="col in formSchema"
          :key="col.key"
        >
          <el-form-item :label="col.label" :prop="col.key">
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
        </el-col>

        <slot name="bottom" />
      </el-form>
    </el-row>
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

    // 一行显示列数
    columCount: {
      type: Number,
      default: 3,
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
  mounted() {
    window.addEventListener("resize", (e) => {
      console.log(document.body.offsetWidth);
    });
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
    getFormItemSpan(col) {
      return col.type === "textarea" ? 24 : Math.ceil(24 / this.columCount);
    },
    setValue(col, value) {
      this.formData[col.key] = value;
    },

    getColType(type) {
      const originTags = ["input", "select", "radio", "textarea"];
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

<style lang="less" scoped>
.el-form {
  ::v-deep.el-form--label-top .el-form-item__label {
    padding: 0;
  }
}
</style>
