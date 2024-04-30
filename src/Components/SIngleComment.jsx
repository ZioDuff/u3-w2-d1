import { ListGroupItem } from "react-bootstrap"

const SingleComment = (props) => {
  return (
    <>
      <ListGroupItem>
        {props.comment}
        {props.rate}
        <span>{props.elementID}</span>
      </ListGroupItem>
    </>
  )
}
export default SingleComment
