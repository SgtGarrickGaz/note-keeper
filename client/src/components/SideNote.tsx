import React, { useEffect } from 'react'
import axios from 'axios';

interface sideNoteProps {
    title: string;
    content: string;
    changeContent: any;
    id: string;
    rev: string;
};

const SideNote: React.FC<sideNoteProps> = ({title, content, changeContent, id, rev}) => {
  
  const handleClick = () => {
    changeContent({
      title: title,
      content: content
    })
  }

  const handleEdit = () => {
    console.log(`Edit button pressed`);
  }
  const handleDelete = async () => {
      console.log(`Delete button pressed`);
      const doc = {
        id:id,
        rev : rev
      };
      const res = await axios.post(`http://localhost:3001/api/delete/`,
      doc);
      
      window.location.reload();
      
  };

  return (
      <div className="flex justify-between text-slate-300 round p-3 border-2 border-gray-700 hover:bg-slate-500 transition-all duration-300">
          <div onClick={handleClick} className='left-1'>
              <h1 className="font-semibold">{title}</h1>
              <h3>{content}</h3>
          </div>
          <div className='right-1'>
            <p onClick={handleEdit}>Edit</p>
            <p onClick={handleDelete}>Delete</p>
          </div>
      </div>
  );
}

export default SideNote
