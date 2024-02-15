import SideNoteBar from './components/SideNoteBar';
import MainArea from './components/MainArea';
import AddOrSaveButton from './components/AddOrSaveButton';
import EditSaveButton from './components/EditSaveButton';


function App() {

      return (
          <div className="flex flex-col min-h-screen w-screen">
              <h1 className="text-yellow-500 text-3xl justify-center p-5">
                  Note App
              </h1>
              <div className="flex flex-grow">
                      <SideNoteBar />
                  <div className="">
                      <MainArea />
                      <AddOrSaveButton />
                      <EditSaveButton/>
                  </div>
              </div>
          </div>
      );
}

export default App
