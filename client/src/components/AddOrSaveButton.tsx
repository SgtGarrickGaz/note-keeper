import React from 'react'
import { MdAdd, MdOutlineSave } from 'react-icons/md';

const AddOrSaveButton = ({saveState,changeSaveState}) => {
  if(!saveState)
  return (
      <div className="p-3 bg-yellow-600 fixed bottom-4 right-4 rounded-full">
          <MdAdd className="text-3xl font-bold" onClick={changeSaveState} />
      </div>
  );

  else
  return (
      <div className="p-3 bg-yellow-600 fixed bottom-4 right-4 rounded-full">
          <MdOutlineSave className="text-3xl font-bold" onClick={changeSaveState} />
      </div>
  );
}

export default AddOrSaveButton
