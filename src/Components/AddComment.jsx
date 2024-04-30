import { Component } from "react"
import { FloatingLabel, Form } from "react-bootstrap"

class AddComment extends Component {
  state = {
    commentUser: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  }

  postComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.commentUser),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            commentUser: {
              comment: "",
              rate: "",
              elementId: this.props.asin,
            },
          })
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .catch((err) => {
        console.log(err)
        console.log(this.props.asin)
      })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.postComment()
  }
  handleFieldChange = (propName, propValue) => {
    this.setState({
      commentUser: { ...this.state.commentUser, [propName]: propValue },
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Lascia una Commento"
          className="my-3"
        >
          <Form.Control
            type="text"
            placeholder="..."
            value={this.state.commentUser.comment}
            onChange={(e) => this.handleFieldChange("comment", e.target.value)}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelect"
          label="Lascia una valutazione"
        >
          <Form.Select
            aria-label="Floating label select example"
            value={this.state.commentUser.rate}
            onChange={(e) => this.handleFieldChange("rate", e.target.value)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <button type="submit">invia</button>
        </FloatingLabel>
      </Form>
    )
  }
}
export default AddComment
