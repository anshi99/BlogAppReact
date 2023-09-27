import React from 'react'
import Header from './Header'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'


export default function AddBlog() {
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

    const Post = () => {
        console.log({title,categories,content})

        const blogs =localStorage.getItem('blogs') && localStorage.getItem('blogs').length> 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        localStorage.setItem('blogs',JSON.stringify([...blogs,{title,categories,content }]))
        navigate('/')
    }

    return (
        <><Header />
            <Link className="btn btn-outline-primary" style={{ margin: '15px', position: 'sticky' }} to="/">Back</Link>
            <section className="vh-120 " >
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card shadow-2-strong" style={{ backgroundColor: 'skyblue' }} >
                                <div className="card-body p-5 ">

                                    <h3 className="mb-5">ADD DATA IN YOUR POST</h3>
                                    
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="title">Title</label>
                                            <input value={title} onChange={(e) => handleTitleChange(e)} type="text" className="form-control form-control-lg" />


                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="category">Categories</label>
                                                <input onChange={(e) => handleCategoriesChange(e)} type="text" className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="content">Content</label>
                                                <textarea onChange={(e) => handleContentChange(e)} type="textarea" className="form-control form-control-lg" />

                                            </div>




                                            <button onClick={Post} className="btn btn-dark btn-lg btn-block" type="submit">Post</button>&nbsp;&nbsp;&nbsp;
                                           

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
