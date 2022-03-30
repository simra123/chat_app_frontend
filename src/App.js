//main components
import Form from './views/form'
import Chat from './views/chat'
//react hooks
import { useState } from 'react';
//context apis
import { User, AllMessages, ChatVisibility } from './useContext'

function App() {
  //allowing state update 
  const [name, setName] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [chat, setChat] = useState([])

  return (
    //passing globle variables to all existing child components
    <User.Provider value={ [name, setName] }>
      <AllMessages.Provider value={ [chat, setChat] }>
        <ChatVisibility.Provider value={ [showChat, setShowChat] }>

          <div className='single_page_app'>
            <Chat />
            <Form />
          </div>

        </ChatVisibility.Provider>
      </AllMessages.Provider>
    </User.Provider>
  );
}
//exporting component
export default App;
