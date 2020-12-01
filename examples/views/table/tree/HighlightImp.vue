<template>
  <div>
    <p class="tip">
      键盘移动高亮行，设置 <table-api-link prop="keyboard-config"/>={isArrow: true, isEnter: true} 启用方向键功能<br>
      <span class="red">(注：树结构不支持大量数据，如果数据量超过 500 条，请谨慎使用！)</span>
    </p>

    <p>
<!--      <vxe-button @click="importDataEvent">导入aa</vxe-button>-->
<!--      <template v-slot:buttons>-->
      <vxe-button>
        <input type="file" @change="importDataEvent" accept=".xls,.xlsx,.csv">
      </vxe-button>

<!--      </template>-->
      <vxe-button @click="clearData">清空</vxe-button>
    </p>

    <vxe-grid
      ref="xTable"
      highlight-current-row
      :mouse-config="{selected: true}"
      :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
      :checkbox-config="{range: true}"
      :columns="tableColumnDef"
      :data="tableData"
      :tree-config="{children: 'children'}"
    >
      <!--      tree -->
      <!--      <vxe-table-column type="seq" title="编号" width="60"></vxe-table-column>-->
      <!--&lt;!&ndash;      <vxe-table-column type="checkbox" width="60"></vxe-table-column>&ndash;&gt;-->
      <!--      <vxe-table-column field="ljmc" title="零件名称" tree-node></vxe-table-column>-->
      <!--      <vxe-table-column field="cl" title="材料" :edit-render="{name: 'input'}"></vxe-table-column>-->
      <!--      <vxe-table-column field="gy" title="工艺" :edit-render="{name: 'input'}"></vxe-table-column>-->
      <!--      <vxe-table-column field="djzl" title="单件重量" :edit-render="{name: 'input'}"></vxe-table-column>-->
      <!--      <vxe-table-column field="role" title="角色" :edit-render="{name: '$select', options: roleList, props: {clearable: true, multiple: true}, events: {change: roleChangeEvent}}"></vxe-table-column>-->
      <!--      <vxe-table-column field="ddtime" title="日期" :edit-render="{name: '$input', props: {type: 'date'}, events: {change: roleChangeEvent} }"></vxe-table-column>-->

<!--      <vxe-table-column type="seq" width="60"></vxe-table-column>-->
<!--      <vxe-table-column field="name" title="Name"></vxe-table-column>-->
<!--      <vxe-table-column field="sex" title="Sex"></vxe-table-column>-->
<!--      <vxe-table-column field="age" title="Age" sortable></vxe-table-column>-->
<!--      <vxe-table-column field="boom" title="Boom" sortable></vxe-table-column>-->
<!--      <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>-->
      <!--      <vxe-table-column field="name" title="Name" tree-node></vxe-table-column>-->
      <!--      <vxe-table-column field="size" title="Size"></vxe-table-column>-->
      <!--      <vxe-table-column field="type" title="Type"></vxe-table-column>-->
      <!--      <vxe-table-column field="date" title="Date"></vxe-table-column>-->
    </vxe-grid>

    <pre>
      <code>
        | Arrow Up ↑ | 移动到高亮行的上一行 |
        | Arrow Down ↓ | 移动到高亮行的下一行 |
        | Enter | 展开节点，进入子节点 |
        | Backspace | 关闭节点，返回到父节点 |
      </code>
    </pre>

    <!--    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>-->

    <!--    <pre>-->
    <!--      <code class="xml">{{ demoCodes[0] }}</code>-->
    <!--      <code class="javascript">{{ demoCodes[1] }}</code>-->
    <!--    </pre>-->
  </div>
</template>

<script>
import hljs from 'highlight.js'
import XEUtils from 'xe-utils'
import XLSX from 'xlsx'

import { cvx } from './cvx'

/*
http://localhost:8080/#/table/tree/highlightImp
 */
