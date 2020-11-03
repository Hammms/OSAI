import React, { Component } from 'react';
import RenderSidebar from './sidebar';
import RenderLogo from './logo';
import RenderEquipment from './equipment';
import RenderStats from './stats';
import SearchBar from './searchbar';
import './main.css';
class App extends React.Component{


    render(){
        return(
            <div>
            <RenderSidebar />
            <RenderLogo />
            <RenderEquipment />
            <RenderStats />
            <SearchBar />
            </div>
        );
    }

}

export default App;