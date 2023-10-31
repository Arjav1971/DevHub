import React from 'react';
import { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {TbGitCompare} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import Container from '../components/Container';
const SingleProduct = () => {
  const imageSource ="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg"
  const props = {width: 400, height: 400, zoomWidth: 500, img:imageSource };
  const [orderedProduct,setorederedProduct]=useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"}/>
      <BreadCrumb title="Product Name"/>
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>

            <div className='row'>
                <div className="col-6">
                  <div className='main-product-image'>
                    <div>
                    <ReactImageZoom {...props} />
                    </div>

                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" className='img-fluid'/>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" className='img-fluid'/>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" className='img-fluid'/>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" className='img-fluid'/>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                      <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='price'>$ 100</p>
                      <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                      count={5}
                      size={24}
                      value='3'
                      edit={false}
                      activeColor="#ffd700"
                      />
                      <p className='mb-0 t-review'>(2 Reviews)</p>

                      </div>
                      <a className='review-btn' href="#review">Write a Review</a>
                    </div>
                    <div className='border-bottom py-3'>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Type :</h3>
                        <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Brand :</h3>
                        <p className='product-data'>Havells</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Category :</h3>
                        <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tags :</h3>
                        <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Availability :</h3>
                        <p className='product-data'>In Stock</p>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Size :</h3>
                        <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column my-2'>
                        <h3 className='product-heading'>Color :</h3>
                        <Color/>
                      </div>
                      <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                        <h3 className='product-heading'>Quantity :</h3>
                        <div className=''>
                          <input type='number' name="" min={1} max={10} className='form-control' style={{width:'70px'}} id=""/>
                        </div>
                        <div className='d-flex justify-content-center gap-30 ms-5 align-items-center'>
                                <button className='button border-0' type="submit">ADD TO CART</button>
                                <button className="button signup">BUY IT NOW</button>
                        </div>
                      </div>
                      <div className='d-flex align-items-center gap-15  flex-row '>
                        <div>
                          <a href=""><TbGitCompare className='fs-5 me-2'/>Add to Compare</a>
                        </div>
                        <div>
                          <a href=""><AiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                        </div>
                      </div>
                      <div className='d-flex gap-10  flex-column my-3'>
                        <h3 className='product-heading'>Shipping & Returns :</h3>
                        <p className='product-data'>
                          Free shipping and returns available on all orders! <br/>
                          We ship all US domestic orders within <b>5-10 business days!</b>
                        </p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-3'>
                        <h3 className='product-heading'>Product Link:</h3>
                        <a href="javascript:void(0);" onClick={()=>{
                          copyToClipboard(
                            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg"
                          );
                        }}
                        >Copy Product Link</a>
                      </div>
                    </div>

                  </div>
                </div>

            </div>
  
      </Container>
      <Container class1='description-wrapper py-5 home-wrapper-2'>

          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                
                <p>
                  Lorem klahuf i3rnd fjkhqk kdnjd cncncjn.
                  qhnqjjjjjjjn njiqknf fnkidnq dqkdjq djqn
                  nnjan mkfn jnfqf kfmqf jcnqfk bsjbh fbbjfdk
                  bdbd bjffn jdff jfebfj jekbfj fhjhfnj jfehf
                  wbfhebfh jfwjfnj fjwfb bwjb bjfb jfwb jbfjb .
                </p>
              </div>

            </div>
          </div>

      </Container>
      <Container class1='reviews-wrapper py-5 home-wrapper-2'>

          <div className='row'>
            <div className='col-12'>
            <h4 id="review" >Reviews</h4>
              
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex gap-10 align-items-center'>
                    <ReactStars
                     count={5}
                     size={24}
                     value='3'
                     edit={false}
                     activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}

                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                    <ReactStars
                     count={5}
                     size={24}
                     value='3'
                     edit={true}
                     activeColor="#ffd700"
                    />
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="7" className='w-100 form-control' placeholder='Comments'/>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button> 
                    </div>
                  </form>
                </div>
                <div className='reviews'>
                  <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Arjav</h6>
                    <ReactStars
                     count={5}
                     size={24}
                     value='3'
                     edit={false}
                     activeColor="#ffd700"
                    />
                  </div>
                    <p className='mt-3'>
                      jgadshj vhdjv nfejkh efjgb jwgk hegkhgn;
                      wjfnjfhkhnk jkwfjh fwjhfhfj kjfhfk jkhghg
                      bvjhfh jfhjf fjjh jgghg jvddj bhbgv jhggf hbh;
                      fjjfhhfjhghg hjvh jhvfh jfbh jfhjhghh hhfhejh
                      fgfhjbu hbhf hfbhf bfyhgfw 
                      
                    </p>

                  </div>
                </div>

              </div>

            </div>
          </div>

      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  
                  
                </div>
              </div>
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <div className='row'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );

}

export default SingleProduct
