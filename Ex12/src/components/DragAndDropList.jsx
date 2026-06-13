import { useState } from 'react';

export default function DrapAndDropList() {
    
  const [items, setItems] = useState([
    'Hang thu nhat',
    'Hang thu hai',
    'Hang thu ba',
    'Hang thu tu',
    'Hang thu nam'
  ]);
  
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index); 
  };

  const handleDragOver = (e, targetIndex) => {
    e.preventDefault(); 

    if (draggingItem === targetIndex) return;

    const updatedItems = [...items];

    const [removedItem] = updatedItems.splice(draggingItem, 1);

    updatedItems.splice(targetIndex, 0, removedItem);

    setDraggingItem(targetIndex);

    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Danh sách Drag & Drop</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} draggable 
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)} 
            onDragEnd={handleDragEnd} 
            style={{ padding: '15px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'move', transition: 'background-color 0.2s ease',
              backgroundColor: draggingItem === index ? '#e6f7ff' : '#f4f4f4',
              opacity: draggingItem === index ? 0.5 : 1 
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};