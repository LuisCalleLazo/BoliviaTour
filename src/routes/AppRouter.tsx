
import { Route, Routes } from "react-router-dom";
import {BlogView, ContactForm, HomeView, LayoutHome} from '../views'
export const AppRouter = () => {

  return (
    <>
      <LayoutHome>
        <Routes>
          <Route path="/" element = {<HomeView />}/> 
          <Route path="/contact/message" element = {<ContactForm />}/>
          <Route path="/blog/articles" element = {<BlogView />}/> 
        </Routes>
      </LayoutHome>
    </>
  )
}