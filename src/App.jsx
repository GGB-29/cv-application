import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputSection() {
  
}

function Editor() {
  return (
    <div className='editor'>
      <h1 className='title'>Editor</h1>
    </div>
  );
}

function Preview() {
  return (
    <div className='preview'>
      <h1 className='title'>Preview</h1>
      <PreviewPage />
    </div>
  );
}

function PreviewPage() {
  return (
    <div className='preview-page'>
      
    </div>
  );
}

function GeneralInfo() {

}

function EducationInfo() {

}

function ExperienceInfo() {

}

function Header () {
  return (
    <header className='header'>
      <h1>CV Generator</h1>
    </header>
  );
}

function Main () {
  return (
    <main className='main'>
      <Editor />
      <Preview />
    </main>
  );
}

function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App
