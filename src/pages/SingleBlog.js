import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"}/>
      <BreadCrumb title="Dynamic Blog Name"/>
      <Container class1='blog-wrapper home-wrapper-2 py-5'>

            <div className='row'>
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowNarrowLeft className='fs-5'/>Go back to Blogs</Link>
                        <h4 className='title'>A Beautiful Sunday Renaissance</h4>
                        <img
                        className='img-fluid w-100 my-4' src={blog} alt="blog"/>
                        <p> You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum</p>

                    </div>
                </div>
            </div>

      </Container>
    </>
  )
}

export default SingleBlog
