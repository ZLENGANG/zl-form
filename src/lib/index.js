import Vue from 'vue'
import ZlForm from './form'
import ZlFormInput from './components/input'
import ZlFormTextarea from './components/textarea'
import ZlFormSelect from './components/select'
import ZlFormRadio from './components/radio'

const components = [
  ZlForm,
  ZlFormInput,
  ZlFormTextarea,
  ZlFormSelect,
  ZlFormRadio
]

components.forEach(component => {
  Vue.component(component.name, component)
})


ZlForm.install = function (Vue) {
  // console.log('zl');
}

export default ZlForm
