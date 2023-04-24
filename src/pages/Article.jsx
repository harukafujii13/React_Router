
import { useParams } from "react-router-dom"

const Article = () =>{
  const {topicId}= useParams()
  return(
    <h1>Article Page: {topicId}</h1>
  )
}
export default Article