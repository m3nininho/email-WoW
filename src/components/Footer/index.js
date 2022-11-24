import logo from '../../../images/logo.png'
import classif from '../../../images/classif.png'

function Footer(){

return /*html*/`
  <footer>
    <div class="mx-auto max-w-3xl bg-bgContent">
      <div class=" mx-auto p-10">
        <img class=" mx-auto w-44 " src=${logo} alt="Logo da empresa Blizzard"> 
      </div>
      <div class=" w-full">
        <nav>
          <ul class="flex items-center justify-center gap-5 text-textLinkFooter uppercase text-sm">
            <li><a>Empregos</a></li>
            <li><a>Sobre</a></li>
            <li><a>Privacidade</a></li>
            <li><a>Termos</a></li>
            <li><a>Suporte</a></li>
          </ul>
        </nav>
      </div>
      <div class=" mt-5 mx-auto p-10">
        <p class=" text-textDefault text-sm">Se não quiser receber o boletim eletrônico nem informações sobre os produtos da Blizzard, <span class=" text-textLinkFooter underline">clique aqui.</span></p>
        <p class=" text-textDefault text-sm mt-5 mb-5">© 2022 Blizzard Entertainment, Inc. World of Warcraft, World of Warcraft: Wrath of the Lich King, Warcraft, WoW e Blizzard Entertainment são marcas registradas da Blizzard Entertainment, Inc. nos EUA e/ou em outros países. Todas as outras marcas registradas aqui mencionadas pertencem aos seus respectivos proprietários.
        </p>
        <p class=" text-textDefault text-sm">
        Blizzard Entertainment, P.O. Box 18979, Irvine, CA 92623
        </p>
      </div>
      <div class=" mx-auto p-5">
        <img class=" mx-auto w-44 " src=${classif} alt="Logo da classificação de idade"> 
      </div>
    </div>
  </footer>
`
}
export default Footer