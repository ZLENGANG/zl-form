import Vue from 'vue'
import ZlForm from './form'
import ZlFormInput from './components/input'

const components = [
  ZlForm,
  ZlFormInput
]

components.forEach(component => {
  Vue.component(component.name, component)
})


ZlForm.install = function (Vue) {
  // console.log('zl');
}

export default ZlForm
