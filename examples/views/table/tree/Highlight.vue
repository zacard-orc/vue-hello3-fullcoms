<template>
  <div>
    <p class="tip">
      键盘移动高亮行，设置
      <table-api-link prop="keyboard-config"/>
      ={isArrow: true, isEnter: true} 启用方向键功能<br>
      <span class="red">(注：树结构不支持大量数据，如果数据量超过 500 条，请谨慎使用！)</span>
    </p>

    <p>
      <vxe-button @click="exportDataEvent">导出</vxe-button>
    </p>

    <vxe-table
      ref="xTable"
      highlight-current-row
      :data="tableData"
      :tree-config="{children: 'children'}"
      :keyboard-config="{isArrow: true, isEnter: true}">
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="ljmc" title="零件名称" tree-node></vxe-table-column>
      <vxe-table-column field="cl" title="材料" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="gy" title="工艺" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="djzl" title="单件重量" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="role" title="角色"
                        :edit-render="{name: '$select', options: roleList, props: {clearable: true, multiple: true}, events: {change: roleChangeEvent}}"></vxe-table-column>
      <vxe-table-column field="ddtime" title="日期"
                        :edit-render="{name: '$input', props: {type: 'date'}, events: {change: roleChangeEvent} }"></vxe-table-column>
    </vxe-table>

    <pre>
      <code>
        | Arrow Up ↑ | 移动到高亮行的上一行 |
        | Arrow Down ↓ | 移动到高亮行的下一行 |
        | Enter | 展开节点，进入子节点 |
        | Backspace | 关闭节点，返回到父节点 |
      </code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import XEUtils from 'xe-utils'

/*
  http://localhost:8080/#/table/tree/highlight
   */
export default {
  data () {
    return {
      selectRow: null,
      tableData: [],
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
    this.tableData = [
      {
        id: 'abde2342a',
        ljmc: 'a1',
        cl: ' scr9-高',
        children: [{
          id: '2340lsf',
          ljmc: 'a2',
          cl: ' scr8-高',
          children: [{
            id: 'alall234',
            ljmc: 'a3',
            cl: ' scr7-高',
            children: [{
              id: '23llaapp2',
              ljmc: 'a4',
              cl: ' scr6-高'
            }]
          }]
        }]
      }
    ]

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
    exportDataEvent () {
      this.$refs.xTable.exportData({
        filename: 'bugFix',
        sheetName: 'Sheet1',
        type: 'xlsx'
      })
    },
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
    }
  }
}
</script>
