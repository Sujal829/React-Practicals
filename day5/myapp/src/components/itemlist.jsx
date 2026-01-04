import React, { useState } from "react";

function ItemList() {
  // Step 1: Create a list of data
  const items = [
    { id: 1, name: "Laptop", price: 55000, description: "Powerful i7 Processor" },
    { id: 2, name: "Mobile", price: 25000, description: "5G Enabled Smartphone" },
    { id: 3, name: "Headphones", price: 3000, description: "Noise Cancellation" },
  ];


  const [selectedItem, setSelectedItem] = useState(null); // useState is used to create and manage the state variable selectedItem. The initial value of selectedItem is set to null using the syntax setSelectedItem(null). This means that initially, no item will be selected.

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>🛍️ Product List</h2>
    {console.log("Mountiing phase")}
          {/* Step 4️: Display list of items */}
      <ul>
        {items.map((item) => (
          <li
            key={item.id}            // key prop is added with a unique identifier item.id to help React efficiently update the DOM when rendering the list.
            onClick={() => handleClick(item)}   // onClick event handler is attached to each li element. When clicked, it calls the handleClick function passing the current item as an argument.
           >            
            {item.name}
          </li>
        ))}
      </ul>
      {/* Step 5️: Display selected item details */}
      {selectedItem && (                        // If there's a selected item, display its details in a separate div.
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
      {/* Step 6️: Clear selection on button click */}
      <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
    </div>
  );
}
export default ItemList;
