import { useState } from "react";
import "./Products.css";

const bannerItems = [
  {
    image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6",
    name: "Lipstick Red",
    beforePrice: "$25.00",
    afterPrice: "$15.00",
    description: "High-quality matte lipstick with long-lasting effect."
  },
  {
    image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6",
    name: "Liquid Foundation",
    beforePrice: "$40.00",
    afterPrice: "$30.00",
    description: "Smooth liquid foundation for a flawless finish."
  },
  {
    image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6",
    name: "Eyeshadow Palette",
    beforePrice: "$35.00",
    afterPrice: "$25.00",
    description: "Vibrant eyeshadow palette with multiple shades."
  }
];

const products = {
  "Marca 1": [
    { name: "Lip Gloss", price: "$12.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Blush", price: "$18.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Mascara", price: "$22.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Concealer", price: "$20.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Bronzer", price: "$24.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" }
  ],
  "Marca 2": [
    { name: "Lipstick", price: "$15.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Highlighter", price: "$28.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Eyeliner", price: "$14.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "BB Cream", price: "$26.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" }
  ],
  "Marca 3": [
    { name: "Primer", price: "$30.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Lip Liner", price: "$10.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Setting Spray", price: "$22.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Brow Gel", price: "$18.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Makeup Sponge", price: "$8.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Contour Kit", price: "$35.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" }
  ],
  "Marca 4": [
    { name: "Compact Powder", price: "$19.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Makeup Remover", price: "$16.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" },
    { name: "Nail Polish", price: "$12.00", image: "https://us.123rf.com/450wm/alexrooss/alexrooss2308/alexrooss230809426/210434220-soft-blush-and-lavender-minimalist-mountain-landscape-wallpaper-ai-generated.jpg?ver=6" }
  ]
};

export default function Products() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerItems.length);
  };

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  const handleAddToCart = (product) => {
    setAddedItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="products-container">
      <div className="banner" style={{ backgroundImage: `url(${bannerItems[currentBanner].image})` }}>
        <button className="banner-btn left" onClick={handlePrev}>❮</button>
        <div className="banner-content">
          <h2>{bannerItems[currentBanner].name}</h2>
          <p className="before-price">{bannerItems[currentBanner].beforePrice}</p>
          <p className="after-price">{bannerItems[currentBanner].afterPrice}</p>
          <button className="add-to-cart" onClick={() => handleAddToCart(bannerItems[currentBanner])}>Agregar</button>
        </div>
        <button className="banner-btn right" onClick={handleNext}>❯</button>
      </div>

      {Object.keys(products).map((brand) => (
        <div key={brand} className="brand-section">
          <h3>{brand}</h3>
          <div className="products-grid">
            {products[brand].map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Agregar</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h4>Productos Agregados:</h4>
        <ul>
          {addedItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
