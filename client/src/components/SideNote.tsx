import React from 'react'

interface sideNoteProps {
    title: string;
    content: string;
    changeContent: any;
};

const SideNote: React.FC<sideNoteProps> = ({title, content, changeContent}) => {
  
  const handleClick = () => {
    changeContent({
      title: title,
      content: content
    })
  }

  return (
    <div className='text-slate-300 round p-3 border-2 border-gray-700 hover:bg-slate-500 transition-all duration-300' onClick={handleClick}>
      <h1 className='font-semibold'>{title}</h1>
      <h3>{content}</h3>
    </div>
  )
}

export default SideNote
