import { useEditNoteStore, useMainContentStore, useNewNoteStore, useSaveStateStore } from "../store";

const MainArea = () => {
    const title = useMainContentStore((state)=>state.mainContent.title);
    const content = useMainContentStore((state) => state.mainContent.content);
    const saveState = useSaveStateStore((state)=>state.saveState);
    const setNewNoteTitle = useNewNoteStore((state) => state.setNewNoteTitle);
    const setNewNoteContent = useNewNoteStore((state) => state.setNewNoteContent);
    const isEditNote = useEditNoteStore((state)=>state.isEditNote);
    const editNoteTitle = useEditNoteStore((state)=>state.editNoteTitle);
    const editNoteContent = useEditNoteStore((state) => state.editNoteContent);
    const setEditNoteTitle = useEditNoteStore((state) => state.setEditNoteTitle);
    const setEditNoteContent = useEditNoteStore((state) => state.setEditNoteContent);

    const handleTitleChange = (event: { target: { value: string } }) => {
        if(isEditNote)
        {
            setEditNoteTitle(event.target.value);
        }
        else
        setNewNoteTitle(event.target.value);
    };

    // Event handler to update the content state
    const handleContentChange = (event: { target: { value: string } }) => {
        if(isEditNote)
        {
            setEditNoteContent(event.target.value);
        }
        else
        setNewNoteContent(event.target.value);
    };

    if(isEditNote)
    {
        return (
            <div className="pl-6 pt-2 flex flex-col flex-grow w-screen h-full">
                <input
                    className="mb-3 border-none mr-3 p-2 bg-[#242424] flex-grow text-3xl"
                    type="text"
                    placeholder="Enter title"
                    onChange={handleTitleChange}
                    value={editNoteTitle}
                />

                <textarea
                    className="border-none bg-[#242424] mr-3 text-2xl h-full mb-3 resize-none overflow-y-scroll p-2"
                    placeholder="Enter content"
                    onChange={handleContentChange}
                    value={editNoteContent}
                />
                {/* <div className="text-4xl pb-5 text-stone-200">Write the Title</div>
                <div className="text-2xl text-stone-300">Write the Content</div> */}
            </div>
        );
    }

    else
    {
            if (!saveState)
                return (
                    <div className=" pl-6 pt-2">
                        <div className="text-4xl pb-5 text-stone-200">
                            {title}
                        </div>
                        <div className="text-2xl text-stone-300">{content}</div>
                    </div>
                );
            else if (saveState)
                return (
                    <div className="pl-6 pt-2 flex flex-col flex-grow w-screen h-full">
                        <input
                            className="mb-3 border-none mr-3 p-2 bg-[#242424] flex-grow text-3xl"
                            type="text"
                            placeholder="Enter title"
                            onChange={handleTitleChange}
                        />

                        <textarea
                            className="border-none bg-[#242424] mr-3 text-2xl h-full mb-3 resize-none overflow-y-scroll p-2"
                            placeholder="Enter content"
                            onChange={handleContentChange}
                        />
                        {/* <div className="text-4xl pb-5 text-stone-200">Write the Title</div>
                <div className="text-2xl text-stone-300">Write the Content</div> */}
                    </div>
                );
    }

}

export default MainArea
