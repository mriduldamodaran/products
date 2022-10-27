import { useSelector, useDispatch } from "react-redux";
import {useEffect } from 'react';
import {increment,decrement, fetchData, fetchCat, fetchDataForFiltering} from ".././redux/list";
import axios from 'axios';
import Products from "./products";
import Pagination from "./pagination";
import "./itemList.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SingleProduct from './singleProduct';

function ItemList(){

    const {productList, loading, currentPage, postsPerPage, categories, all_posts_for_filtering} = useSelector((state) => state.product);
    const dispatch = useDispatch();
    console.log(currentPage);
    

        useEffect(()=>{
            const fetchPosts = async () =>{
                const res = await axios.get("https://fakestoreapi.com/products?limit=20");
                const catArray= await axios.get("https://fakestoreapi.com/products/categories");
                dispatch(fetchCat(catArray.data));
                dispatch(fetchData(res.data));
                dispatch(fetchDataForFiltering(res.data));
            }

            fetchPosts();
           
        }, []);
        const IndexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = IndexOfLastPost - postsPerPage;
        const currentPosts = productList.slice(indexOfFirstPost, IndexOfLastPost);
        const filtering = (evt) =>{
            if(evt.target.value == "all"){
                dispatch(fetchData(all_posts_for_filtering));
            }else{
                console.log(all_posts_for_filtering);
                const filteredArray = all_posts_for_filtering.filter((item) => item.category === evt.target.value);
                dispatch(fetchData(filteredArray));
            }
            
        }
        const searchFiltering = (evt) => {
            console.log("in the function");
            if(evt.target.value == ""){
                dispatch(fetchData(all_posts_for_filtering));
            }else{
                console.log("input has value");
                let searchTerm = evt.target.value;
                console.log(searchTerm);
                const filteredArray = all_posts_for_filtering.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
                console.log(filteredArray);
                dispatch(fetchData(filteredArray));
            }
        }
        console.log(productList);
    return(
        <div>
            <BrowserRouter>
            <h1 class="heading-products">Products</h1>

            <label>Filter By Category</label><select onChange={(event)=> filtering(event)}>
                <option value="all">All</option>
                {
                    categories.map(cat =>{
                        return (<option value={cat}>{cat}</option>);
                    })
                }
            </select>
            <label>Search By Name</label><input type="text" placeholder="Search..." onChange={(evt)=> searchFiltering(evt)}/>
                <Routes>
                    <Route exact path="/" element={<Products product={currentPosts}/>} />
                    {   
                    productList.map(item =>{
                    return (
                              <Route path={`/products/${item.id}`} element={<SingleProduct title={item.title} image={item.image} category={item.category}/>} />   
                                
                        );
                    })
                }
                </Routes>
            </BrowserRouter>
            
            
            <Pagination postsPerPage={postsPerPage} totalPosts={productList.length} />
            
        </div>
    )
}
export default ItemList;