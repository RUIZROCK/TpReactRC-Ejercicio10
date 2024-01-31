import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import ListaPeliculas from "./ListaPeliculas";


function Formulario() {
  const [pel,setPelicula]=useState("");
  const [des,setDescripcion]=useState("");
  const [gen,setGenero]=useState("");

  const datosLocalStorage = JSON.parse(localStorage.getItem("listaDatos"))||[];
  const [listaPeliculas,setListaPeliculas]=useState(datosLocalStorage);

  useEffect(()=>{
    localStorage.setItem("listaDatos",JSON.stringify(listaPeliculas));
  },[listaPeliculas]);


  let pelicula= document.getElementById("pelicula");
  let descripcion= document.getElementById("descripcion");
  let genero= document.getElementById("genero");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validarTexto(pelicula.value, 2, 30) &&
      validarTexto(descripcion.value, 2, 150) &&
      validarGenero(genero.value)
    ) {
      console.log("ingreso!")
      const uuid = uuidv4();

      const nuevaPelicula = {
        posicion:uuid,
        pelicula: pelicula.value,
        descripcion: descripcion.value,
        genero: genero.value
      };

      setListaPeliculas([...listaPeliculas,nuevaPelicula]);

      alert("datos ingresados correctamente");
    } else {
      alert("dato/s ingresado/s erroneo/s");
    }

    setPelicula("");
    setDescripcion("");
    setGenero("");
  };

  const validarTexto = (texto, min, max) => {
    if (texto.length < min && texto.length > max) {
      return false;
    } else {
      return true;
    }
  };

  const validarGenero=(genero)=>{
    //suponiendo que solo pueden ser unicamente del genero que aparecen en el siguiente array
    const arrayGenero=["comedia","terror","documental","marvel","romantico"];
    return arrayGenero.includes(genero.toLowerCase())
  }

  const borrarCard = (posicion) => {
    const arrayFilter = listaPeliculas.filter(
      (pos) => pos.posicion !== posicion
    );
    console.log(arrayFilter)
    setListaPeliculas(arrayFilter);
  };


  return (
    <>
    <Form onSubmit={handleSubmit} className="my-3 row d-flex justify-content-center">
      <Form.Group className="mb-3 col-12 col-sm-12 col-md-8 col-lg-8">
        <Form.Label>Pelicula</Form.Label>
        <Form.Control value={pel} onChange={(e) => setPelicula(e.target.value)} type="text" id="pelicula" placeholder="Ej: Spirit" />
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-sm-12 col-md-8 col-lg-8">
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-12 col-sm-12 col-md-12 col-lg-12">

          <Form.Label >
            Descripcion
          </Form.Label>
          </div>

          <div className="mb-3 col-12 col-sm-12 col-md-12 col-lg-12">
    
          <textarea
            name=""
            id="descripcion"
            cols="50"
            rows="5"
            value={des}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ej: Ya nada me va a dominar, yo voy a pelear, no me rendire..."
          ></textarea>
          </div>
        </div>
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-sm-12 col-md-8 col-lg-8">
        <div>
          <Form.Label>Genero</Form.Label>
          <select value={gen} onChange={(e) => setGenero(e.target.value)} className="mx-3" name="" id="genero">
            <option value="">--Selecciona--</option>
            <option value="Comedia">Comedia</option>
            <option value="Terror">Terror</option>
            <option value="Documental">Documental</option>
            <option value="Marvel">Marvel</option>
            <option value="Romantico">Romantico</option>
          </select>
        </div>
      </Form.Group>

      <div className="row d-flex justify-content-center">
        <Button
          className="mb-3 col-12 col-sm-12 col-md-4 col-lg-4"
          variant="primary"
          type="submit"
        >
          Cargar
        </Button>
      </div>
    </Form>
    <hr />
    <ListaPeliculas lista={listaPeliculas} borrar={borrarCard}></ListaPeliculas>
    </>
  );
}

export default Formulario;
