import React, { useState, useEffect } from "react";

function ItemList() {
  const items = [
    { id: 1, name: "Laptop", price: 55000, description: "Powerful i7 Processor" },
    { id: 2, name: "Mobile", price: 25000, description: "5G Enabled Smartphone" },
    { id: 3, name: "Headphones", price: 3000, description: "Noise Cancellation" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log("🟢 Mounting phase: Component mounted");
  },[]);
  
  useEffect(() => {
    if(selectedItem == null){
        console.log("🔴 Unmounting phase: Component will unmount")
    }
  },[selectedItem]);

  useEffect(() => {
    if (selectedItem !== null) {
      console.log("🟠 Updating phase: selectedItem changed");
    }
  }, [selectedItem]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>🛍️ Product List</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
            style={{
              cursor: "pointer",
              color: selectedItem?.id === item.id ? "blue" : "black",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div>
          <h3>📦 Product Details</h3>
          <p>
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

      <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
    </div>
  );
}

export default ItemList;
