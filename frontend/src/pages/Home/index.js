import { React } from 'react';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ListItem from '../../components/ListItem'

function HomePage() {
  return (
    <div className="height-container">
      <Header/>
      <div className="content">
        <Sidebar active="list-pr"/>
        <ListItem/>
      </div>
    </div>
  );
}

export default HomePage;
