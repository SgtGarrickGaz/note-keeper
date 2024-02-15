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

type EditNoteStore = {
  isEditNote: boolean; //If true then editing page will open
  editNoteTitle: string;
  editNoteContent: string;
  editNoteId: string;
  editNoteRev: string;

  setIsEditNote: (edit:boolean)=>void;
  setEditNoteTitle: (title:string)=>void;
  setEditNoteContent: (content:string)=> void;
  setEditNoteId: (id:string)=>void;
  setEditNoteRev: (rev:string)=>void;
}




export const useSaveStateStore = create<SaveStateStore>((set) => ({
  saveState: false, //if false, then sidebar will be shown
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

export const useEditNoteStore = create<EditNoteStore>((set)=>({
  isEditNote: false,
  editNoteTitle: "",
  editNoteContent:"",
  editNoteId:"",
  editNoteRev:"",
  setIsEditNote: (edit:boolean) => {
    set({isEditNote: edit})
  },
  setEditNoteTitle: (title) => {
    set({editNoteTitle: title})
  },
  setEditNoteContent: (content) => {
    set({editNoteContent: content})
  },
  
  setEditNoteId: (id) => {
    set({editNoteId: id})
  },

  
  setEditNoteRev: (rev) => {
    set({ editNoteRev: rev })
  }
}))


// If edit is true, change the save button functionality to override and then make api call.