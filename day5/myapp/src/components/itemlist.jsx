import React, { useState } from "react";

function ItemList() {
  const items = [
    { id: 1, name: "Laptop", price: 55000, description: "Powerful i7 Processor" },
    { id: 2, name: "Mobile", price: 25000, description: "5G Enabled Smartphone" },
    { id: 3, name: "Headphones", price: 3000, description: "Noise Cancellation" },
  ];


  const [selectedItem, setSelectedItem] = useState(null); 

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>🛍️ Product List</h2>
    {console.log("Mountiing phase")}
      <ul>
        {items.map((item) => (
          <li
            key={item.id}           
            onClick={() => handleClick(item)}  
           >            
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && ( 
        <div>
          <h3>📦 Product Details</h3>
          <p> {console.log("Updating phase")}
            <strong>Name:</strong> {selectedItem.name}
          </p>
          <p>
            <strong>Price:</strong> ₹{selectedItem.price}
          </p>
          <p>
            <strong>Description:</strong> {selectedItem.description}
          </p>
        </div>
      )}
      {selectedItem===null &&
      console.log("Unmounting phase")
      }
      <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
    </div>
  );
}
export default ItemList;
