import React, { useContext } from 'react';
import Item from '../components/Item';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = ({ category }) => {
    const { all_products } = useContext(ShopContext);

    return (
        <section id='foods' className='max-padd-container py-16 xl:py-28'>
            <div className='max-w-[622px] pb-20 mx-auto text-center'>
                <h3 className='h3 uppercase'>Your Chosen Flavors</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe paritur mollitia impedit quod perferendis. Tempore quo dolore, unde cumque porro obcaecati?</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {all_products.map((product) => (
                    (category === 'All' || category === product.category) && (
                        <div key={product._id}>
                            <Item product={product} />
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default ProductDisplay;
