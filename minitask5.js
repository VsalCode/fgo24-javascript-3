/* -------------------------------------------------------
THEN CATCH
---------------------------------------------------------*/

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
  queue("Ed", 2000).then((result1) => {
    console.log(result1);
    queue("Jane", 500).then((result1) => {
      console.log(result1);
    })
  })
})


/* -------------------------------------------------------
ASYNC AWAIT
---------------------------------------------------------*/

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

const handlingQueue = async () => {
  try {
    const results = await Promise.all([
      queue("John", 1500),
      queue("Ed", 2000),
      queue("Jane", 500)
    ]) 
    results.forEach((result) => {
      if (result.status == "fulfilled") {
        console.log(result.value);
      }
  })    
  } catch(error) {
    console.log(error);
    
  }
}

handlingQueue()

