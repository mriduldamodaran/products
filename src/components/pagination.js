import React from 'react'
import { paginate } from ".././redux/list";
import {useSelector, useDispatch} from 'react-redux';
import "./pagination.css";
function Pagination({postsPerPage, totalPosts}) {
    const {currentPage} = useSelector((state) => state.product);
    const pageNumbers = [];
    const dispatch = useDispatch();

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
  return (
    <nav>
        <ul class="page-number">
            {
                pageNumbers.map(number=>{
                    return( 
                        <li onClick={()=> dispatch(paginate(number))} className={currentPage == number?'selected':'not-selected'}>
                            
                                {number}
                            
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Pagination;
