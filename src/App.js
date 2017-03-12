import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import InfoPanel from './components/InfoPanel';
import RightPanel from './components/RightPanel';

class App extends Component {

  updateInfoPanel(gathering) {
     alert("gathering name: " + gathering.name);
  }



  render() {
    return (
      <div>
          <Header />
          <div id="main-container">
            <LeftPanel 
              onSelectGathering={this.updateInfoPanel}
            />
            <InfoPanel 
            />
          </div>
      </div>
    	<div className="container">
    		<Header />
		    <div className="row">
		        <div className="col-md-4"><LeftPanel /></div>
		        <div className="col-md-8"><RightPanel /></div>
		    </div>
	    </div>
    );
  }
}

export default App;