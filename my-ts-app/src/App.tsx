
import React from 'react';
import WelcomeMessage from './component/message';

const App: React.FC = () => {
  return(
    <div>
      <WelcomeMessage name="현수" />
      <WelcomeMessage name="아용" />
      <WelcomeMessage name="지혜" />
    </div>
  )
}

export default App;
