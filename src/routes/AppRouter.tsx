
import { Route, Routes } from "react-router-dom";
import {LayoutHome} from '../views'
export const AppRouter = () => {

  return (
    <>
      <LayoutHome>
        <Routes>
          <Route path="/" element = {<></>}/> 
        </Routes>
      </LayoutHome>
    </>
  )
}