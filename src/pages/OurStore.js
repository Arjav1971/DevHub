import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
const OurStore = () => {
  const [grid,setGrid]=useState(4);
  // alert(grid);

  return (
    <>
      <Meta title={"Our Store"}/>
      <BreadCrumb title="Our Store"/>
      <div className='store-warapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Shop By Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>TV</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Filter By
                </h3>
                <div>
                  <h5 className='sub-title'>Availabiltiy</h5>
                  <div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" htmlFor="">
                      InStock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" checked/>
                    <label className="form-check-label" htmlFor="">
                      Out of Stock(0)
                    </label>
                  </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                    <input type="email" className="form-control py-1" id="floatingInput" placeholder="From"/>
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  
                  <div className="form-floating">
                    <input type="email" className="form-control py-1" id="floatingInput" placeholder="To"/>
                    <label htmlFor="floatingInput">To</label>
                  </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <div className='d-flex flex-wrap'>
                      <ul className='colors ps-0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                      <label className="form-check-label" htmlFor="">
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                      <label className="form-check-label" htmlFor="">
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Product Tags
                </h3>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphones</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tablet</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Vivo</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                </div>
                
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Random Product
                </h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img src="images/watch.jpg" className='img-fluid' alt="watch"/>

                      

                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10pack multi colored for students</h5>
                      <ReactStars
                      count={5}
                      size={24}
                      value='3'
                      edit={false}
                      activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src="images/watch.jpg" className='img-fluid' alt="watch"/>

                      

                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10pack multi colored for students</h5>
                      <ReactStars
                      count={5}
                      size={24}
                      value='3'
                      edit={false}
                      activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-9'>
              <div className='filter-sort-grid'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{width:"100px"}}>Sort By</p>
                    <select name="" className='form-control form-select' id="">
                      <option value="manual">Featuerd</option>
                      <option value="best-selling" selected="selected">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price , low to high</option>
                      <option value="price-descending">Price , high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="creted-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='grid d-flex align-items-center gap-10'>
                      <img onClick={()=>{
                        setGrid(3)
                      }} src="images/gr4.svg" className='d-block img-fluid' alt="grid"/>
                      <img onClick={()=>{
                        setGrid(4)
                      }} src="images/gr3.svg" className='d-block img-fluid' alt="grid"/>
                      <img onClick={()=>{
                        setGrid(6)
                      }} src="images/gr2.svg" className='d-block img-fluid' alt="grid"/>
                      <img onClick={()=>{
                        setGrid(12)
                      }} src="images/gr.svg" className='d-block img-fluid' alt="grid"/>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className='products-list pb-5'>
                <div className="d-flex gap-10 flex-wrap">
                   <ProductCard grid={grid}/>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default OurStore

