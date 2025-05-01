import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/reducers/ProductSlice'
import styles from './ProductList.module.css'

const ProductList = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className={styles.productGrid}>
            {products.slice(0, 6).map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.cardBody}>
                        <h4>{product.title}</h4>
                        <p className={styles.price}>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList
