function queue(name, time){

  return new Promise((resolve, reject) => {
    if (typeof time != "number" || time <= 0 || typeof name != "string" ) {
      reject("gagal")
    } else {
      setTimeout(() => {
        resolve(name)
        setTimeout(() => {
          resolve(name)
          setTimeout(() => {
            resolve(name)
          }, time)
        }, time)
      }, time)
    }
  })
}

queue("John", 1500).then((result1) => {
  console.log(result1);
})
queue("Ed", 2000).then((result1) => {
  console.log(result1);
})
queue("Jane", 500).then((result1) => {
  console.log(result1);
})