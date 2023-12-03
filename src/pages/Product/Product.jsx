import React from 'react'
import "./Product.scss"
import {useState} from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          {data && data.attributes && (
            <div className="left">
              <div className="images">
                {data.attributes.img && (
                  <img
                    src={'http://localhost:1337' + data.attributes.img.data.attributes.url}
                    alt=""
                    onClick={(e) => setSelectedImg("img")}
                  />
                )}
                {data.attributes.img2 && (
                  <img
                    src={'http://localhost:1337' + data.attributes.img2.data.attributes.url}
                    alt=""
                    onClick={(e) => setSelectedImg("img2")}
                  />
                )}
              </div>
              <div className="mainImg">
                {data.attributes[selectedImg] && (
                  <img
                    src={'http://localhost:1337' + data.attributes[selectedImg].data.attributes.url}
                    alt=""
                  />
                )}
              </div>
            </div>
          )}
          {data && data.attributes && (
            <div className="right">
              <h1>{data.attributes.title}</h1>
              <span className="price">${data.attributes.price}</span>
              <p>{data.attributes.desc}</p>
              // ... rest of your right div code
              <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            </div>
          )}
        </>
      )}
    </div>
  );
  
}

export default Product
