import React from 'react';
import {useSelector} from 'react-redux';
import "./products.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SingleProduct from './singleProduct';



const Products = ({product}) =>{

    const {productList, loading, currentPage, postsPerPage} = useSelector((state) => state.product);
    
    return(
        <div class="list-container">
           
            <div>
                {
                    product.map(item =>{
                        return (<div class="sigle-item">
                                    <p>{item.category}</p>
                                    <img src={item.image} height="auto" width="50%"/>
                                    <h3>{item.title}</h3>
                                    <Link to={`/products/${item.id}`}>More Info</Link>

                                    
                                </div>);
                    })
                    
                }   
            </div>
            {
                
            }
            
            
        </div>
        
    )
}

export default Products;