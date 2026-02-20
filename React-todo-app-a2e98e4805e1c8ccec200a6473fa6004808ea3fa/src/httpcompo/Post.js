import React, { useEffect } from 'react'
import axios from 'axios'

function Post() {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const handle=(e)=>{
        const Postdata={
            userId: 111, 
            id: 11, 
            title: 'sample bro', 
            body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", Postdata)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
        fetching data
        <div>
             <button onClick={(e)=> handle(e)}>Save</button>
        </div>
    </div>
  )
}

export default Post