import { useEffect } from 'react'
import SideNote from './SideNote';
import { useMainContentStore, useNoteDataStore, useSaveStateStore } from '../store';

const SideNoteBar = () => {
  const saveState = useSaveStateStore((state) => state.saveState);
  const setMainContent = useMainContentStore((state) => state.setMainContent);
  // const [data, setData] = useState(null);

  const noteData = useNoteDataStore((state)=>state.noteData);
  const setNoteData = useNoteDataStore((state)=>state.setNoteData);

  useEffect(()=>{
    const fetchNotes = async ()=> {
      try {
        const response = await fetch("http://localhost:3001/api/notes");
        const results = await response.json();
        setNoteData(results);
        // console.log(data)
      } catch (error) {
        console.log(`An error occured: ${error}`);
      }
    }

    fetchNotes();
    
  },[saveState]);

  if(saveState)
  return null;

  if(!noteData || noteData.length === 0)
  {
    return <div className='text-gray-500 w-full flex justify-center flex-grow items-center text-3xl pb-16'>
      Create a Note
    </div>
  }

  else{
    console.log(noteData)
    return (
        <div className="flex w-2/12 bg-gray-600 flex-col overflow-y-scroll no-scrollbar">
            {noteData && (
                <ul>
                    {noteData?.map(
                        (item: { doc: { _id: string, _rev:string, title: string, content: string }} ) => (
                            <li key={item.doc._id}>
                                <SideNote
                                    title={item.doc.title}
                                    content={item.doc.content}
                                    changeContent={()=>{setMainContent({title:item.doc.title ,content:item.doc.content})}}
                                    id={item.doc._id}
                                    rev={item.doc._rev}
                                />
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );}
}

export default SideNoteBar
