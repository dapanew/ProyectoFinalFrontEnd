import { useState,useEffect } from "react";
import axios from'axios';
import './RegistroUsuario.css'

function RegistroUsuario() {
  const [input, setInput] = useState(null); //{email: 'lautamartin1995@gmail.com'}

  function handleRegister(e) {
    e.preventDefault();
    console.log("Esta info es nuestro  body:" , input);

  //  let url = "http://localhost:3000/v1/consultarUsuario";
 
  useEffect (() => {
   
async function getConsultaUsuarios(){
  await axios({
    url:"http://localhost:3000/v1/consultarUsuario",
    method:'get',
  }).then((response)=>{
    console.log("datos del usuario",response);
  })
}
getConsultaUsuarios();
  },[])
//var data = { username: "example" };
/*
fetch(url, {
  method: "POST", // or 'PUT'
  body: JSON.stringify(input), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
})

  .then((res) => res.json())

  .catch((error) => console.error("Error:", error)
  )
  .then((response) => console.log("Success:", response));
  */
  }
  function handleInput(e) {
   // console.log("informacion del name " + e.target.name);
    //console.log("informacion del value " + e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return(
    <div className="main-container">
      <form className="form-container" action="">

           {/* nombre */}
           <section>
          <span>Nombres</span>
          <input name="nombres-Input" type="text" onChange={(e) => handleInput(e)} />
        </section>
        {/* apellidos */}
        <section>
          <span>Apellidos</span>
          <input name="apellidos-Input" type="text" onChange={(e) => handleInput(e)} />
        </section>
        {/* ID number */}
        <section>
          <span>Numero Id</span>
          <input
            name="idNumber-Input"
            type="number"
            onChange={(e) => handleInput(e)}
          />
        </section>
                {/* Fecha Nacimiento */}
                <section>
          <span>Fecha Nacimiento</span>
          <input
            name="fechaNaciInput"
            type="date"
            onChange={(e) => handleInput(e)}
          />
        </section>
        {/* mail */}
        <section>
          <span>Email</span>
          <input name="email-Input" type="email" onChange={(e) => handleInput(e)} />
        </section>
        {/* contraseña */}
        <section>
          <span>Contraseña</span>
          <input
            name="password-Input"
            type="password"
            onChange={(e) => handleInput(e)}
          />
        </section>
<br></br>
        {/* botón enviar */}
        <section>
          <button onClick={(e) => handleRegister(e)}>Registrar</button>
        </section>
      </form>
    </div>
  );
}

export default RegistroUsuario
