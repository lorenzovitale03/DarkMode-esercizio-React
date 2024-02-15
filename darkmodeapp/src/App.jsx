import './App.css'
import { useEffect, useState } from 'react';
function App() {

const [dark,setDark] = useState(false);


const setDarkMode = () =>{
  setDark(!dark)
}

useEffect(()=>{
  if(dark){
    document.body.classList.add('dark-mode');
  }else{
    document.body.classList.remove('dark-mode')
  }
},[dark])


  return (
    <div>
      <button type='button' className='bottoneChanging' onClick={setDarkMode}>Cambia</button>
      <section className='mainSection'>
        <article className='singleBox'>
          <h1>Magna Facilis Autem</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque</p>
        </article>
        <article className='singleBox'>
          <h1>Magna Facilis Autem</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque</p>
        </article>
        <article className='singleBox'>
          <h1>Magna Facilis Autem</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque</p>
        </article>
        <article className='singleBox'>
          <h1>Magna Facilis Autem</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque</p>
        </article>
      <section className='mainSection'>
      </section>
      </section>
    </div>
  )
}

export default App
