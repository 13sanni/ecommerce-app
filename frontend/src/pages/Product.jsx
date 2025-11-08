import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../components/RelatedProduct';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const[productData,setProductData]=useState(false);
  const[image,setImage]=useState('');
  const[size,setSize]=useState('');

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item)
        
        setImage(item.image[0])
        return null;
      }
    })
  
  }
  useEffect(()=>{
    fetchProductData();

  },[productId,products])
  return productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*products data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/*products image*/}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {productData.image.map((item,index)=>(
          <img onClick={()=>{setImage(item)}} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
        ))}
        </div>
        <div className='w-full sm:w-[80%]'>
          <img src={image} className="w-full h-auto"alt="" />

        </div>
      </div>
        {/*products info--------------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2 '>
          <img src= {assets.star_icon} alt="" className='w-3 5'/>
          <img src={assets.star_icon} alt="" className='w-3 5'/>
          <img src={assets.star_icon} alt="" className='w-3 5'/>
          <img src={assets.star_icon} alt="" className='w-3 5'/>
          <img src={assets.star_icon} alt="" className='w-3 5'/>
          <p className='pl-2 '>122</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button
                  onClick={() => { setSize(item) }}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            </div>
            <button onClick={()=>{addToCart(productData._id,size)}} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm mt-5 text-gray-500 flex flex-col gap-1'>
              <p>100% original product.</p>
              <p>Cash on delivery.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>

      </div>
      {/* -------description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-2 text-sm'>Description</b>
          <p className='border px-5 py-2 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform for buying and selling goods, services, and digital products over the internet, offering convenience and accessibility through virtual storefronts instead of a physical location. Businesses use these sites to process orders, accept payments, manage shipping</p>
          <p>Key elements of a good e-commerce description include a clear headline, highlighted benefits, detailed product features, high-quality images, social proof, and a compelling call to action to convert visitors into customers</p>
        </div>
      </div>
      {/* -------display related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>

  ) : <div className='opacity-0'></div>
}

export default Product;
