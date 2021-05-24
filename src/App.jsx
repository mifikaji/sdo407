import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const Profile =()=>{
  return <h1>This is profile's page</h1>
}
const Messages =()=>{
  return <h1>This is your messages</h1>
}
const Seyyings =()=>{
  return <h1>Settings</h1>
}
const Friends =()=>{
  return <h1>Find your friends here</h1>
}
const Menu =()=>{
  return 
}
function App() {
  return
  <div className="container-fluid">
    <BrowserRouter>
    <div class="row">
      <div className="col-sm-3">
       <Menu/>
      </div>
    
      <div className="col-sm-9">
      <BrowserRouter>
      <Route path='/profile' component {Profile}/>
      <Route path='/messages' component {Messages}/>
      <Route path='/settings' component {Settings}/>
      <Route path='/friends' component {Friends}/>
      </BrowserRouter>
      </div>
    </div>
    </BrowserRouter>
  </div>
}
export default App;
