import { ListGroupItem } from "react-bootstrap"

const SingleComment = (props) => {
  return (
    <>
      <ListGroupItem>
        {props.comment}
        {props.rate}
      </ListGroupItem>
      <span>{props.elementID}</span>
    </>
  )
}
export default SingleComment
