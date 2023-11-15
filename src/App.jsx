import { useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState(null); //{email: 'lautamartin1995@gmail.com'}

  function handleRegister(e) {
    e.preventDefault();
    console.log("Esta info es nuestro  body:" , input)

  }

  function handleInput(e) {
   // console.log("informacion del name " + e.target.name);
    //console.log("informacion del value " + e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return(
    <div className="main-container">
      <form className="form-container" action="">
        {/* mail */}
        <section>
          <span>Email:</span>
          <input name="email" type="email" onChange={(e) => handleInput(e)} />
        </section>

        {/* ID number */}
        <section>
          <span>Numero de identificacion:</span>
          <input
            name="idNumber"
            type="number"
            onChange={(e) => handleInput(e)}
          />
        </section>

        {/* contraseña */}
        <section>
          <span>Contraseña:</span>
          <input
            name="password"
            type="password"
            onChange={(e) => handleInput(e)}
          />
        </section>

        {/* botón enviar */}
        <section>
          <button onClick={(e) => handleRegister(e)}>Registrar</button>
        </section>
      </form>
    </div>
  );
}

export default App
