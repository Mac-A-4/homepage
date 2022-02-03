import './Reset.css';
import './App.css';

import Splash from './Splash';
import Top from './Top';
import Resume from './Resume';
import Experience from './Experience';

export default function App() {
  return (
    <div>
      <Top/>
      <Splash/>
      <Resume/>
      <Experience/>
    </div>
  );
}
