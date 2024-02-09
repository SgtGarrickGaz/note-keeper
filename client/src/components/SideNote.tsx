import axios from 'axios';
import { useDeleteNoteStore, useMainContentStore } from '../store';

interface sideNoteProps {
    title: string;
    content: string;
    id: string;
    rev: string;
};

const SideNote: React.FC<sideNoteProps> = ({title, content, id, rev}) => {
  const setMainContent = useMainContentStore((state)=>state.setMainContent);
  const setDeletedNoteId = useDeleteNoteStore((state)=> state.setDeletedNoteId);
  const handleClick = () => {
    setMainContent({
      title: title,
      content: content
    })
  }

  const handleEdit = () => {
    console.log(`Edit button pressed`);
  }
  const handleDelete = async () => {
    const doc = {
      id:id,
      rev : rev
    };
    const res = await axios.post(`http://localhost:3001/api/delete/`,
    doc);
    
    setDeletedNoteId(id);
    setMainContent({title:"", content:""})
      
  };

  return (
      <div className="flex justify-between text-slate-300 round p-3 border-2 border-gray-700 hover:bg-slate-500 transition-all duration-300">
          <div onClick={handleClick} className="left-1 flex-grow">
              <h1 className="font-semibold">{title}</h1>
              <h3>{content}</h3>
          </div>
          <div className="right-1">
              <p onClick={handleEdit}>Edit</p>
              <p onClick={handleDelete}>Delete</p>
          </div>
      </div>
  );
}

export default SideNote
