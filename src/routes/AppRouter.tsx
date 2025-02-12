
import { Route, Routes } from "react-router-dom";
import {AboutView, BlogView, ContactForm, DestionationsPopular, ExploreView, HomeView, LayoutHome} from '../views'
export const AppRouter = () => {

  return (
    <>
      <LayoutHome>
        <Routes>
          <Route path="/" element = {<HomeView />}/> 
          <Route path="/about" element = {<AboutView />}/>
          <Route path="/contact" element = {<ContactForm />}/>
          <Route path="/blog/articles" element = {<BlogView />}/> 
          <Route path="/destinations/explore" element = {<ExploreView />}/> 
          <Route path="/destinations/popular" element = {<DestionationsPopular />}/> 
        </Routes>
      </LayoutHome>
    </>
  )
}