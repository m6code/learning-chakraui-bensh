import { useState } from 'react'
import './App.css'
import {Box} from "@chakra-ui/react"


function App() {
  

  return (
    <>

{/* // m={2} refers to the value of `theme.space[2]` */}
  <Box m={2}>Tomato</Box>

{/* // You can also use custom values */}
  <Box maxW="960px" mx="auto">Hi max 960px</Box>

{/* // sets margin `8px` on all viewports and `12px` from the first breakpoint and up */}
  <Box m={[2, 3]}>Hello responsive</Box>

    </>
  )
}

export default App
