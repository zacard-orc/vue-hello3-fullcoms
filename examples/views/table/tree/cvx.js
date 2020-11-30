/**
 * @param {object} evnt dom原生事件
 * @param {object} vm 组件实例
 * @param {object} opt 选项
 * @param {string} opt.FS 使用什么分割符号切割每一行字段，默认使用\\$，防止内容内出现逗号
 * @param {string} opt.tmout 解析超时
 */
import XLSX from 'xlsx'

export const cvx = (evnt, vm, {
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
      const files = evnt.target.files
      const fileReader = new FileReader()

      fileReader.onload = (ev) => {
        const data = ev.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1, {
          FS
        }).split('\n')

        const tableData = []
        const headArr = csvData.shift().split(FS)
        const head = {}
        // eslint-disable-next-line no-return-assign
        headArr.forEach(el => head[el] = el)

        if (tree) {
          // todo 预先遍历一把

        } else {
          csvData.forEach((vRow) => {
            if (vRow) {
              const vCols = vRow.split(FS)
              const item = {}
              vCols.forEach((val, cIndex) => {
                const column = headArr[cIndex]
                item[column] = val
              })
              tableData.push(item)
            }
          })
        }

        evnt.target.value = ''
        resolve({
          headMap: head,
          headArr,
          tableData
        })
      }
      fileReader.readAsBinaryString(files[0])
    } catch (e) {
      reject(e)
    }
  })

  return Promise.race([evPr, waitPr])
}
