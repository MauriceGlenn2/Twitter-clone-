import Feed from './Feed.js';
import './App.css';
import Sidebar from './Sidebar.js';
// import Widgets from './Widgets.js';



function App() {
  return (
    <div className="app">
      <h1></h1>
      {/* sidebar */}
      <Sidebar />
   
      {/* feed */}
      <Feed />

      {/* widget */}
      {/* <Widgets /> */}
    </div>
  );
}

export default App;
