import React, { useState } from 'react'

interface mainContentInterface {
    title: string,
    content: string,
    saveState: boolean,
    handleTitleChange: any,
    handleContentChange: any
}

const MainArea: React.FC<mainContentInterface> = ({title, content, saveState, handleTitleChange, handleContentChange}) => {

  if(!saveState)
  return (
      <div className=" pl-6 pt-2">
          <div className="text-4xl pb-5 text-stone-200">
            {title}
          </div>
          <div className="text-2xl text-stone-300">
            {content}
          </div>
      </div>
  );

  else
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

export default MainArea
