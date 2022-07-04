import axios from 'axios'

const deepCopy = function(obj1, obj2 = {}) {
  for (const name in obj1) {
    if (typeof obj1[name] === 'object') {
      if (obj1[name] != null) {
        obj2[name] = (obj1[name].constructor === Array) ? [] : {}
        deepCopy(obj1[name], obj2[name])
      }
    } else {
      obj2[name] = obj1[name]
    }
  }
  return obj2
}

export const
  request = async (options) => {
  let data = {}
  data = deepCopy(options.data, data)
  const opt = {
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors'
  }
  Object.assign(opt, options, {
    data: data
  })

  return axios(opt)
    .then(resp => {
      return resp
    }).catch(err => {
      throw err
    })
}
