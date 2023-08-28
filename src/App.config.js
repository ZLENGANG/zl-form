export const schema = [
  {
    type: "input",
    label: "姓名",
    key: "name",
    rules: {
      required: true,
      type: "string",
      message: "必须填写标题",
    },
    attrs: {
      placeholder: "placeholder",
      "show-word-limit": true,
      maxlength: 10,
      clearable: true,
    },
    on: {
      blur: (e) => {
        console.log(e.target.value, this.data.name);
      },
      clear() {
        console.log("clear");
      },
    },
  },

  {
    type: "input",
    label: "年龄ss",
    key: "age11",
  },
  {
    type: "input",
    label: "年龄1",
    key: "age1",
  },
  {
    type: "input",
    label: "年龄2",
    key: "age2",
  },
  {
    type: "input",
    label: "年龄3",
    key: "age3",
  },
  {
    type: "input",
    label: "年龄4",
    key: "age4",
  },
  {
    type: "input",
    label: "年龄5",
    key: "age5",
  },
  {
    type: "input",
    label: "年龄6",
    key: "age6",
  },
  {
    type: "select",
    label: "班级",
    key: "class",
    required: true,
    options: [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ],
    attrs: {
      clearable: true,
      placeholder: "请选择班级",
    },
    on: {
      clear() {
        console.log("清除");
      },
    },
  },
  {
    type: "radio",
    label: "性别",
    key: "sex",
    required: true,
    options: [
      { label: "男", value: 0 },
      { label: "女", value: 1 },
    ],
  },
  {
    type: "textarea",
    label: "年龄",
    key: "age",
  },
]