export default {
  data () {
    return {
      tableData: [],
      selectRow: null,
      demoCodes: [],
      tableColumnDef: [
        // { field: 'name', title: 'Name' },
        // { field: 'sex', title: 'Sex', formatter: this.formatterSex },
        // { field: 'age', title: 'Age' },
        // { field: 'boom', title: 'Boom', showOverflow: true }

        { field: 'seqId', title: '编号', treeNode: true },
        { field: '零件名称', title: '零件名称' },
        { field: '材料', title: '材料' },
        { field: '工艺', title: '工艺' },
        { field: '单件重量', title: '单件重量' },
        { field: '角色', title: '角色' },
        { field: '日期', title: '日期' }

        // { field: 'seqId', title: 'ID', treeNode: true },
        // { field: 'ljmc', title: '零件名称' },
        // { field: 'cl', title: '材料' },
        // { field: 'gy', title: '工艺' },
        // { field: 'djzl', title: '单件重量' },
        // { field: 'role', title: '角色' },
        // { field: 'ddtime', title: '日期' }
      ],
      roleList: [
        {
          label: '前端',
          value: '1',
          disabled: false
        },
        {
          label: '后端',
          value: '2',
          disabled: false
        },
        {
          label: '项目经理',
          value: '3',
          disabled: false
        },
        {
          label: '设计师',
          value: '4',
          disabled: false
        },
        {
          label: '运维',
          value: '5',
          disabled: false
        }
      ]
    }
  },
  created () {
    // this.tableData = XEUtils.clone(window.MOCK_TREE_DATA_LIST, true)
    // this.tableData = []

    // this.tableData = [
    //   {
    //     // id: 1000,
    //     ljmc: '新风口',
    //     cl: ' 金属',
    //     gy: '铰链冲压计算公式',
    //     djzl: '1.5',
    //     role: '运维',
    //     ddtime: '2020-01-01',
    //     children: [
    //       {
    //         // id: 1100,
    //         // parentId: 1000,
    //         ljmc: '新风口密封条',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 1,
    //         ddtime: '2020-03-01'
    //       },
    //       {
    //         // id: 1200,
    //         // parentId: 1000,
    //         ljmc: '螺钉-内外循环内门执行器a',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 2,
    //         ddtime: '2020-04-01',
    //         children: [
    //           {
    //             ljmc: '螺钉-内外循环内门执行器aa',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 3,
    //             ddtime: '2020-05-01'
    //           },
    //           {
    //             ljmc: '螺钉-内外循环内门执行器bb',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 3,
    //             ddtime: '2020-06-01'
    //           }
    //         ]
    //       },
    //       {
    //         // id: 1100,
    //         // parentId: 1000,
    //         ljmc: '新风口密封条world',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 2,
    //         ddtime: '2020-07-01'
    //       }
    //     ]
    //   },
    //   {
    //     // id: 2000,
    //     ljmc: '螺钉-新风口到鼓机单元',
    //     cl: ' 金属',
    //     gy: '铰链冲压计算公式',
    //     djzl: '1.5',
    //     role: 1,
    //     ddtime: '2020-09-01',
    //     children: [
    //       {
    //         ljmc: '多米尼克',
    //         cl: '塑料',
    //         gy: '微信啦啦啦啦',
    //         djzl: '1.6',
    //         role: 3,
    //         ddtime: '2020-09-01'
    //       },
    //       {
    //         ljmc: '多米尼克5555',
    //         cl: '塑料',
    //         gy: '微信啦啦啦啦',
    //         djzl: '1.7',
    //         role: 2,
    //         ddtime: '2020-02-01'
    //       }
    //     ]
    //   },
    //   {
    //     // id: 3000,
    //     ljmc: '新风口',
    //     cl: ' 金属',
    //     gy: '铰链冲压计算公式',
    //     djzl: '1.5',
    //     role: 2,
    //     ddtime: '2020-02-01',
    //     children: [
    //       {
    //         ljmc: '新风口密封条',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 4,
    //         ddtime: '2020-02-01',
    //         children: [{
    //           ljmc: 'aaa',
    //           cl: ' bb',
    //           gy: '铰链冲压计算公式',
    //           djzl: '1.5',
    //           role: 4,
    //           ddtime: '2020-01-01'
    //         },
    //         {
    //           ljmc: 'bbbb',
    //           cl: ' aa',
    //           gy: '铰链冲压计算公式',
    //           djzl: '1.5',
    //           role: 5,
    //           ddtime: '2020-08-01'
    //         }
    //         ]
    //       }, {
    //         ljmc: '螺钉-内外循环内门执行器b',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 2,
    //         ddtime: '2020-09-01',
    //         children: [
    //           {
    //             ljmc: '螺钉-内外循环内门执行器bb',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 4,
    //             ddtime: '2020-01-01'
    //           }, {
    //             ljmc: '螺钉-内外循环内门执行器bb',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 5,
    //             ddtime: '2020-02-01'
    //           }, {
    //             ljmc: '螺钉-内外循环内门执行器bb',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 1,
    //             ddtime: '2020-09-01',
    //             children: [
    //               {
    //                 ljmc: '螺钉-内外循环内门执行器bbb',
    //                 cl: ' 金属',
    //                 gy: '铰链冲压计算公式',
    //                 djzl: '1.5',
    //                 role: 2,
    //                 ddtime: '2020-01-01',
    //                 children: [
    //                   {
    //                     ljmc: '螺钉-内外循环内门执行器bbbb',
    //                     cl: ' 金属',
    //                     gy: '铰链冲压计算公式',
    //                     djzl: '1.5',
    //                     role: 3,
    //                     ddtime: '2020-04-01'
    //                   }
    //                 ]
    //               }
    //             ]
    //           }
    //         ]
    //       },
    //       {
    //         ljmc: '螺钉-123内外循2环内门执行器z',
    //         cl: ' 金属',
    //         gy: '铰链冲压计算公式',
    //         djzl: '1.5',
    //         role: 2,
    //         ddtime: '2020-01-01',
    //         children: [
    //           {
    //             ljmc: '螺钉-123内外循2环内门执行器zz',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 1,
    //             ddtime: '2020-10-01'
    //           },
    //           {
    //             ljmc: '螺钉-123内外循2环内门执行器zz',
    //             cl: ' 金属',
    //             gy: '铰链冲压计算公式',
    //             djzl: '1.5',
    //             role: 2,
    //             ddtime: '2020-02-01',
    //             children: [
    //               {
    //                 ljmc: '螺钉-123内外循2环内门执行器zzz',
    //                 cl: ' 金属',
    //                 gy: '铰链冲压计算公式',
    //                 djzl: '1.5',
    //                 role: 3,
    //                 ddtime: '2020-03-04',
    //                 children: [{
    //                   ljmc: '螺钉-123内外循2环内门执行器zzzz',
    //                   cl: ' 金属',
    //                   gy: '铰链冲压计算公式',
    //                   djzl: '1.5',
    //                   role: 2,
    //                   ddtime: '2020-02-11'
    //                 }]
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     // id: 4000,
    //     ljmc: '新风单元及蒸发器单元',
    //     cl: ' 塑料',
    //     gy: '铰链冲压计算公式',
    //     djzl: '1.5',
    //     role: 2,
    //     ddtime: '2020-08-13',
    //     children: [
    //
    //     ]
    //   },
    //   {
    //     // id: 5000,
    //     ljmc: '新风单元及蒸发器单元',
    //     cl: ' 塑料',
    //     gy: '铰链冲压计算公式',
    //     djzl: '1.5',
    //     role: 1,
    //     ddtime: '2020-07-26',
    //     children: [
    //
    //     ]
    //   }
    // ]
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    updateRoleList () {
      // 获取表格中的全量数据
      const { fullData } = this.$refs.xTable.getTableData()
      this.roleList.forEach(item => {
        if (item.value) {
          // 如果当前选项已经被选过，则禁用
          item.disabled = fullData.some(row => row.role === item.value)
        }
      })
    },
    roleChangeEvent (e) {
      // this.updateRoleList()
      console.log(e)
    },
    importDataEvent (evnt) {
      cvx(evnt, this, {
        tree: true
      })
        .then(res => {
          console.log(res)
          const {
            tableData
          } = res
          this.tableData = tableData
        })
        .catch(e => {
          console.error(e)
        })
    },
    clearData () {
      this.tableData = []
    }
  }
}
</script>
