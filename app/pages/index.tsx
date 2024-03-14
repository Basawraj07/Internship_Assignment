
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchPhotos,saveItem,unsaveItem,fetchPosts} from '../store/dashboardSlice';
import PhotoList from '../components/photoList';
import PostList from '../components/postList';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const { photos, posts } = useSelector((state: RootState) => state.dashboard);
  const [searchTerm, setSearchTerm] = useState('');

 

  const handleSaveItem = (item: any) => {
    dispatch(saveItem(item));
  };

  const handleUnsaveItem = (itemId: number) => {
    dispatch(unsaveItem(itemId));
  };

  return (
    <div className="container mx-auto mt-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Photos</h2>
          <PhotoList items={photos} searchTerm={searchTerm} onSave={handleSaveItem} />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Posts</h2>
          <PostList items={posts} searchTerm={searchTerm} onSave={handleSaveItem} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
