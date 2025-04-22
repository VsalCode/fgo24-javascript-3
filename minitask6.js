const url = "https://jsonplaceholder.typicode.com/users"

/*----------------------------------------------------------
BUILT IN
----------------------------------------------------------*/
// then catch

fetch(url).then((res) => {
  return res.json()
}).then((data) => {
  data.forEach((item) => {
    const email = item.email
    const arr = email.split(" ") 
    console.log(arr)
  });
}).catch((err) => {
  console.log(err);
})

// async

const apiCall = async () => {
  try{
     const apiCallPromise  = await 
     fetch('https://jsonplaceholder.typicode.com/users');
     const apiCallObj = await apiCallPromise.json();
    
     apiCallObj.forEach(item => {
      const email = item.email
      const arr = email.split(" ")
      console.log(arr)
     });
    }
  catch(error){
     console.error(error);
  };
};

apiCall()
