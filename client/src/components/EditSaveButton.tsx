import axios from "axios";
import { useEditNoteStore, useSaveStateStore } from "../store"
import { BsPencilFill } from "react-icons/bs";

const EditSaveButton = () => {
  const setIsEdit = useEditNoteStore((state)=>state.setIsEditNote);
  const isEdit = useEditNoteStore((state)=>state.isEditNote);
  const editNoteTitle = useEditNoteStore((state) => state.editNoteTitle);
  const editNoteContent = useEditNoteStore((state) => state.editNoteContent);
  const editNoteId = useEditNoteStore((state)=>state.editNoteId);
  const editNoteRev = useEditNoteStore((state) => state.editNoteRev);
  const setSaveState = useSaveStateStore((state) => state.setSaveState);
  
  const handleEdit = () => {

      const doc = {
          title: editNoteTitle,
          content: editNoteContent,
          id: editNoteId,
          rev: editNoteRev
        }
        // console.log(doc);
        const res = axios.post("http://localhost:3001/api/edit", doc);
        res.then(() => {
        setIsEdit(false);
        setSaveState(false);
    }).catch((err) => {
        console.error(`error: ${err}`);
    });
  }

  return (
      isEdit && (
          <div className="p-3 bg-yellow-600 fixed bottom-4 right-4 rounded-full" onClick={handleEdit}>
              <BsPencilFill className="text-3xl font-bold" />
          </div>
      )
  );
}

export default EditSaveButton
