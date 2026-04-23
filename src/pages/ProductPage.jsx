import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Product from '../components/ui/Product';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductSkeleton from '../components/ui/ProductSkeleton';
import ProductPageSkeleton from '../components/ProductPageSkeleton';
import Success from '../components/ui/Success';

const ProductPage = () => {
    const { products, addToCart } = useContext(AppContext)
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [loading, setLoading] = useState(true)
    async function fetchProduct() {
        try {
            const { data } = await axios.get(`https://ecommerce-samurai.up.railway.app/product/${id}`)
            const result = data.data
            setSelectedProduct(result)
            setSelectedImage(result.images[0])
            setLoading(false)
        } catch (error) {
            alert(error)
        }

    }
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        setLoading(true)
        window.scroll(0, 0)
        fetchProduct()
    }, [id])
    return (
        <main className='products__main'>
            <Success />
            <div className="container">
                <div className="row products-page__row">
                    {loading ?
                        <ProductPageSkeleton /> :
                        <>
                            <div className="selected-product">
                                <div className="selected-product__left">
                                    <figure className="selected-product__img__wrapper">
                                        <img src={`https://ecommerce-samurai.up.railway.app/${selectedImage}`} alt="" className="selected-product__img" />
                                    </figure>
                                    <div className="selected-product__img__options">
                                        {
                                            selectedProduct?.images.map((image, index) => (
                                                <img onClick={() => setSelectedImage(image)} key={index} src={`https://ecommerce-samurai.up.railway.app/${image}`} alt="" className="selected-product__img__option" />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="selected-product__right">
                                    <h1 className="selected-product__title">
                                        {selectedProduct?.name}
                                    </h1>
                                    <p className="selected-product__para">
                                        {selectedProduct?.description}
                                    </p>
                                    <div className="selected-product__quantity">
                                        <span className="selected-product__quantity__span selected-product__quantity__span-1">
                                            Quantity
                                        </span>
                                        <div className="selected-product__quantity__wrapper">
                                            <button className="selected-product__quantity__btn" onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}>
                                                -
                                            </button>
                                            <div className="selected-product__quantity__amount">
                                                {quantity}
                                            </div>
                                            <button className="selected-product__quantity__btn" onClick={() => setQuantity((prev) => prev + 1)} >
                                                +
                                            </button>
                                        </div>
                                        <span className="selected-product__quantity__span selected-product__quantity__span-2">
                                            ${selectedProduct?.price * quantity}
                                        </span>
                                    </div>
                                    <button className="selected-product__add" onClick={() => addToCart(selectedProduct, quantity)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="specifications">
                                <div className="spec">
                                    <h2 className="spec__title">
                                        Weight
                                    </h2>
                                    <span className="spec__detail">
                                        {selectedProduct?.weight}
                                    </span>
                                </div>
                                <div className="spec">
                                    <h2 className="spec__title">
                                        Texture
                                    </h2>
                                    <span className="spec__detail">
                                        {selectedProduct?.texture}
                                    </span>
                                </div>
                                <div className="spec">
                                    <h2 className="spec__title">
                                        Size
                                    </h2>
                                    <span className="spec__detail">
                                        {selectedProduct?.size}
                                    </span>
                                </div>
                            </div>
                        </>
                    }
                    <div className="recommendations">
                        <h2 className="products__title">
                            Trending Now
                        </h2>
                        <div className="products__list">
                            {products.length > 0 && !loading ?
                                products
                                    .filter(product => product.id !== selectedProduct.id)
                                    .slice(0, 4)
                                    .map(product => (
                                        <Product product={product} key={product.id} />
                                    )) :
                                new Array(4).fill(0).map((_, index) => <ProductSkeleton key={index} />)}
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default ProductPage;
