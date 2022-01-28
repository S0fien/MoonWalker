import React from "react"
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Page} from "@geist-ui/core";
import {NotFound} from "./views/containers/NotFound";
import {Header} from "./views/containers/Header";
import {AstronautsList} from "./views/containers/AstronautsList";
import {FormContainer} from "./views/containers/FormContainer";

function App() {
  return (
      <div className="App">
        <Page>
          <Page.Header>
            <Header />
          </Page.Header>
          <Page.Content style={{ maxWidth: '1140px', margin: 'auto' }}>
            <div className="main">
              {/* Define all the routes */}
              <Routes>
                <Route path="/" element={<AstronautsList />}/>
                <Route path="/add" element={<FormContainer action={'add'} />}/>
                <Route path="/update/:astronautId" element={<FormContainer action={'update'} />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </div>
          </Page.Content>
        </Page>
      </div>
  )
}

export default App;
