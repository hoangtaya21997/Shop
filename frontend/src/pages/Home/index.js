import { React } from 'react';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

function HomePage() {
  return (
    <div className="home">
      <Header/>
      <div className="content">
        <Sidebar/>
      </div>
    </div>
  );
}

export default HomePage;
