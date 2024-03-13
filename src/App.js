import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Nav from './components/nav';
import { useState } from 'react';
import Content from './components/content';

function App() {
  let [s,setS]=useState("")
  let [data,setData]=useState([])
  // console.log(data)

  return (
    <Box className="App" p={5} bg={'white'}>
      {/* nav bar  */}
      <Nav s={s} setS={setS} setData={setData} /> 
      {/* content section  */}
      <Content data={data}setData={setData}/>
    </Box>
  );
}

export default App;
