<template>
    <div class="zl-form-container" @click="eventTarget">
        <el-form :model="form" ref="formRef">
            <slot name="top" />
            <div ref="formItemWarpRef">

            </div>
            <slot name="bottom" />
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        eventTarget(event) {
            this.$emit('eventTarget', event)
        }
    }
}
</script>

<style></style>