import React, { Fragment, useState } from "react";

function App() {

const [file, setFile] = useState(null)
const selectedHandler = (e) =>{
setFile(e.target.files[0])
}
const sendHandler=() => {
if(!file){
alert('Debes seleccionar un archivo')
return
}
const formdata = new FormData()
formdata.append('image', file)
fetch('http://localhost:9000/image/post' , {
method: 'POST',
body: formdata
}).then(res => res.text())
.then(res=> console.log(res))
.catch(err =>{
console.error(err)})
document.getElementById('fileinput').value = null
setFile(null)
}

fetch('http://localhost:3306/image/get' , {
method: 'get',
body: formdata
}).then(res => res.text())
.then(res=> console.log(res))
.catch(err =>{
console.error(err)})
document.getElementById('fileinput').value = null
setFile(null)
}


  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="#!" className="navbar-brand">
            {" "}
            Image app
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="card">
        <input className="form-control" id="fileinput" type='file' onChange={selectedHandler}></input>
<button className="btn btn-primary" type="buttom" onClick={sendHandler}> upload</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
