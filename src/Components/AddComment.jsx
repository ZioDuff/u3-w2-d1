import { Component } from "react"
import { Form } from "react-bootstrap"

class AddComment extends Component {
  fetchPostComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        method: "POST",
        body: JSON.stringify(),
        headers: {
          "Content-type": "application-json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
        },
      }
    )
  }
  componentDidMount(){
    this.fetchPostComments()
  }
    render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lascia un commento e una valutzione </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button>invia</button>
        </Form>
      </>
    )
  }
}
export default AddComment
