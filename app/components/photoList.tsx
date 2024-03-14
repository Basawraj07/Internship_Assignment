
import React from 'react';

interface PhotoListProps {
  items: any[];
  searchTerm: string;
  onSave: (item: any) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ items, searchTerm, onSave }) => {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredItems.map(item => (
        <div key={item.id} className="border p-2 rounded-md">
          <img src={item.url} alt={item.title} className="w-full h-40 object-cover mb-2" />
          <p>{item.title}</p>
          <button onClick={() => onSave(item)} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
            Save
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
