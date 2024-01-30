import React, { useEffect, useState } from 'react'
import SideNote from './SideNote';

const SideNoteBar = ({changeContent, saveState}) => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    const fetchNotes = async ()=> {
      try {
        const response = await fetch("http://localhost:3001/api/notes");
        const results = await response.json();
        setData(results);
        console.log(data)
      } catch (error) {
        console.log(`An error occured: ${error}`);
      }
    }

    fetchNotes();
    
  },[saveState]);

  if(saveState)
  return null;

  if(!data)
  {
    return null;
  }

  else{
    return (
        <div className="flex w-2/12 bg-gray-600 flex-col overflow-y-scroll no-scrollbar">
            {data && (
                <ul>
                    {data.map(
                        (item: { doc: { title: string; content: string } }) => (
                            <li>
                                <SideNote
                                    title={item.doc.title}
                                    content={item.doc.content}
                                    changeContent={changeContent}
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
