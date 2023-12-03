import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'



const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://static.zara.net/photos///2023/V/0/2/p/6318/343/800/2/w/750/6318343800_1_1_1.jpg?ts=1681398358934" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                    </div>
                <div className="row">
                <img src="https://static.zara.net/photos//contents/mkt/spots/aw23-north-woman-man-barbie/layout-editorial//aw23-north-woman-man-barbie.layout-editorial.layout-1920-0ab55ee151028e081d06af7c78fc66f63fe1ac46-FILL-0.799_0.jpg?ts=1698747337288&imwidth=1530" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
            <div className="row">
            <img src="https://static.zara.net/photos///2023/I/T/2/p/0472/939/318/2/w/772/0472939318_15_2_1.jpg?ts=1693996891448" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>
            </div>
            </div>
            <div className="col col-l">
                <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://static.zara.net/photos//contents/mkt/spots/aw23-north-woman-man-barbie/layout-lookbook//aw23-north-woman-man-barbie.layout-lookbook.layout-1920-e355528823fd90b83ae1373b579ca3e6859fd6b0-FILL-0.666_0.jpg?ts=1698747338854&imwidth=575" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://static.zara.net/photos///2023/I/0/2/p/9065/357/330/2/w/297/9065357330_6_1_1.jpg?ts=1695809970751" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">Accessories</Link>
                    </button>
                    </div>
                </div>
                </div>
                <div className="row">
                <img src="https://static.zara.net/photos///2023/I/1/2/p/2023/220/800/2/w/297/2023220800_6_1_1.jpg?ts=1694079521127" alt="" srcset=""/>
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
