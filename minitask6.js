const url = "https://jsonplaceholder.typicode.com/users"

/* ------------------------------------------------------------------------
CARA BUILT IN METHOD
------------------------------------------------------------------------ */

// the catch
fetch(url).then((res) => {
  return res.json() // kalau pakai kurung kurawal harus tulis returm, kalau ga gausah
}).then((data) => {
  const emailUsers = data.map(item => item.email.toLowerCase())
  console.log(emailUsers);
}).catch((err) => {
  console.log(err);
})

// async await
const handleData = async () => {
  try{
    const fetchData = await fetch(url)
    const data = fetchData.json()
    const emailUsers = data.map(item => item.email.toLowerCase())
    console.log(emailUsers);
  }catch(err){
    console.log(err);
  }
}

handleData()

/* ------------------------------------------------------------------------
CARA MANUAL
------------------------------------------------------------------------ */
