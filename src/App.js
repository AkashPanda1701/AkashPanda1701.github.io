
import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box className="App"  id='home' >
      <Navbar/>
     <AllRoutes/>
    </Box>
  );
}

export default App;
