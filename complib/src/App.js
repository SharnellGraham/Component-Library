
import Button from "./components/button/button";


import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <h2>Buttons</h2>
      <div className="component-buttons">
        <Button label="Do Something" type="primary"/>
        <Button label="Do Something" type="danger"/>
        <Button label="Do Something" type="success"/>
        <Button label="Do Something" type="warning"/>
        <Button label="Do Something" type=""/>
        <Button label="Do Something" type="primary" fill="outline"/>
        <Button label="Do Something" type="danger" fill="outline"/>
        <Button label="Do Something" type="success" fill="outline"/>
        <Button label="Do Something" type="warning" fill="outline"/>
        <Button label="Do Something" type="" fill="outline"/>
        <Button label="Do Something" type="primary" fill="fill"/>
        <Button label="Do Something" type="danger" fill="fill"/>
        <Button label="Do Something" type="success" fill="fill"/>
        <Button label="Do Something" type="warning" fill="fill"/>
        <Button label="Do Something" type="" fill="fill"/>
        <Button label="Large" type="danger" size="large"/>
        <Button label="Small" type="danger" size="small"/>
        <Button label="Add to Favorites" type="primary" size ="smaller" icon={<FaHeart />} />
      </div>
  </div>
  )
}
     

export default App;
