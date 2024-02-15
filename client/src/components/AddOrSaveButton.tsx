import { MdAdd, MdOutlineSave } from 'react-icons/md';
import { useEditNoteStore, useMainContentStore, useNewNoteStore, useSaveStateStore } from '../store';
import axios from 'axios';

const AddOrSaveButton = () => {
    const saveState = useSaveStateStore((state)=>state.saveState);
    const setSaveState = useSaveStateStore((state)=>state.setSaveState);
    const newNoteTitle = useNewNoteStore((state)=>state.newNoteTitle)
    const newNoteContent = useNewNoteStore((state)=>state.newNoteContent)
    const setNewNoteTitle = useNewNoteStore((state)=>state.setNewNoteTitle)
    const setNewNoteContent = useNewNoteStore((state)=>state.setNewNoteContent)
    const setMainContent = useMainContentStore((state)=>state.setMainContent)
    const isEdit = useEditNoteStore((state) => state.isEditNote);

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
                .catch (error=>{console.error(error)}) 
                // console.log({ newNoteTitle, newNoteContent });
                return;
            }            
        }
                setSaveState(!saveState);
                setMainContent({
                    title: "",
                    content: "",
                });
    }
  if(!saveState)
  return (
    !isEdit &&
      <div className="p-3 bg-yellow-600 fixed bottom-4 right-4 rounded-full">
          <MdAdd className="text-3xl font-bold" onClick={changeSaveState} />
      </div>
  );

  else
  return (
    !isEdit &&
      <div className="p-3 bg-yellow-600 fixed bottom-4 right-4 rounded-full">
          <MdOutlineSave className="text-3xl font-bold" onClick={changeSaveState} />
      </div>
  );
}


export default AddOrSaveButton;
