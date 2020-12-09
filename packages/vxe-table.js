import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from './v-x-e-table'

import Radio from './radio'
import Input from './input'
import Button from './button'

import zhCN from './locale/lang/zh-CN'

// 按需加载的组件
const components = [
  // 模块

  Radio,
  Input,
  Button
]

// 默认安装
function install (Vue, options) {
  if (XEUtils.isPlainObject(options)) {
    VXETable.setup(options)
  }
  components.map(component => component.install(Vue))
}

// 默认中文
VXETable.setup({
  i18n: key => XEUtils.get(zhCN, key)
})

VXETable.install = install

if (typeof window !== 'undefined' && window.Vue && window.Vue.use) {
  window.Vue.use(VXETable)
}

export * from './v-x-e-table'
export * from './radio'
export * from './input'
export * from './button'


export default VXETable
