import React from 'react'

interface mainContentInterface {
  title: string,
  content: string
}

const MainArea: React.FC<mainContentInterface> = ({title, content}) => {
  return (
      <div className="w-10/12 pl-6 pt-2">
          <div className="text-4xl pb-5 text-stone-200">
              {title}
          </div>
          <div className="text-2xl text-stone-300">{content}</div>
      </div>
  );
}

export default MainArea
