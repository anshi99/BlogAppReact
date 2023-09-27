import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import ReactReadMoreReadLess from 'react-read-more-read-less';



export default function main() {
  const navigate = useNavigate()

 


  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const blogs = localStorage.getItem('blogs')
    setBlogs(JSON.parse(blogs))
  }, [])



  const Delete = (index) => {
    const _blogs = blogs.filter((blog, blogIndex) => {
      if (index !== blogIndex) {
        return blog
      }
    })
    setBlogs(_blogs)
    localStorage.setItem('blogs', JSON.stringify(_blogs))
  }


  const EditPost = (index) => {
    localStorage.setItem('editIndex', index)
    navigate('/editpost')

  }

  var like=(index)=>{
    document.getElementById(index).style.backgroundColor='green';
  }





  return (
    <>
      <Header />
      <Link className="btn btn-outline-primary" style={{ margin: '15px' }} to="/addpost">Add Post</Link>
      <hr />

      {blogs && blogs.length > 0 ?
        blogs.map((blog, index) => {
          


          return (
            <>{

              <div className="row" style={{ backgroundColor: 'skyblue', display: 'inline-block', borderRadius: '5px' }}>
                <div className="col-md-3">
                  <div className="card" style={{ width: '16rem', margin: '10px', }}>
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <h3 className="card-subtitle mb-2 text-muted">{blog.categories}</h3>

                      <p className="card-text">
                      <ReactReadMoreReadLess
                        charLimit={25}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                       
                      >
                       {blog.content}
                      </ReactReadMoreReadLess>
                      </p>
                    </div>
                    <div className="container-fluid">
                      <button onClick={() => EditPost(index)} className='btn btn-primary'>Edit</button>&nbsp;&nbsp;
                      <button onClick={() => Delete(index)} className='btn btn-danger'>Delete</button>&nbsp;&nbsp;
                      <button id={index} onClick={()=>like(index)} className='btn' style={{backgroundColor:'yellow'}}>Like</button>
                    </div>
                  </div>
                </div>
              </div>

            }

            </>
          )
        }) : 'Data Not Available'
      }


    </>
  )
}
