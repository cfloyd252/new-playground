import React from 'react';
import Messages from './Messages'

function App() {
  return (
    <main className='App'>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
    </main>
  );
}

export default App;