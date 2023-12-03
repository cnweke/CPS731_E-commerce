import React from 'react';
import "./Products.scss";
import { useParams } from 'react-router-dom';
import List from "../../components/List/List";
import { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";

const Products = () => {

    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null);
    const [selectedSubcats, setSelectedSubCats] = useState([]);

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

    const handleChange = (e) => {
const value = e.target.value;
const isChecked = e.target.checked;


setSelectedSubCats(
    isChecked ? [...selectedSubcats, value]
    : selectedSubcats.filter((item) => item !== value)
    )

    }

    console.log(selectedSubcats)
    
    return (
        <div className="products"> 
            <div className="left">
                <div className="filterItem">
                    <h2>
                        Product Categories
                    </h2>
                    {/* {data?.map((item)=>(
                    
                    <div className="inputItem" key={item.id}>
                        <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                        <label htmlFor="1">{item.attributes.title}</label>

                    </div>))} */}
{/* checked for null here */}
{
    data && data.map((item) => (
        <div className="inputItem" key={item.id}>
            <input 
                type="checkbox" 
                id={item.id} 
                value={item.id} 
                onChange={handleChange}

            />
            <label htmlFor={item.id}>{item.attributes.title}</label>
        </div>
    ))
}

                    
                </div>
                <div className="filterItem">
                <h2>
                       Filter by price
                    </h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
                    <span>{maxPrice}</span>
                    
                </div>
                </div>
                <div className="filterItem">
                <h2>
                       Sort by Price
                    </h2>

                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>

                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")} />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" src="https://static.zara.net/photos///contents/mkt/spots/aw23-home-christmas/subhome-xmedia-45-2//w/1920/IMAGE-landscape-fill-01926d81-9904-44be-8f99-be5e6ea846e5-default_0.jpg?ts=1699543695273" />
            <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubcats}/>
            </div>
        </div>
    )
}

export default Products
