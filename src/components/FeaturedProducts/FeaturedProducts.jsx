import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import useFetch from "../../hooks/useFetch"
// import {useState, useEffect} from 'react'
// import axios from "axios"
// import '../../components/Card/Card'

const FeaturedProducts = ({type}) => {

    // const data=[
    // {
    //     id: 1,
    //     img: "https://static.zara.net/photos///2023/I/0/1/p/7545/100/403/2/w/750/7545100403_1_1_1.jpg?ts=1696948088481",
    //     img2: "https://static.zara.net/photos//contents/mkt/spots/aw23-man-north-joe-mckena/layout//aw23-man-north-joe-mckena.layout.layout-1920-abffd1070781b92b7c10e15cc0148425e2166279-FILL-0.667_0.jpg?ts=1698746913950&imwidth=305",
    //     title: "Long Sleeve Oxford Shirt",
    //     isNew:true,
    //     oldprice: 75,
    //     price: 40,
    // },
    // {
    //     id: 2,
    //     img: "https://static.zara.net/photos///2023/I/0/1/p/6367/267/401/2/w/750/6367267401_1_1_1.jpg?ts=1696947177386",
    //     title: "Double Breasted Coat",
    //     isNew:true,
    //     oldprice: 245,
    //     price: 89,
    // },
    // {
    //     id: 3,
    //     img: "https://static.zara.net/photos///2023/I/0/1/p/6518/101/401/2/w/750/6518101401_1_1_1.jpg?ts=1696947295038",
    //     title: "Reversible Jacket",
    //     oldprice: 89,
    //     price: 65,
    // },
    // {
    //     id: 4,
    //     img: "https://static.zara.net/photos///2023/I/0/1/p/6365/792/801/2/w/750/6365792801_1_1_1.jpg?ts=1696948061457",
    //     title: "Pinstripe Pants",
    //     oldprice: 65,
    //     price: 30,
    // },


    // ];

    // const [products, setProducts]=useState([]);

    // const [data, setData]=useState([]);

    const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

//     useEffect(() =>{
// const fetchData = async () => {
//     const API_URL='http://localhost:1337/api'
//     const API_TOKEN='5a4ab61b1ce057a1835d0538700e346d30fe646d294a3056e8d646d5675a0eb374205f19e9bd379e7bea9414604f07e33cb2bbcbc7ee3993097df4e14e8161f3b2389cc3a2b730b732f05e1e381ff33ac124dfcc939a19129bdc5d423cd5a61272cb05bd3c0b01634969f09676e62fe120ae0fbdf22f25b64c1c6039bf90503b'
    
//     try{
//         const res = await axios.get(API_URL+ `/products?populate=*&[filters][type][$eq]=${type}`, {
//             headers: {
//                 Authorization: "bearer " + API_TOKEN,

//                },
//         });
//         // console.log(data);
//         setData(res.data.data)
//     } catch(err){
//         console.log(err)
//     }
// };
// fetchData();

//     }, []


//     );

    console.log(data);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem Ipsum Wagwan G
                </p>
            </div>
            <div className="bottom">
            {error
   ? "something went wrong!"
   : loading
   ? "loading"
   : Array.isArray(data)
   ? data.map((item) => <Card item={item} key={item.id} />)
   : "No data available"}

            </div>
        </div>
    )
}

export default FeaturedProducts
