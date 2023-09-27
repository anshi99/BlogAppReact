import React from 'react'
import Header from './Header'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function EditBlog() {
    const navigate=useNavigate()



    const [title, setTitle] = useState('')
    const [categories, setCategories] = useState('')
    const [content, setContent] = useState('')
    


    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleCategoriesChange = (event) => {
        setCategories(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

   


    const Edit=()=>{
        let blogs =localStorage.getItem('blogs') && localStorage.getItem('blogs').length> 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        const _blogs=blogs.map((blog,blogIndex)=>{
          if(localStorage.getItem('editIndex') != blogIndex){
            return blog
          }
          else{
            return {title,categories,content}
          }
        })
        
        localStorage.setItem('blogs',JSON.stringify(_blogs))
        navigate('/')
      }

  return (
    <>
    <Header/>
    <Link className="btn btn-outline-primary" style={{ margin: '15px',position:'sticky'}} to="/">Back</Link>
        <section className="vh-120 " >
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card shadow-2-strong" style={{backgroundColor:'skyblue'}} >
                                <div className="card-body p-5 ">

                                    <h3 className="mb-5">UPDATE DATA IN YOUR POST</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="title">Title</label>
                                        <input value={title} onChange={(e) => handleTitleChange(e)} type="text" className="form-control form-control-lg" />


                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="category">Categories</label>
                                            <input value={categories} onChange={(e) => handleCategoriesChange(e)} type="text" className="form-control form-control-lg" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="content">Content</label>
                                            <textarea value={content} onChange={(e) => handleContentChange(e)} type="textarea" className="form-control form-control-lg" />

                                        </div>




                                        <button onClick={Edit} className="btn btn-dark btn-lg btn-block" type="submit">Update</button>&nbsp;&nbsp;&nbsp;
                                       

                                        <hr className="my-4" />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
