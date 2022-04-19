import logo from './logo.svg';
import './App.css';
import Home from "./Home"

const App = () => {
  return (
    <div>
      <h1>Nurullah Şahin 21430070006</h1>
      <h2>React Js props nedir ?</h2>
      <p> Props'lar , bir componentten başka bir
         componente veri aktarımı yapmamızı sağlar. Props'lar salt okunur (read-only) dir. Değiştirilemezler</p>
         <h1>Props ile anasayfadan gelen verileri home componentinde gösterilir</h1>
    <Home name="Selman"  surname="Veldan"/>
    <Home name="Talip" surname="Çakal"/>
    <Home name="Hayriye" surname="Gelioglu"/>
    </div>
  )
}

export default App
