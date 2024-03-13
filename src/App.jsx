import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './custom.css'
import Dev from './props'
import DevLog from './conditional-render'
import Pet from './mapping'

function App() {
  const actors = ['bob', 'sam', 'lily', 'mary', 'tom'];
  const pets = [
    {id:1, type:'cat', color:'white'},
    {id:2, type:'dog', color:'black'}
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Actor name={"Rose"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      {
        pets.map(pet=><Pet petType={pet}></Pet>)
      }

      <Dev name="Sakib" lan="React" year={2}></Dev>
      <Dev name="Mou" lan="Vue" year={1}></Dev>
      <Dev name="Emon" lan="AngulasJS" year={5}></Dev>

      <DevLog lan='React' isAvailable={true}></DevLog>
      <DevLog lan='Vue' isAvailable={false}></DevLog>
    </>
  )
}

function Person(){
  return (
    <div className='container'>
      <h4 className='heading'>My name is Afia</h4>
      <p>Currently Learning: React</p>
    </div>
  )
}

function Actor({name}){
  return (
    <li>Name: {name}</li>
  )
}

export default App
