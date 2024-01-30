import { useState } from 'react'
import SideNoteBar from './components/SideNoteBar';
import MainArea from './components/MainArea';
import AddOrSaveButton from './components/AddOrSaveButton';
import axios from 'axios';

interface ContentInterface {
    title: string;
    content: string;
}

function App() {
      const [mainContent, setMainContent] = useState<ContentInterface>({
          title: "",
          content: "",
      });

      const [saveState, setSaveState] = useState(false);

      async function changeSaveState() {

        if(saveState){
            const doc = {
                title: newNoteTitle,
                content: newNoteContent
            };

            if(doc.title==='' || doc.content==='')
            {
                setSaveState(!saveState);
                setMainContent({
                    title: "",
                    content: "",
                });
                return;
            }
            else
            {
                try {
                    const response = await axios.post(
                        "http://localhost:3001/api/save",
                        doc
                    );
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
                console.log({ newNoteTitle, newNoteContent });
                setSaveState(!saveState);
                setMainContent({
                    title: "",
                    content: "",
                });
            }            
        }

        setSaveState(!saveState);
        setMainContent({
            title:"",
            content:""
        })
      }

      function changeContent(item: ContentInterface) {
          setMainContent({
              title: item.title,
              content: item.content,
          });
      }

        const [newNoteTitle, setNewNoteTitle] = useState("");
        const [newNoteContent, setNewNoteContent] = useState("");

        const handleTitleChange = (event) => {
            setNewNoteTitle(event.target.value);
        };

        // Event handler to update the content state
        const handleContentChange = (event) => {
            setNewNoteContent(event.target.value);
        };

      return (
          <div className="flex flex-col min-h-screen w-screen">
              <h1 className="text-yellow-500 text-3xl justify-center p-5">
                  Note App
              </h1>
              <div className="flex flex-grow">
                  {/* <div className=''> */}
                      <SideNoteBar changeContent={changeContent} saveState={saveState} />
                  {/* </div> */}
                  <div className="">
                      <MainArea
                          title={mainContent.title}
                          content={mainContent.content}
                          saveState = {saveState}
                          handleTitleChange = {handleTitleChange}
                          handleContentChange = {handleContentChange}
                      />
                      <AddOrSaveButton saveState={saveState} changeSaveState={changeSaveState}/>
                  </div>
              </div>
          </div>
      );
}

export default App
