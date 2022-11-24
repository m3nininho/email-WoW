import Main from "./components/Main";
import FirstSession from "./components/FirstSession";
import SecondSession from "./components/SecondSession";
import ThirdSession from "./components/ThirdSession";
import Conect from "./components/Conect";
import Footer from "./components/Footer";


document.querySelector('#app').innerHTML = /*html*/`
  <div class="mx-auto max-w-5xl h-screen">
    ${Main()}
    ${FirstSession()}
    ${SecondSession()}
    ${ThirdSession()}
    ${Conect()}
    ${Footer()}
  </div>
`


