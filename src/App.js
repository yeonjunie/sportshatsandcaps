import React from 'react';
import './App.css';
import Catalog from './Catalog.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const items= [
  {name: "Chicago Bulls Snapback Hat", league: "NBA", style: "Snapback", price: "15", image: "https://www.neweracap.com/medias/sys_master/root/h21/hc2/8916462534686/8916462534686.png"},
  {name: "Boston Celtics Adjustable Hat", league: "NBA", style: "Ball Cap", price: "17", image: "https://www.neweracap.com/medias/sys_master/root/h0d/h86/8914518212638/8914518212638.png"}, 
  {name: "Cleveland Indians Snapback Hat", league: "MLB", style: "Snapback", price: "24", image: "https://www.neweracap.com/medias/sys_master/root/he6/h47/8914573099038/8914573099038.png"},
  {name: "Los Angeles Dodgers Snapback Hat", league: "MLB", style: "Snapback", price: "29", image: "https://www.neweracap.com.au/medias/sys_master/root/hda/h65/9083149910046/9083149910046.png"},
  {name: "Miami Heat Adjustable Hat", league: "NBA", style: "Ball Cap", price: "18", image: "https://images.footballfanatics.com/miami-heat/miami-heat-new-era-the-league-9forty-adjustable-cap_ss4_p-11896558+u-lqqwpf3vgxc50w5sezpn+v-357b1f4cfe71454d8fc71fe57bcdd45c.jpg?_hv=1&w=600"},
  {name: "Los Angeles Lakers Snapback Hat", league: "NBA", style: "Snapback", price: "26", image: "https://www.neweracap.com/medias/sys_master/root/h0e/hc1/8916381859870/8916381859870.png"},
  {name: "Dallas Mavericks Adjustable Hat", league: "NBA", style: "Ball Cap", price: "21", image: "https://www.neweracap.com/medias/sys_master/root/hbd/hc7/8917240938526/8917240938526.png"},
  {name: "Boston Red Sox Snapback Hat", league: "MLB", style: "Snapback", price: "30", image: "https://www.neweracap.com/medias/sys_master/root/h22/h9f/8916287782942/8916287782942.png"},
  {name: "Portland Trail Blazers Adjustable Hat", league: "NBA", style: "Ball Cap", price: "23", image: "https://www.kunstenaaglede.com/images/large/kunstenaaglede/K6CI3LBY125732_LRG.jpg"},
  {name: "San Francisco Warriors Adjustable Hat", league: "NBA", style: "Ball Cap", price: "28", image: "https://www.neweracap.com/medias/sys_master/root/h11/h35/8916445691934/8916445691934.png"},
  {name: "Chicago White Sox Snapback Hat", league: "MLB", style: "Ball Cap", price: "22", image: "https://www.neweracap.com.au/medias/sys_master/root/h69/h88/9083132968990/9083132968990.png"},
  {name: "New York Yankees Snapback Hat", league: "MLB", style: "Snapback", price: "25", image: "https://www.neweracap.com/medias/sys_master/root/h15/h67/9107583402014/9107583402014.png"},
]

class App extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: 'black',
      }}>
        <h1>Sports Hats &amp; Caps</h1>
        <Catalog list={items}/>
      </div>
    );
  }
}

export default App;