
import { Route, Routes } from "react-router-dom";
import {AboutView, BlogView, ContactView, DestionationsPopular, ExploreView, HomeView, LayoutHome, ProductServiceView, ProductsView} from '../views'
export const AppRouter = () => {

  return (
    <>
      <LayoutHome>
        <Routes>
          <Route path="/" element = {<HomeView />}/> 
          <Route path="/about" element = {<AboutView />}/>
          <Route path="/contact" element = {<ContactView />}/>
          <Route path="/product-service" element = {<ProductsView />}/>
          <Route path="/product-service-detail" element = {<ProductServiceView />}/>
          <Route path="/blog/articles" element = {<BlogView />}/> 
          <Route path="/destinations/explore" element = {<ExploreView />}/> 
          <Route path="/destinations/popular" element = {<DestionationsPopular />}/> 
        </Routes>
      </LayoutHome>
    </>
  )
}