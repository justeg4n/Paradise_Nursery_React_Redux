import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css'; 
import CartItem from './CartItem';
import { addItem } from './redux/CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({}); // To track disabled buttons
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    // Calculate total items for Navbar
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599598425947-d3527e2467d1?q=80&w=1000", description: "Produces oxygen at night.", cost: 15 },
                { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484279-a29d03c6efdad3?q=80&w=1000", description: "Filters formaldehyde.", cost: 12 },
                { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55ce140705d?q=80&w=1000", description: "Removes mold spores.", cost: 18 }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1565728744382-5172b4af916c?q=80&w=1000", description: "Calming scent.", cost: 20 },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1000", description: "Sweet fragrance.", cost: 18 },
                { name: "Rosemary", image: "https://images.unsplash.com/photo-1597055181300-e30ba15f623a?q=80&w=1000", description: "Invigorating scent.", cost: 15 }
            ]
        },
        // We need 6 unique plants, but 3 categories. Let's add one more category.
        {
             category: "Insect Repellent Plants",
             plants: [
                 { name: "Marigold", image: "https://images.unsplash.com/photo-1606041011341-c97cb3814a0f?q=80&w=1000", description: "Repels mosquitoes.", cost: 10 },
                 { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1585675100412-22c5a4b60cc3?q=80&w=1000", description: "Soothing gel.", cost: 14 }
             ]
        }
    ];

   const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); 
    };
    
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); 
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
           ...prevState,
           [product.name]: true, // Disable the button for this product
         }));
    };

    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Green Meets Serenity</i>
                    </div>
                    </a>
               </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg>{totalItems}</h1></a></div>
            </div>
        </div>
        {!showCart? (
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h1><div className="product-list">{category.category}</div></h1>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <div className="product-title">{plant.name}</div>
                                    <div className="product-description">{plant.description}</div>
                                    <div className="product-cost">${plant.cost}</div>
                                    <button 
                                        className="product-button" 
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={addedToCart[plant.name]} // Disabled logic
                                    >
                                        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        ) :  (
            <CartItem onContinueShopping={handlePlantsClick}/>
        )}
    </div>
    );
}

export default ProductList;