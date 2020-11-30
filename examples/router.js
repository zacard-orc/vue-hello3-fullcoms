import Vue from 'vue'
import Router from 'vue-router'

import StartInstall from './views/table/start/Install.vue'

import TableTreeHighlight from './views/table/tree/Highlight.vue'
import TableTreeHighlightImp from './views/table/tree/HighlightImp.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: {
        name: 'StartInstall'
      }
    },
    {
      path: '/',
      redirect: {
        name: 'StartInstall'
      }
    },
    {
      path: '/table/start/install',
      name: 'StartInstall',
      component: StartInstall
    },
    // {
    //   path: '/table/start/use',
    //   name: 'StartUse',
    //   component: StartUse
    // },
    // {
    //   path: '/table/start/global',
    //   name: 'StartGlobal',
    //   component: StartGlobal
    // },
    // {
    //   path: '/table/start/icons',
    //   name: 'StartIcons',
    //   component: StartIcons
    // },
    // {
    //   path: '/table/start/theme',
    //   name: 'StartTheme',
    //   component: StartTheme
    // },
    // {
    //   path: '/table/start/i18n',
    //   name: 'StartI18n',
    //   component: StartI18n
    // },
    // {
    //   path: '/table/renderer/api',
    //   name: 'RendererAPI',
    //   component: RendererAPI
    // },
    // {
    //   path: '/table/renderer/filter',
    //   name: 'RendererFilter',
    //   component: RendererFilter
    // },
    // {
    //   path: '/table/renderer/default',
    //   name: 'RendererDefault',
    //   component: RendererDefault
    // },
    // {
    //   path: '/table/renderer/edit',
    //   name: 'RendererEdit',
    //   component: RendererEdit
    // },
    // {
    //   path: '/table/renderer/expand',
    //   name: 'RendererExpand',
    //   component: RendererExpand
    // },
    // {
    //   path: '/table/renderer/toolbar',
    //   name: 'RendererToolbar',
    //   component: RendererToolbar
    // },
    // {
    //   path: '/table/renderer/form',
    //   name: 'RendererForm',
    //   component: RendererForm
    // },
    // {
    //   path: '/table/renderer/empty',
    //   name: 'RendererEmpty',
    //   component: RendererEmpty
    // },
    // {
    //   path: '/table/formats/api',
    //   name: 'FormatsAPI',
    //   component: FormatsAPI
    // },
    // {
    //   path: '/table/commands/api',
    //   name: 'CommandsAPI',
    //   component: CommandsAPI
    // },
    // {
    //   path: '/table/menus/api',
    //   name: 'MenusAPI',
    //   component: MenusAPI
    // },
    // {
    //   path: '/table/interceptor/api',
    //   name: 'InterceptorAPI',
    //   component: InterceptorAPI
    // },
    // {
    //   path: '/table/base/basic',
    //   name: 'TableBasic',
    //   component: TableBasic
    // },
    // {
    //   path: '/table/base/size',
    //   name: 'TableSize',
    //   component: TableSize
    // },
    // {
    //   path: '/table/base/width',
    //   name: 'TableWidth',
    //   component: TableWidth
    // },
    // {
    //   path: '/table/base/overflow',
    //   name: 'TableOverflow',
    //   component: TableOverflow
    // },
    // {
    //   path: '/table/base/tooltip',
    //   name: 'TableTooltip',
    //   component: TableTooltip
    // },
    // {
    //   path: '/table/base/stripe',
    //   name: 'TableStripe',
    //   component: TableStripe
    // },
    // {
    //   path: '/table/base/border',
    //   name: 'TableBorder',
    //   component: TableBorder
    // },
    // {
    //   path: '/table/base/round',
    //   name: 'TableRound',
    //   component: TableRound
    // },
    // {
    //   path: '/table/base/dynamicStyle',
    //   name: 'TableDynamicStyle',
    //   component: TableDynamicStyle
    // },
    // {
    //   path: '/table/base/style',
    //   name: 'TableStyle',
    //   component: TableStyle
    // },
    // {
    //   path: '/table/base/scrollStyle',
    //   name: 'TableScrollStyle',
    //   component: TableScrollStyle
    // },
    // {
    //   path: '/table/base/header',
    //   name: 'TableHeader',
    //   component: TableHeader
    // },
    // {
    //   path: '/table/base/highlight',
    //   name: 'TableHeaderHighlight',
    //   component: TableHeaderHighlight
    // },
    // {
    //   path: '/table/base/resizable',
    //   name: 'TableResizable',
    //   component: TableResizable
    // },
    // {
    //   path: '/table/base/maxHeight',
    //   name: 'TableMaxHeight',
    //   component: TableMaxHeight
    // },
    // {
    //   path: '/table/base/height',
    //   name: 'TableHeight',
    //   component: TableHeight
    // },
    // {
    //   path: '/table/base/autoHeight',
    //   name: 'TableAutoHeight',
    //   component: TableAutoHeight
    // },
    // {
    //   path: '/table/base/fixed',
    //   name: 'TableFixed',
    //   component: TableFixed
    // },
    // {
    //   path: '/table/base/fixedFull',
    //   name: 'TableFixedFull',
    //   component: TableFixedFull
    // },
    // {
    //   path: '/table/base/group',
    //   name: 'TableGroup',
    //   component: TableGroup
    // },
    // {
    //   path: '/table/base/seq',
    //   name: 'TableSeq',
    //   component: TableSeq
    // },
    // {
    //   path: '/table/base/current',
    //   name: 'TableCurrent',
    //   component: TableCurrent
    // },
    // {
    //   path: '/table/base/radio',
    //   name: 'TableRadio',
    //   component: TableRadio
    // },
    // {
    //   path: '/table/base/selection',
    //   name: 'TableSelection',
    //   component: TableSelection
    // },
    // {
    //   path: '/table/base/sort',
    //   name: 'TableSort',
    //   component: TableSort
    // },
    // {
    //   path: '/table/base/filter',
    //   name: 'TableFilter',
    //   component: TableFilter
    // },
    // {
    //   path: '/table/base/empty',
    //   name: 'TableEmpty',
    //   component: TableEmpty
    // },
    // {
    //   path: '/table/base/loading',
    //   name: 'TableLoading',
    //   component: TableLoading
    // },
    // {
    //   path: '/table/base/format',
    //   name: 'TableFormat',
    //   component: TableFormat
    // },
    // {
    //   path: '/table/base/data',
    //   name: 'TableData',
    //   component: TableData
    // },
    // {
    //   path: '/table/base/html',
    //   name: 'TableHTML',
    //   component: TableHTML
    // },
    // {
    //   path: '/table/base/full',
    //   name: 'TableFull',
    //   component: TableFull
    // },
    // {
    //   path: '/table/advanced/event',
    //   name: 'TableEvent',
    //   component: TableEvent
    // },
    // {
    //   path: '/table/advanced/template',
    //   name: 'TableTemplate',
    //   component: TableTemplate
    // },
    // {
    //   path: '/table/advanced/dynamic',
    //   name: 'TableDynamic',
    //   component: TableDynamic
    // },
    // {
    //   path: '/table/advanced/sortIcon',
    //   name: 'TableSortIcon',
    //   component: TableSortIcon
    // },
    // {
    //   path: '/table/advanced/customSort',
    //   name: 'TableCustomSort',
    //   component: TableCustomSort
    // },
    // {
    //   path: '/table/advanced/manualFilter',
    //   name: 'TableManualFilter',
    //   component: TableManualFilter
    // },
    // {
    //   path: '/table/advanced/filterIcon',
    //   name: 'TableFilterIcon',
    //   component: TableFilterIcon
    // },
    // {
    //   path: '/table/advanced/span',
    //   name: 'TableSpan',
    //   component: TableSpan
    // },
    // {
    //   path: '/table/advanced/spanRow',
    //   name: 'TableSpanRow',
    //   component: TableSpanRow
    // },
    // {
    //   path: '/table/advanced/mergeCell',
    //   name: 'TableMergeCell',
    //   component: TableMergeCell
    // },
    // {
    //   path: '/table/advanced/footer',
    //   name: 'TableFooter',
    //   component: TableFooter
    // },
    // {
    //   path: '/table/advanced/footerSpan',
    //   name: 'TableFooterSpan',
    //   component: TableFooterSpan
    // },
    // {
    //   path: '/table/advanced/footerMaxHeight',
    //   name: 'TableFooterMaxHeight',
    //   component: TableFooterMaxHeight
    // },
    // {
    //   path: '/table/advanced/import',
    //   name: 'TableImport',
    //   component: TableImport
    // },
    // {
    //   path: '/table/advanced/export',
    //   name: 'TableExport',
    //   component: TableExport
    // },
    // {
    //   path: '/table/advanced/print',
    //   name: 'TablePrint',
    //   component: TablePrint
    // },
    // {
    //   path: '/table/advanced/fixedType',
    //   name: 'TableFixedType',
    //   component: TableFixedType
    // },
    // {
    //   path: '/table/advanced/menu',
    //   name: 'TableMenu',
    //   component: TableMenu
    // },
    // {
    //   path: '/table/advanced/menuPrivilege',
    //   name: 'TableMenuPrivilege',
    //   component: TableMenuPrivilege
    // },
    // {
    //   path: '/table/advanced/expand',
    //   name: 'TableExpand',
    //   component: TableExpand
    // },
    // {
    //   path: '/table/advanced/expandIcon',
    //   name: 'TableExpandIcon',
    //   component: TableExpandIcon
    // },
    // {
    //   path: '/table/advanced/expandLazy',
    //   name: 'TableExpandLazy',
    //   component: TableExpandLazy
    // },
    // {
    //   path: '/table/advanced/expandAccordion',
    //   name: 'TableExpandAccordion',
    //   component: TableExpandAccordion
    // },
    // {
    //   path: '/table/advanced/search',
    //   name: 'TableSearch',
    //   component: TableSearch
    // },
    // {
    //   path: '/table/advanced/groupBy',
    //   name: 'TableGroupBy',
    //   component: TableGroupBy
    // },
    // {
    //   path: '/table/advanced/details',
    //   name: 'TableDetails',
    //   component: TableDetails
    // },
    // {
    //   path: '/table/advanced/popupEdit',
    //   name: 'TablePopupEdit',
    //   component: TablePopupEdit
    // },
    // {
    //   path: '/table/advanced/toolbar',
    //   name: 'Toolbar',
    //   component: Toolbar
    // },
    // {
    //   path: '/table/advanced/custom',
    //   name: 'TableCustom',
    //   component: TableCustom
    // },
    // {
    //   path: '/table/advanced/customStorage',
    //   name: 'TableCustomStorage',
    //   component: TableCustomStorage
    // },
    // {
    //   path: '/table/advanced/customlWidthStorage',
    //   name: 'TableCustomlWidthStorage',
    //   component: TableCustomlWidthStorage
    // },
    // {
    //   path: '/table/advanced/form',
    //   name: 'TableForm',
    //   component: TableForm
    // },
    // {
    //   path: '/table/advanced/page',
    //   name: 'TablePage',
    //   component: TablePage
    // },
    // {
    //   path: '/table/advanced/pageIcon',
    //   name: 'TablePageIcon',
    //   component: TablePageIcon
    // },
    // {
    //   path: '/table/advanced/highlight',
    //   name: 'TableHighlight',
    //   component: TableHighlight
    // },
    // {
    //   path: '/table/advanced/rangeSelect',
    //   name: 'TableRangeSelect',
    //   component: TableRangeSelect
    // },
    // {
    //   path: '/table/advanced/tabs',
    //   name: 'TableTabs',
    //   component: TableTabs
    // },
    // {
    //   path: '/table/advanced/keepAlives',
    //   component: TableKeepAlives,
    //   children: [
    //     {
    //       path: 'table1',
    //       name: 'TableKeepAliveTable1',
    //       component: TableKeepAliveTable1
    //     },
    //     {
    //       path: 'table2',
    //       name: 'TableKeepAliveTable2',
    //       component: TableKeepAliveTable2
    //     },
    //     {
    //       path: 'table3',
    //       name: 'TableKeepAliveTable3',
    //       component: TableKeepAliveTable3
    //     }
    //   ]
    // },
    // {
    //   path: '/table/tree/basic',
    //   name: 'TableTreeBasic',
    //   component: TableTreeBasic
    // },
    // {
    //   path: '/table/tree/normal',
    //   name: 'TableTreeNormal',
    //   component: TableTreeNormal
    // },
    // {
    //   path: '/table/tree/treeIcon',
    //   name: 'TableTreeIcon',
    //   component: TableTreeIcon
    // },
    // {
    //   path: '/table/tree/accordion',
    //   name: 'TableTreeAccordion',
    //   component: TableTreeAccordion
    // },
    // {
    //   path: '/table/tree/selection',
    //   name: 'TableTreeSelection',
    //   component: TableTreeSelection
    // },
    // {
    //   path: '/table/tree/radio',
    //   name: 'TableTreeRadio',
    //   component: TableTreeRadio
    // },
    // {
    //   path: '/table/tree/fixed',
    //   name: 'TableTreeFixed',
    //   component: TableTreeFixed
    // },
    // {
    //   path: '/table/tree/maxHeight',
    //   name: 'TableTreeMaxHeight',
    //   component: TableTreeMaxHeight
    // },
    // {
    //   path: '/table/tree/filter',
    //   name: 'TableTreeFilter',
    //   component: TableTreeFilter
    // },
    // {
    //   path: '/table/tree/sort',
    //   name: 'TableTreeSort',
    //   component: TableTreeSort
    // },
    // {
    //   path: '/table/tree/groupSummary',
    //   name: 'TableTreeGroupSummary',
    //   component: TableTreeGroupSummary
    // },
    // {
    //   path: '/table/tree/groupSummaryCount',
    //   name: 'TableTreeGroupSummaryCount',
    //   component: TableTreeGroupSummaryCount
    // },
    // {
    //   path: '/table/tree/expand',
    //   name: 'TableTreeExpand',
    //   component: TableTreeExpand
    // },
    // {
    //   path: '/table/tree/expandLazy',
    //   name: 'TableTreeExpandLazy',
    //   component: TableTreeExpandLazy
    // },
    // {
    //   path: '/table/tree/toolbar',
    //   name: 'TableTreeToolbar',
    //   component: TableTreeToolbar
    // },
    // {
    //   path: '/table/tree/insert',
    //   name: 'TableTreeInsert',
    //   component: TableTreeInsert
    // },
    // {
    //   path: '/table/tree/menu',
    //   name: 'TableTreeMenu',
    //   component: TableTreeMenu
    // },
    // {
    //   path: '/table/tree/span',
    //   name: 'TableTreeSpan',
    //   component: TableTreeSpan
    // },
    {
      path: '/table/tree/highlight',
      name: 'TableTreeHighlight',
      component: TableTreeHighlight
    },
    {
      path: '/table/tree/highlightImp',
      name: 'TableTreeHighlightImp',
      component: TableTreeHighlightImp
    }
    // {
    //   path: '/table/tree/highlightImp',
    //   name: 'TableTreeHighlightImp',
    //   component: TableTreeHighlightImp
    // },
    // {
    //   path: '/table/tree/keyboard',
    //   name: 'TableTreeKeyboard',
    //   component: TableTreeKeyboard
    // },
    // {
    //   path: '/table/tree/lazy',
    //   name: 'TableTreeLazy',
    //   component: TableTreeLazy
    // },
    // {
    //   path: '/table/tree/lazyMenu',
    //   name: 'TableTreeLazyMenu',
    //   component: TableTreeLazyMenu
    // },
    // {
    //   path: '/table/tree/lazyEdit',
    //   name: 'TableTreeLazyEdit',
    //   component: TableTreeLazyEdit
    // },
    // {
    //   path: '/table/tree/line',
    //   name: 'TableTreeLine',
    //   component: TableTreeLine
    // },
    // {
    //   path: '/table/tree/edit',
    //   name: 'TableTreeEdit',
    //   component: TableTreeEdit
    // },
    // {
    //   path: '/table/tree/editCellValid',
    //   name: 'TableTreeEditCellValid',
    //   component: TableTreeEditCellValid
    // },
    // {
    //   path: '/table/tree/editRowValid',
    //   name: 'TableTreeEditRowValid',
    //   component: TableTreeEditRowValid
    // },
    // {
    //   path: '/table/tree/editForceCellValid',
    //   name: 'TableTreeEditForceCellValid',
    //   component: TableTreeEditForceCellValid
    // },
    // {
    //   path: '/table/tree/editForceRowValid',
    //   name: 'TableTreeEditForceRowValid',
    //   component: TableTreeEditForceRowValid
    // },
    // {
    //   path: '/table/tree/template',
    //   name: 'TableTreeTemplate',
    //   component: TableTreeTemplate
    // },
    // {
    //   path: '/table/virtualTree/basic',
    //   name: 'TableVirtualTreeBasic',
    //   component: TableVirtualTreeBasic
    // },
    // {
    //   path: '/table/virtualTree/normal',
    //   name: 'TableVirtualTreeNormal',
    //   component: TableVirtualTreeNormal
    // },
    // {
    //   path: '/table/virtualTree/radio',
    //   name: 'TableVirtualTreeRadio',
    //   component: TableVirtualTreeRadio
    // },
    // {
    //   path: '/table/virtualTree/checkbox',
    //   name: 'TableVirtualTreeCheckbox',
    //   component: TableVirtualTreeCheckbox
    // },
    // {
    //   path: '/table/virtualTree/icon',
    //   name: 'TableVirtualTreeIcon',
    //   component: TableVirtualTreeIcon
    // },
    // {
    //   path: '/table/virtualTree/fixed',
    //   name: 'TableVirtualTreeFixed',
    //   component: TableVirtualTreeFixed
    // },
    // {
    //   path: '/table/virtualTree/maxHeight',
    //   name: 'TableVirtualTreeMaxHeight',
    //   component: TableVirtualTreeMaxHeight
    // },
    // {
    //   path: '/table/virtualTree/edit',
    //   name: 'TableVirtualTreeEdit',
    //   component: TableVirtualTreeEdit
    // },
    // {
    //   path: '/table/virtualTree/insert',
    //   name: 'TableVirtualTreeInsert',
    //   component: TableVirtualTreeInsert
    // },
    // {
    //   path: '/table/virtualTree/remove',
    //   name: 'TableVirtualTreeRemove',
    //   component: TableVirtualTreeRemove
    // },
    // {
    //   path: '/table/virtualTree/menu',
    //   name: 'TableVirtualTreeMenu',
    //   component: TableVirtualTreeMenu
    // },
    // {
    //   path: '/table/virtualTree/template',
    //   name: 'TableVirtualTreeTemplate',
    //   component: TableVirtualTreeTemplate
    // },
    // {
    //   path: '/table/virtualTree/big',
    //   name: 'TableVirtualTreeBig',
    //   component: TableVirtualTreeBig
    // },
    // {
    //   path: '/table/grid/basic',
    //   name: 'GridBasic',
    //   component: GridBasic
    // },
    // {
    //   path: '/table/grid/group',
    //   name: 'GridGroup',
    //   component: GridGroup
    // },
    // {
    //   path: '/table/grid/reverse',
    //   name: 'GridReverse',
    //   component: GridReverse
    // },
    // {
    //   path: '/table/grid/template',
    //   name: 'GridTemplate',
    //   component: GridTemplate
    // },
    // {
    //   path: '/table/grid/footer',
    //   name: 'GridFooter',
    //   component: GridFooter
    // },
    // {
    //   path: '/table/grid/page',
    //   name: 'GridPage',
    //   component: GridPage
    // },
    // {
    //   path: '/table/grid/proxy',
    //   name: 'GridProxy',
    //   component: GridProxy
    // },
    // {
    //   path: '/table/grid/pageProxy',
    //   name: 'GridPageProxy',
    //   component: GridPageProxy
    // },
    // {
    //   path: '/table/grid/configProxy',
    //   name: 'GridConfigProxy',
    //   component: GridConfigProxy
    // },
    // {
    //   path: '/table/grid/edit',
    //   name: 'GridEdit',
    //   component: GridEdit
    // },
    // {
    //   path: '/table/grid/cellDisable',
    //   name: 'GridCellDisable',
    //   component: GridCellDisable
    // },
    // {
    //   path: '/table/grid/rowDisable',
    //   name: 'GridRowDisable',
    //   component: GridRowDisable
    // },
    // {
    //   path: '/table/grid/form',
    //   name: 'GridForm',
    //   component: GridForm
    // },
    // {
    //   path: '/table/grid/formProxy',
    //   name: 'GridFormProxy',
    //   component: GridFormProxy
    // },
    // {
    //   path: '/table/grid/toolbar',
    //   name: 'GridToolbar',
    //   component: GridToolbar
    // },
    // {
    //   path: '/table/grid/customToolbar',
    //   name: 'GridCustomToolbar',
    //   component: GridCustomToolbar
    // },
    // {
    //   path: '/table/grid/toolbarIcon',
    //   name: 'GridToolbarIcon',
    //   component: GridToolbarIcon
    // },
    // {
    //   path: '/table/grid/fullscreen',
    //   name: 'GridFullscreen',
    //   component: GridFullscreen
    // },
    // {
    //   path: '/table/grid/dynamic',
    //   name: 'GridDynamic',
    //   component: GridDynamic
    // },
    // {
    //   path: '/table/grid/menu',
    //   name: 'GridMenu',
    //   component: GridMenu
    // },
    // {
    //   path: '/table/grid/span',
    //   name: 'GridSpan',
    //   component: GridSpan
    // },
    // {
    //   path: '/table/grid/upload',
    //   name: 'GridUpload',
    //   component: GridUpload
    // },
    // {
    //   path: '/table/grid/tree',
    //   name: 'GridTree',
    //   component: GridTree
    // },
    // {
    //   path: '/table/grid/treeLazy',
    //   name: 'GridTreeLazy',
    //   component: GridTreeLazy
    // },
    // {
    //   path: '/table/grid/treeLazyEdit',
    //   name: 'GridTreeLazyEdit',
    //   component: GridTreeLazyEdit
    // },
    // {
    //   path: '/table/grid/treeEdit',
    //   name: 'GridTreeEdit',
    //   component: GridTreeEdit
    // },
    // {
    //   path: '/table/grid/fullEdit',
    //   name: 'GridFullEdit',
    //   component: GridFullEdit
    // },
    // {
    //   path: '/table/grid/fullQuery',
    //   name: 'GridFullQuery',
    //   component: GridFullQuery
    // },
    // {
    //   path: '/table/scroll/scroll',
    //   name: 'TableScroll',
    //   component: TableScroll
    // },
    // {
    //   path: '/table/scroll/rows',
    //   name: 'TableScrollRows',
    //   component: TableScrollRows
    // },
    // {
    //   path: '/table/scroll/fullRows',
    //   name: 'TableScrollFullRows',
    //   component: TableScrollFullRows
    // },
    // {
    //   path: '/table/scroll/cols',
    //   name: 'TableScrollCols',
    //   component: TableScrollCols
    // },
    // {
    //   path: '/table/scroll/fullCols',
    //   name: 'TableScrollFullCols',
    //   component: TableScrollFullCols
    // },
    // {
    //   path: '/table/scroll/highlight',
    //   name: 'TableScrollHighlight',
    //   component: TableScrollHighlight
    // },
    // {
    //   path: '/table/scroll/maxHeight',
    //   name: 'TableScrollMaxHeight',
    //   component: TableScrollMaxHeight
    // },
    // {
    //   path: '/table/scroll/group',
    //   name: 'TableScrollGroup',
    //   component: TableScrollGroup
    // },
    // {
    //   path: '/table/scroll/keyboard',
    //   name: 'TableScrollKeyboard',
    //   component: TableScrollKeyboard
    // },
    // {
    //   path: '/table/scroll/edit',
    //   name: 'TableScrollEdit',
    //   component: TableScrollEdit
    // },
    // {
    //   path: '/table/scroll/cellValid',
    //   name: 'TableScrollCellValid',
    //   component: TableScrollCellValid
    // },
    // {
    //   path: '/table/scroll/rowValid',
    //   name: 'TableScrollRowValid',
    //   component: TableScrollRowValid
    // },
    // {
    //   path: '/table/scroll/forceCellValid',
    //   name: 'TableScrollForceCellValid',
    //   component: TableScrollForceCellValid
    // },
    // {
    //   path: '/table/scroll/forceRowValid',
    //   name: 'TableScrollForceRowValid',
    //   component: TableScrollForceRowValid
    // },
    // {
    //   path: '/table/scroll/partialLoad',
    //   name: 'TableScrollPartialLoad',
    //   component: TableScrollPartialLoad
    // },
    // {
    //   path: '/table/scroll/fullPartialLoad',
    //   name: 'TableScrollFullPartialLoad',
    //   component: TableScrollFullPartialLoad
    // },
    // {
    //   path: '/table/scroll/footer',
    //   name: 'TableScrollFooter',
    //   component: TableScrollFooter
    // },
    // {
    //   path: '/table/scroll/template',
    //   name: 'TableScrollTemplate',
    //   component: TableScrollTemplate
    // },
    // {
    //   path: '/table/scroll/tabs',
    //   name: 'TableScrollTabs',
    //   component: TableScrollTabs
    // },
    // {
    //   path: '/table/scroll/keepAlives',
    //   component: TableScrollKeepAlives,
    //   children: [
    //     {
    //       path: 'table1',
    //       name: 'TableScrollKeepAliveTable1',
    //       component: TableScrollKeepAliveTable1
    //     },
    //     {
    //       path: 'table2',
    //       name: 'TableScrollKeepAliveTable2',
    //       component: TableScrollKeepAliveTable2
    //     },
    //     {
    //       path: 'table3',
    //       name: 'TableScrollKeepAliveTable3',
    //       component: TableScrollKeepAliveTable3
    //     }
    //   ]
    // },
    // {
    //   path: '/table/edit/popupForm',
    //   name: 'TableEditPopupForm',
    //   component: TableEditPopupForm
    // },
    // {
    //   path: '/table/edit/manual',
    //   name: 'TableEditManual',
    //   component: TableEditManual
    // },
    // {
    //   path: '/table/edit/click',
    //   name: 'TableEditClick',
    //   component: TableEditClick
    // },
    // {
    //   path: '/table/edit/dblclick',
    //   name: 'TableEditDBLClick',
    //   component: TableEditDBLClick
    // },
    // {
    //   path: '/table/edit/select',
    //   name: 'TableEditSelect',
    //   component: TableEditSelect
    // },
    // {
    //   path: '/table/edit/autoClear',
    //   name: 'TableAutoClearManual',
    //   component: TableAutoClearManual
    // },
    // {
    //   path: '/table/edit/insert',
    //   name: 'TableEditInsert',
    //   component: TableEditInsert
    // },
    // {
    //   path: '/table/edit/remove',
    //   name: 'TableEditRemove',
    //   component: TableEditRemove
    // },
    // {
    //   path: '/table/edit/revert',
    //   name: 'TableEditRevert',
    //   component: TableEditRevert
    // },
    // {
    //   path: '/table/edit/status',
    //   name: 'TableEditStatus',
    //   component: TableEditStatus
    // },
    // {
    //   path: '/table/edit/cellDisable',
    //   name: 'TableEditCellDisable',
    //   component: TableEditCellDisable
    // },
    // {
    //   path: '/table/edit/rowDisable',
    //   name: 'TableEditRowDisable',
    //   component: TableEditRowDisable
    // },
    // {
    //   path: '/table/edit/highlightCell',
    //   name: 'TableEditHighlightCell',
    //   component: TableEditHighlightCell
    // },
    // {
    //   path: '/table/edit/keyboard',
    //   name: 'TableEditKeyboard',
    //   component: TableEditKeyboard
    // }
    // {
    //   path: '/table/edit/keyboardEdit',
    //   name: 'TableEditKeyboardEdit',
    //   component: TableEditKeyboardEdit
    // },
    // {
    //   path: '/table/edit/cellValid',
    //   name: 'TableEditCellValid',
    //   component: TableEditCellValid
    // },
    // {
    //   path: '/table/edit/rowValid',
    //   name: 'TableEditRowValid',
    //   component: TableEditRowValid
    // },
    // {
    //   path: '/table/edit/forceCellValid',
    //   name: 'TableEditForceCellValid',
    //   component: TableEditForceCellValid
    // },
    // {
    //   path: '/table/edit/forceRowValid',
    //   name: 'TableEditForceRowValid',
    //   component: TableEditForceRowValid
    // },
    // {
    //   path: '/table/edit/footer',
    //   name: 'TableEditFooter',
    //   component: TableEditFooter
    // },
    // {
    //   path: '/table/edit/footerImmediately',
    //   name: 'TableEditFooterImmediately',
    //   component: TableEditFooterImmediately
    // },
    // {
    //   path: '/table/edit/expand',
    //   name: 'TableEditExpand',
    //   component: TableEditExpand
    // },
    // {
    //   path: '/table/edit/menu',
    //   name: 'TableEditMenu',
    //   component: TableEditMenu
    // },
    // {
    //   path: '/table/edit/span',
    //   name: 'TableEditSpan',
    //   component: TableEditSpan
    // },
    // {
    //   path: '/table/edit/form',
    //   name: 'TableEditForm',
    //   component: TableEditForm
    // },
    // {
    //   path: '/table/edit/upload',
    //   name: 'TableEditUpload',
    //   component: TableEditUpload
    // },
    // {
    //   path: '/table/edit/realtimeSave',
    //   name: 'TableEditRealtimeSave',
    //   component: TableEditRealtimeSave
    // },
    // {
    //   path: '/table/edit/dataCount',
    //   name: 'TableEditDataCount',
    //   component: TableEditDataCount
    // },
    // {
    //   path: '/table/edit/uniqueSelect',
    //   name: 'TableEditUniqueSelect',
    //   component: TableEditUniqueSelect
    // },
    // {
    //   path: '/table/edit/cascadingSelect',
    //   name: 'TableEditCascadingSelect',
    //   component: TableEditCascadingSelect
    // },
    // {
    //   path: '/table/edit/events',
    //   name: 'TableEditEvents',
    //   component: TableEditEvents
    // },
    // {
    //   path: '/table/edit/template',
    //   name: 'TableEditTemplate',
    //   component: TableEditTemplate
    // },
    // {
    //   path: '/table/edit/full',
    //   name: 'TableEditFull',
    //   component: TableEditFull
    // },
    // {
    //   path: '/table/bad/edit',
    //   name: 'TableBadEdit',
    //   component: TableBadEdit
    // },
    // {
    //   path: '/table/bad/nonsupport',
    //   name: 'TableBadNonsupport',
    //   component: TableBadNonsupport
    // },
    // {
    //   path: '/table/bad/lineHeight',
    //   name: 'TableBadLineHeight',
    //   component: TableBadLineHeight
    // },
    // {
    //   path: '/table/module/icon',
    //   name: 'ModuleIcon',
    //   component: ModuleIcon
    // },
    // {
    //   path: '/table/module/button',
    //   name: 'ModuleButton',
    //   component: ModuleButton
    // },
    // {
    //   path: '/table/module/radio',
    //   name: 'ModuleRadio',
    //   component: ModuleRadio
    // },
    // {
    //   path: '/table/module/checkbox',
    //   name: 'ModuleCheckbox',
    //   component: ModuleCheckbox
    // },
    // {
    //   path: '/table/module/input',
    //   name: 'ModuleInput',
    //   component: ModuleInput
    // },
    // {
    //   path: '/table/module/textarea',
    //   name: 'ModuleTextarea',
    //   component: ModuleTextarea
    // },
    // {
    //   path: '/table/module/select',
    //   name: 'ModuleSelect',
    //   component: ModuleSelect
    // },
    // {
    //   path: '/table/module/pager',
    //   name: 'ModulePager',
    //   component: ModulePager
    // },
    // {
    //   path: '/table/module/modal',
    //   name: 'ModuleModal',
    //   component: ModuleModal
    // },
    // {
    //   path: '/table/module/tooltip',
    //   name: 'ModuleTooltip',
    //   component: ModuleTooltip
    // },
    // {
    //   path: '/table/module/toolbar',
    //   name: 'ModuleToolbar',
    //   component: ModuleToolbar
    // },
    // {
    //   path: '/table/module/form',
    //   name: 'ModuleForm',
    //   component: ModuleForm
    // },
    // {
    //   path: '/table/module/switch',
    //   name: 'ModuleSwitch',
    //   component: ModuleSwitch
    // },
    // {
    //   path: '/table/module/list',
    //   name: 'ModuleList',
    //   component: ModuleList
    // },
    // {
    //   path: '/table/module/pulldown',
    //   name: 'ModulePulldown',
    //   component: ModulePulldown
    // },
    // {
    //   path: '/table/other/element',
    //   name: 'TableOtherElement',
    //   component: TableOtherElement
    // },
    // {
    //   path: '/table/other/iview',
    //   name: 'TableOtherIview',
    //   component: TableOtherIview
    // },
    // {
    //   path: '/table/other/antd',
    //   name: 'TableOtherAntd',
    //   component: TableOtherAntd
    // },
    // {
    //   path: '/table/other/sortableColumn',
    //   name: 'TableSortableColumn',
    //   component: TableSortableColumn
    // },
    // {
    //   path: '/table/other/sortableRow',
    //   name: 'TableSortableRow',
    //   component: TableSortableRow
    // },
    // {
    //   path: '/table/other/xlsx',
    //   name: 'TableXlsx',
    //   component: TableXlsx
    // },
    // {
    //   path: '/table/plugin/elementConfig',
    //   name: 'TablePluginElementConfig',
    //   component: TablePluginElementConfig
    // },
    // {
    //   path: '/table/plugin/elementFilter',
    //   name: 'TablePluginElementFilter',
    //   component: TablePluginElementFilter
    // },
    // {
    //   path: '/table/plugin/elementPage',
    //   name: 'TablePluginElementPage',
    //   component: TablePluginElementPage
    // },
    // {
    //   path: '/table/plugin/iviewConfig',
    //   name: 'TablePluginIviewConfig',
    //   component: TablePluginIviewConfig
    // },
    // {
    //   path: '/table/plugin/iviewFilter',
    //   name: 'TablePluginIviewFilter',
    //   component: TablePluginIviewFilter
    // },
    // {
    //   path: '/table/plugin/iviewPage',
    //   name: 'TablePluginIviewPage',
    //   component: TablePluginIviewPage
    // },
    // {
    //   path: '/table/plugin/antdConfig',
    //   name: 'TablePluginAntdConfig',
    //   component: TablePluginAntdConfig
    // },
    // {
    //   path: '/table/plugin/antdFilter',
    //   name: 'TablePluginAntdFilter',
    //   component: TablePluginAntdFilter
    // },
    // {
    //   path: '/table/plugin/antdPage',
    //   name: 'TablePluginAntdPage',
    //   component: TablePluginAntdPage
    // },
    // {
    //   path: '/table/plugin/shortcutKey',
    //   name: 'TablePluginShortcutKey',
    //   component: TablePluginShortcutKey
    // },
    // {
    //   path: '/table/plugin/charts',
    //   name: 'TablePluginCharts',
    //   component: TablePluginCharts
    // },
    // {
    //   path: '/table/plugin/exportXLSX',
    //   name: 'TablePluginExportXLSX',
    //   component: TablePluginExportXLSX
    // },
    // {
    //   path: '/table/plugin/exportPDF',
    //   name: 'TablePluginExportPDF',
    //   component: TablePluginExportPDF
    // },
    // {
    //   path: '/table/plugin/renderer',
    //   name: 'TablePluginRenderer',
    //   component: TablePluginRenderer
    // },
    // {
    //   path: '/table/plugin/menus',
    //   name: 'TablePluginMenus',
    //   component: TablePluginMenus
    // },
    // {
    //   path: '/table/plugin/excel',
    //   name: 'TablePluginExcel',
    //   component: TablePluginExcel
    // },
    // {
    //   path: '/table/plugin/treeRows',
    //   name: 'TablePluginTreeRows',
    //   component: TablePluginTreeRows
    // },
    // {
    //   path: '/table/plugin/treeCols',
    //   name: 'TablePluginTreeCols',
    //   component: TablePluginTreeCols
    // },
    // {
    //   path: '/donation/api',
    //   name: 'Donation',
    //   component: Donation
    // },
    // {
    //   path: '/:name/api',
    //   name: 'VXEAPI',
    //   component: VXEAPI
    // },
    // {
    //   path: '/api/run',
    //   name: 'Run',
    //   component: Run
    // }
  ]
})
