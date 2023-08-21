import extendSlot from "@/lib/components/ExtendSlot";

export default {
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
            options: [],
        }
    },

    computed: {
        compSlot() {
            return this.col.slots || this.slots;
        },
    },

    watch: {
        value: {
            handler(val) {
                this.newValue = val;
            },
            immediate: true,
        },
    },

    methods: {
        handleChange(val) {
            this.$emit("input", val);
        },
        getSlotKey(key) {
            if (this.col.slots) return key;
            const [colName, compName, slotName] = key.split("-");
            if (colName === this.col.key && compName === this.$options.abbrName) {
                return slotName;
            }
        },
        getOptions() {
            const { options } = this.col;
            if (options instanceof Array) {
                this.options = options;
            }
        },
    }
}