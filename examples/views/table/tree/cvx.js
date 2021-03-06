/**
 * @param {object} evnt dom原生事件
 * @param {object} vm 组件实例
 * @param {object} opt 选项
 * @param {string} opt.FS 使用什么分割符号切割每一行字段，默认使用\\$，防止内容内出现逗号
 * @param {number} opt.tmout 解析超时
 * @param {boolean} opt.tree 是否树形目录
 */
import XLSX from 'xlsx'

export const cvx = (evnt, vm, {
  colDef,
  FS = '\\$',
  tmout = 3000,
  tree = false
}) => {
  const waitPr = new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(new Error('parse raw file error'))
    }, tmout)
  })

  const evPr = new Promise((resolve, reject) => {
    try {
      const webColDefMap = colDef.reduce((prev, el) => {
        prev[el.title] = el.field
        return prev
      }, {})

      const hitCol = new Set()
      const unhitCol = new Set()

      const files = evnt.target.files
      const fileReader = new FileReader()

      fileReader.onload = (ev) => {
        const data = ev.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1, {
          FS
        }).split('\n')

        const tableData = []
        const nodeMap = {}
        const headArr = csvData.shift().split(FS)
        const head = {}
        // eslint-disable-next-line no-return-assign
        headArr.forEach(el => {
          head[el] = webColDefMap[el]
        })

        csvData.reduce((prev, vRow, idx) => {
          if (vRow && vRow.length > 0) {
            const vCols = vRow.split(FS)

            if (vCols.length === 0) {
              reject(new Error('not enough fields'))
            }

            const item = {}
            vCols.forEach((val, cIndex) => {
              const column = headArr[cIndex]
              webColDefMap[column]
                ? item[webColDefMap[column]] = val
                : item[column] = val

              webColDefMap[column]
                ? hitCol.add(column)
                : unhitCol.add(column)
            })

            if (!tree) {
              tableData.push(item)
              return
            }

            const colId = vCols[0].replace(/^[\D ]+/, '')
            const colIdSep = colId.split('.')

            item.seqId = colId
            nodeMap[colId] = item

            console.log(vRow)

            if (colIdSep.length > 1) {
              if (colIdSep.length > prev.tid.length) {
                /* deep 3.1
                /* deep 3.1.1
                 *
                 */

                nodeMap[prev.tidShort].children
                  ? nodeMap[prev.tidShort].children.push(item)
                  : nodeMap[prev.tidShort].children = [item]
              } else {
                /* brother & float
                 * brother 3.1
                 *         3.2
                 *         3.3
                 *         3.4
                 *
                 * float 3.1.1
                 * float 3.1.1.1
                 * float 3.1.1.2
                 * float 3.1.1.3
                 * float 3.1.2
                 *
                 * float 3.0
                 * float 3.1
                 * float 3.1.1
                 * float 3.1.1.1
                 * float 3.1.1.2
                 * float 3.1.1.3
                 * float 3.2
                 *
                 */

                const bro = []
                Object.assign(bro, colIdSep)
                bro.pop()
                nodeMap[bro.join('.')].children
                  ? nodeMap[bro.join('.')].children.push(item)
                  : nodeMap[bro.join('.')].children = [item]
              }
            } else {
              tableData.push(item)
            }

            prev = {
              ...item,
              tid: colIdSep,
              tidShort: colId
            }
            return prev
          }
        }, {})

        evnt.target.value = ''
        resolve({
          headMap: head,
          headArr,
          tableData,
          hitResult: {
            hitCol: Array.from(hitCol),
            unhitCol: Array.from(unhitCol)
          }
        })
      }
      fileReader.readAsBinaryString(files[0])
    } catch (e) {
      reject(e)
    }
  })

  return Promise.race([evPr, waitPr])
}
