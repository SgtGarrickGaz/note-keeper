import axios from 'axios';
import { useDeleteNoteStore, useEditNoteStore, useMainContentStore, useSaveStateStore } from '../store';

interface sideNoteProps {
    title: string;
    content: string;
    id: string;
    rev: string;
};

const SideNote: React.FC<sideNoteProps> = ({title, content, id, rev}) => {
  const setMainContent = useMainContentStore((state)=>state.setMainContent);
  const setDeletedNoteId = useDeleteNoteStore((state)=> state.setDeletedNoteId);
  const setIsEditNote = useEditNoteStore((state)=>state.setIsEditNote);
  const setEditNoteTitle = useEditNoteStore((state)=>state.setEditNoteTitle);
  const setEditNoteContent = useEditNoteStore((state)=>state.setEditNoteContent);
  const setEditNoteId = useEditNoteStore((state)=>state.setEditNoteId);
  const setEditNoteRev = useEditNoteStore((state) => state.setEditNoteRev);
  const setSaveState = useSaveStateStore((state)=>state.setSaveState);
  
  
  const handleClick = () => {
    setMainContent({
      title: title,
      content: content
    })
  }
  
  const handleEdit = () => {
    setSaveState(true);
    setEditNoteId(id);
    setEditNoteRev(rev);
    setEditNoteTitle(title);
    setEditNoteContent(content);
    setIsEditNote(true);
  }
  
  const handleDelete = async () => {
    const doc = {
      id : id,
      rev : rev
    };
    await axios.post(`http://localhost:3001/api/delete/`,
    doc);
    setDeletedNoteId(id);      
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
