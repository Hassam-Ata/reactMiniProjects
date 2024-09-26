import { useState,useEffect } from 'react';
import axios from 'axios';
import  Posts  from '../components/Posts';
import './App.css'
import { Pagination } from '../components/Pagination';

function App() {
  const[posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostsPerPage]=useState(5);
  useEffect(()=>{
    const fetchPosts=async()=>{
           setLoading(true);
           const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
           setPosts(res.data);
           setLoading(false);

    }
    fetchPosts();
  },[])
  console.log(posts);

  //Get Current Posts
  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPost=indexOfLastPost-postPerPage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

  function paginate(pageNumber){
    setCurrentPage(pageNumber)
  }
  
  return (
    <div className='container'>
      <h1 className='text-primary'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App
