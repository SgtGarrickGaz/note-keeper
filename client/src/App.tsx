import { useState } from 'react'
import './App.css'
import SideNote from './components/SideNote';
interface ContentInterface {
    title: string;
    content: string;
}

function App() {
      const [mainContent, setMainContent] = useState<ContentInterface>({
          title: "",
          content: "",
      });

      function changeContent(item: ContentInterface) {
          setMainContent({
              title: item.title,
              content: item.content,
          });
      }

      return (
          <div className="flex flex-col min-h-screen w-screen">
              <h1 className="text-yellow-500 text-3xl justify-center p-5">
                  Note App
              </h1>
              <div className="flex flex-grow">
                  <div className="flex-grow w-[15px] bg-gray-600 flex-col overflow-y-scroll no-scrollbar">
                      <SideNote
                          title="abcd"
                          content="efgh"
                          change={() =>
                              changeContent({ title: "abcd", content: "efgh" })
                          }
                      />
                      <SideNote
                          title="Abhay"
                          content="preet"
                          change={() =>
                              changeContent({
                                  title: "Abhay",
                                  content: "preet",
                              })
                          }
                      />
                  </div>
                  <div className="w-10/12 pl-6 pt-2">
                      <div className="text-4xl pb-5 text-stone-200">
                          {mainContent.title}
                      </div>
                      <div className="text-2xl text-stone-300">
                          {mainContent.content}
                      </div>
                  </div>
              </div>
          </div>
      );
}

export default App
