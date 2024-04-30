import { Component } from "react"
import SingleComment from "./SIngleComment"
import { ListGroup } from "react-bootstrap"

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.element.map((obj) => {
            return (
              <SingleComment
                key={obj._id}
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
