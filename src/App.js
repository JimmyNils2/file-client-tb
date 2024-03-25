import React from 'react';
import { MainTable, Header } from './components';

export const App = () => {
  return (
    <>
      <Header 
        appName='React Test App'
      />
      <MainTable />
    </>
  )
}
