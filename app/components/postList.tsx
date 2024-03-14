
import React from 'react';

interface PostListProps {
  items: any[];
  searchTerm: string;
  onSave: (item: any) => void;
}

const PostList: React.FC<PostListProps> = ({ items, searchTerm, onSave }) => {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id} className="border p-2 rounded-md mb-4">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-gray-600">{item.body}</p>
          <button onClick={() => onSave(item)} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
            Save
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
