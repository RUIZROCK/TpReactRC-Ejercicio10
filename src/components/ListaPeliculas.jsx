import { Button, Card } from "react-bootstrap";

const ListaPeliculas = ({ lista, borrar }) => {
  return (
    <div className="my-3 row d-flex justify-content-around">
      {lista.map((card, position) => (
        <Card key={position} style={{ width: "18rem" }} className="col-12 col-sm-12 col-md-3 col-lg-3 py-2 m-3">
          <Card.Body>
            <div className="row d-flex justify-content-around">
                <Card.Title>Pelicula: {card.pelicula}</Card.Title>
            </div>
            <Card.Text>
              Genero: {card.genero}
              <br />
              Descripcion: {card.descripcion}
            </Card.Text>
            <div className="row d-flex justify-content-end">
              <Button
                className="col-12 col-sm-12 col-md-5 col-lg-5"
                variant="danger"
                onClick={() => borrar(card.posicion)}
              >
                Borrar
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaPeliculas;
