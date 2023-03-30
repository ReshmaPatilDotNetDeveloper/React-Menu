import './App.css';
import menu from './data';
import React,{ useState } from 'react'
import MenuComponent from './menu';
import Category from './Category';

let categories = ['all',...new Set(menu.map(item => item.category))];
console.log(categories);

function App() {
  const[menuItems,setMenuItems] = useState(menu);
  const filterItems = (category) =>{
    if(category == 'all'){
      setMenuItems(menu);
    }
    else{
      let items = menu.filter(item => item.category == category);
      setMenuItems(items);
    }
  }
  return (
    <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category categories={categories} filterItems={filterItems}/>
      <MenuComponent items={menuItems}/>
    </section >
  </main>
  );
}

export default App;
