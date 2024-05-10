'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {useState,useEffect} from 'react'



//  CREATING MAIN COMPONENTS


// navbar component

const NavBar = () => {
  
}

const ViewPage = () => {
  
}

const ReportBoard = () => {
  
}

const SearchBoard = () => {
  
}

const DataBoard = (props) => {

  return (
    <>
      <div>{props.name} project</div>
      <div>{props.amount} million</div>
    </>  
  )
  
}



// CREATING SUBMAINCOMPONENTS


export default function Home() {
  const [user, setUser] = useState('Bravo!')
  const randomNames = ['Ekomabasi', 'Etieno', 'Tiene', 'John']
  const chooseRandom = () => {
    let number = Math.floor(Math.random() * (randomNames.length))
    return `${randomNames[number]}`
  }
  const update = () => {
    setUser(chooseRandom())
  }
  useEffect(() => {
    alert('You refreshed the page')
    
  },[user])
  return (
    <main className={styles.main}>
      <DataBoard name="FLM" amount="23"/>
      <DataBoard name="TIPS" amount="25"/>
      <DataBoard name="GAS" amount="2"/>
      <h1>Name is {user}</h1>
      <button onClick={()=>{update()}}>Click Me</button>
      

    </main>
  );
}






