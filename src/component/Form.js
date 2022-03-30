import '../styles/Form.css'
import { useState } from 'react'

function Form() {
   
    let [content, setContent] = useState("");

  
  return (
    <div className="App">
  <form className="form">
  <div className="form-group">
  <label for="exampleInputPassword1">Nom</label>
  <input id="prenom" type="text" className="form-control"    placeholder="nom"/>
  <label for="exampleInputPassword1">Prenom</label>
  <input type="text" className="form-control"   placeholder="prenom"/>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={content}   aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirmer Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>

  <button type="submit" onClick={(e)=>{
        if(!e.target.value.includes('@')){
             setContent(alert ('veuillez entrer un mail')) }
    }}className="btn btn-primary">Submit</button>
</form>

   

    </div>
  );
}

export default Form;