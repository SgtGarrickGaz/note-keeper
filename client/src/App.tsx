import SideNoteBar from './components/SideNoteBar';
import MainArea from './components/MainArea';
import AddOrSaveButton from './components/AddOrSaveButton';
import axios from 'axios';
import { useMainContentStore, useNewNoteStore, useSaveStateStore } from './store';


function App() {
    // const [mainContent, setMainContent] = useState<ContentInterface>({
    //     title: "",
    //     content: "",
    // });
    
    // const [saveState, setSaveState] = useState(false);
    // const [newNoteTitle, setNewNoteTitle] = useState("");
    // const [newNoteContent, setNewNoteContent] = useState("");

    const mainContent = useMainContentStore((state)=>state.mainContent);
    const saveState = useSaveStateStore((state)=>state.saveState);
    const newNoteTitle = useNewNoteStore((state)=>state.newNoteTitle);
    const newNoteContent = useNewNoteStore((state) => state.newNoteContent);
    const setSaveState = useSaveStateStore((state)=>state.setSaveState);
    const setMainContent = useMainContentStore((state)=>state.setMainContent);
    const setNewNoteTitle = useNewNoteStore((state)=>state.setNewNoteTitle);
    const setNewNoteContent = useNewNoteStore((state)=>state.setNewNoteContent);

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
                const response = axios.post(
                    "http://localhost:3001/api/save",
                    doc
                );
                response.then(()=>{
                    setSaveState(!saveState);
                    setMainContent({
                        title: "",
                        content: "",
                    });
                    setNewNoteTitle('');
                    setNewNoteContent('');


                }) 
                .catch (error=>{console.log(error)}) 
                    // console.error(error);
                console.log({ newNoteTitle, newNoteContent });
                return;
            }            
        }

        setSaveState(!saveState);
        setMainContent({
            title:"",
            content:""
        })
      }



        const handleTitleChange = (event: { target: { value: string; }; }) => {
            setNewNoteTitle(event.target.value);
        };

        // Event handler to update the content state
        const handleContentChange = (event: { target: { value: string; }; }) => {
            setNewNoteContent(event.target.value);
        };

      return (
          <div className="flex flex-col min-h-screen w-screen">
              <h1 className="text-yellow-500 text-3xl justify-center p-5">
                  Note App
              </h1>
              <div className="flex flex-grow">
                  {/* <div className=''> */}
                      <SideNoteBar />
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
