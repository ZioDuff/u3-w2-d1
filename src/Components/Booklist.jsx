import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
import horror from "../Data/horror.json"
import scifi from "../Data/scifi.json"
import history from "../Data/history.json"
import romance from "../Data/romance.json"
import SingleBook from "./SingleBook"
import { Component } from "react"
//refactor della funzione in classe
class BookList extends Component {
  state = {
    //abbiamo selezionato un array di partenza per poter poi effeturare un cambio di array
    selectedJson: fantasy,
    //questo è il valore di partenza del nostro input per poter cercare i libri
    searchValue: "",
  }

  render() {
    //tramite questa costante andiamo a dichiarare un nuovo array che sara filtrato e ritornera il singolo libro tramite il suo titolo

    const filteredBooks = this.state.selectedJson.filter((book) => {
      return book.title
        .toLocaleLowerCase()
        .includes(this.state.searchValue.toLowerCase())
      //in questo caso andranno filtrati i titoli dei libri e verrnao messi a confronto con il valore del nostro input
      // per poter aver un efficacia migliore i nostri valori andranno confrontati tutti in "lower case"
    })
    return (
      <Container>
        <Form.Label htmlFor="inputPassword5">
          <h4>Cerca il tuo libro</h4>
        </Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
          //qui e dove andiamo a leggere il cambiamento del valore di "searchvalue" traminete l'evento il target dell evento che si aspetta questo metodo
          // anche qua tramite il "setState" andramo a cambaire poi quel valore
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          // qui invece leggiamo il valore del nostro input ossiamo il testo
          value={this.state.searchValue}
        />
        {/* <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup aria-label="Basic example" className="my-3">
            <Button
              variant="outline-secondary"
              //tramite questo metodo andiamo a dire che al click del determinato "button"
              //l'array selezionato nello stato deve cambiare
              //questo puo accadera solo se ambiamo importato tutti gli array che ci servono
              onClick={(e) => {
                this.setState({ selectedJson: fantasy })
              }}
            >
              Fantasy
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: history })
              }}
            >
              History
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: horror })
              }}
            >
              Horror
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: romance })
              }}
            >
              Romance
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: scifi })
              }}
            >
              Scifi
            </Button>
          </ButtonGroup>
        </div>
        {/* questo è l'equivalente delle row-cols  */}
        <Row xs={1} sm={2} md={3} lg={4}>
          {filteredBooks.map((book) => {
            return (
              // la key viene sempre messa sul primo figlio del map
              <Col key={book.asin} className="mb-2">
                {/* singleBook viene importato da un altro componente ma non è nient'altro che la struttura della card dove i valori vengono passati tramite props */}
                <SingleBook
                  key={book.asin}
                  src={book.img}
                  alt={book.title}
                  titleText={book.title}
                  gender={book.category}
                  price={book.price}
                  asin={book.asin}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
export default BookList
