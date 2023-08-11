import { h } from "vue";

export const handleSlot = (vm) => {
  const { abbrName } = vm.$options
  const slotKeys = Object.keys(vm.slots).filter((item) => item.indexOf(vm.$options.abbrName) > -1);
  const _slotNames = slotKeys.map((item) => {
    const temps = item.split("-");
    return temps[temps.length - 1];
  });
  const slotNames = [...new Set(_slotNames)];
  return  slotNames.length > 0
    ? slotNames.map((item) => {
      const slotKey = `${vm.col.key}-${abbrName}-${item}`;
      const slotFn = vm.slots[slotKey];

      if (slotFn) {
        return <template slot={item}>{slotFn()}</template>;
      }
    })
    : null
}