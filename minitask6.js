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
  const data  = await 
  fetch("https://jsonplaceholder.typicode.com/users");
  data.forEach((item) => {
    const email = item.email
    console.log(email)
  });
};

apiCall()