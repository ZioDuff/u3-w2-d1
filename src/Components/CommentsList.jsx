import { Component } from "react"
import SingleComment from "./SIngleComment"
import { ListGroup } from "react-bootstrap"

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.comments.map((obj) => {
            return (
              <SingleComment
                key={obj.elementID}
                comment={obj.comment}
                rate={obj.rate}
              />
            )
          })}
        </ListGroup>
      </>
    )
  }
}
export default CommentList
