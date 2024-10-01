import Card from './components/Card';
import styles from "./page.module.css";
import React from 'react';

export default function Home(){
  return (
    <>
    
     <h1>This is Home Page</h1><br/>
     <Card name='Laiba' rollNo={181078} day='monday' /> <br/>
     <Card name='Aqsa' rollNo={181079} day='monday' /> <br/>
     <Card name='Saba' rollNo={181080} day='monday' /> <br/>
     <Card name='Rubab' rollNo={181081} day='monday' />

    </>
  )
};



