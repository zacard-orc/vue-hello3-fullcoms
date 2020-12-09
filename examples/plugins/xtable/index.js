import Vue from 'vue'
import i18n from '@/i18n'

import {
  VXETable,
  Radio,
  Button
} from '../../../packages/vxe-table'

// import VXETablePluginElement from '../../../../vxe-table-plugin-element/test.js'
// import VXETablePluginIView from '../../../../vxe-table-plugin-iview/test.js'
// import VXETablePluginAntd from '../../../../vxe-table-plugin-antd/test.js'
// import VXETablePluginExcel from '../../../../vxe-table-plugin-excel/test.js'
// import VXETablePluginRenderer from '../../../../vxe-table-plugin-renderer/test.js'
// import VXETablePluginMenus from '../../../../vxe-table-plugin-menus/test.js'
// import VXETablePluginCharts from '../../../../vxe-table-plugin-charts/test.js'
// import VXETablePluginShortcutKey from '../../../../vxe-table-plugin-shortcut-key/test.js'
// import VXETablePluginElement from 'vxe-table-plugin-element'
// import VXETablePluginIView from 'vxe-table-plugin-iview'
// import VXETablePluginAntd from 'vxe-table-plugin-antd'
// import VXETablePluginExcel from 'vxe-table-plugin-excel'
// import VXETablePluginRenderer from 'vxe-table-plugin-renderer'
// import VXETablePluginVirtualTree from 'vxe-table-plugin-virtual-tree'
// import VXETablePluginMenus from 'vxe-table-plugin-menus'
// import VXETablePluginCharts from 'vxe-table-plugin-charts'
// import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
// import VXETablePluginExportPDF from 'vxe-table-plugin-export-pdf'
// import VXETablePluginShortcutKey from 'vxe-table-plugin-shortcut-key'
// import 'vxe-table-plugin-element/dist/style.css'
// import 'vxe-table-plugin-iview/dist/style.css'
// import 'vxe-table-plugin-antd/dist/style.css'
// import 'vxe-table-plugin-excel/dist/style.css'
// import 'vxe-table-plugin-virtual-tree/dist/style.css'
// import 'vxe-table-plugin-renderer/dist/style.css'
// import 'vxe-table-plugin-charts/dist/style.css'

// 设置默认参数
VXETable.setup({
  table: {
    exportConfig: {
      types: ['csv', 'html', 'xml', 'txt']
    }
  },
  translate: key => key && key.indexOf('app.') > -1 ? i18n.t(key) : key, // 自动翻译以 app. 开头的键值
  i18n: key => i18n.t(key)
})

// 先安装依赖模块
Vue.use(Radio)
Vue.use(Button)

// 再安装核心

// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

// VXETable.use(VXETablePluginShortcutKey, {
//   disabled: ['ArrowLeft'],
//   listener: {
//     'V' (params, evnt) {
//       console.log('粘贴')
//     },
//     'Shift + V' (params, evnt) {
//       console.log('粘贴')
//     },
//     'Ctrl + V' (params, evnt) {
//       console.log('粘贴')
//     },
//     'C' (params, evnt) {
//       console.log('粘贴')
//     }
//   },
//   setting: {
//     'table.edit.actived': 'F2',
//     'table.edit.closed': 'Esc',
//     'table.edit.leftTabMove': 'Shift + Enter',
//     'table.edit.rightTabMove': 'Enter',
//     'table.cell.upMove': 'W',
//     'table.cell.downMove': 'S',
//     'table.cell.leftMove': 'A',
//     'table.cell.rightMove': 'D',
//     'table.row.current.topMove': 'Shift + W',
//     'table.row.current.downMove': 'Shift + S',
//     'pager.prevPage': 'ArrowLeft',
//     'pager.nextPage': 'ArrowRight', // 单个按键
//     'pager.prevJump': 'Ctrl + A',
//     'pager.nextJump': 'Ctrl + D' // 组合键
//   }
// })
