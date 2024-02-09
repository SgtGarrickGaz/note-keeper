import { create } from "zustand";

//App.tsx

type SaveStateStore = {
  saveState: boolean;
  setSaveState: (newSaveState:boolean) => void;
}

type NewNoteStore = {
  newNoteTitle: string;
  setNewNoteTitle: (title:string) => void;
  newNoteContent: string;
  setNewNoteContent: (content: string) => void;
}

type MainContentStore = {
  mainContent: {
    title: string,
    content: string
  }
  setMainContent: ({title, content}:{title:string,content:string}) => void;
}

type NoteDataStore = {
  noteData: any[];
  setNoteData: (results:any[]) => void;
}

type DeleteNoteStore = {
  deletedNoteId: string;
  setDeletedNoteId: (id:string) => void;
}




export const useSaveStateStore = create<SaveStateStore>((set) => ({
  saveState: false,
  setSaveState: (newSaveState) => {
    set(({saveState:newSaveState}));
  }
}));

export const useNewNoteStore = create<NewNoteStore>((set) => ({
  newNoteTitle: "",
  newNoteContent: "",

  setNewNoteTitle: (title: string) => {
    set(({newNoteTitle: title}));
  },
  setNewNoteContent: (content: string) => {
    set(({newNoteContent: content}));
  }
}));

export const useMainContentStore = create<MainContentStore>((set)=>({
  mainContent: {
    title:"",
    content:""
  },
  setMainContent: ({title,content}) => {
    set(({mainContent: {title,content}}));
  }
}))

export const useNoteDataStore = create<NoteDataStore>((set)=>({
  noteData: [],
  setNoteData: (results: any[]) => {
    set(({noteData: results}))
  }
}))

export const useDeleteNoteStore = create<DeleteNoteStore>((set)=>({
  deletedNoteId: "",
  setDeletedNoteId:(id: string) => {
    set(({deletedNoteId: id}))
  }
}))