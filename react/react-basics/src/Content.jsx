//fragment => is  a replacement of parent div in jsx with out inserting a html node 
import { Fragment } from "react"

function Content() {
  return <Fragment>
    this is Content component <br />
  </Fragment>
}
function Footer() {
  return <>
    this is footer component
  </>
}

export {Content,Footer}
export default Footer



