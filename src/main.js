import Main from "./components/Main";
import SectionOne from "./components/SectionOne";

document.querySelector('#app').innerHTML = /*html*/`
  <div class="mx-auto max-w-5xl h-screen">
    ${Main()}
    ${SectionOne()}
  </div>
`


