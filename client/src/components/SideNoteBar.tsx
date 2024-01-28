import React, { useEffect, useState } from 'react'
import SideNote from './SideNote';

const SideNoteBar = () => {
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
    
  },[]);

  if(!data)
  {
    return null;
  }

  else{
    return (
        <div>
            {data && (
                <ul>
                    {data.map((item: { doc: { title: string; content: string; }; }) => (
                        <li><SideNote title={item.doc.title} content={item.doc.content}/></li>
                    ))}
                </ul>
            )}
        </div>
    )}
}

export default SideNoteBar
