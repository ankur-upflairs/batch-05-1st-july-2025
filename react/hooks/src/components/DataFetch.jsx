import axios from 'axios'
import React, { useEffect, useState } from 'react' 

function DataFetch() {
    const [posts,setPosts] = useState([])
    //effect is for managing side effects
    //fnc => cannot be async function 
    //dependency array => controlls the runing of effect 
    //if dependency is empty than it only run once 
    //there is a variable than when variable change it runs the effect 
    // useEffect(fnc,[])
    //npm i axios => get/post/put/delete
    useEffect(()=>{
        async function getData(){
           let res = await axios.get('https://dummyjson.com/posts') 
            // console.log(res.data) 
            setPosts(res.data.posts)
        }
        getData()
    },[])
    
  return (
    <div>
        {posts.map((post,i)=>{
            return <div style={{width:'70%',margin:'10px auto',border:'1px solid'}}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })}
    </div>
  )
}

export default DataFetch