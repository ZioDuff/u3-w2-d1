import AddComment from "./AddComment"
import CommentList from "./CommentsList"
const { Component } = require("react")

//TODO2)CommentArea dovrà fare il fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.
//TODO3)CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea. La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.
//TODO4)AddComment conterrà un form per aggiungere il testo della recensione e il voto (da 1 o a 5). Questo componente dovrà permettere all'utente di fare la POST del nuovo commento sul libro selezionato.

class CommentArea extends Component {
  state = {
    element: [],
  }

  getFetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          "Content-type": "application-json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((element) => {
        this.setState({ element })
        console.log(element)
      })
      .catch((error) => console.log(error))
  }
  componentDidMount() {
    this.getFetchComments()
  }
  render() {
    return (
      <>
        <CommentList element={this.state.element} />
        <AddComment asin={this.props.asin} />
      </>
    )
  }
}
export default CommentArea
