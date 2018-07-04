/**
 * 将数值格式化成类金额形式,逗号隔开及小数位
 * @param num 要转换的数值
 * @param n 要保留的小数位数
 * @author byboating
 */
let fMoney = (num, n) => {
  if (n !== 0) {
    n = n > 0 && n <= 20 ? n : 2
  }

  let type = 0
  if (parseFloat(num) < 0) {
    type = 1
  }
  num = Math.abs(num)

  num = parseFloat((num + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
  let l = num.split('.')[0].split('').reverse()
  let r = num.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  if (n === 0) return t.split('').reverse().join('')

  if (type === 1) {
    return '-' + t.split('').reverse().join('') + '.' + r
  } else {
    return t.split('').reverse().join('') + '.' + r
  }
}

/**
 * 还原函数:格式化的金额还原为纯数值
 * @param formattedNum
 * @returns {Number}
 * @author byboating
 */
let rMoney = (formattedNum) => {
  formattedNum = formattedNum + ''
  return parseFloat(formattedNum.replace(/[^\d.-]/g, ''))
}

export {
  fMoney,
  rMoney
}
