import mainImg from '../../../images/main.png'
import Button from '../Button'

function Main(){

return /*html*/`

<main > 
  <div class="mx-auto max-w-3xl bg-bgContent pb-5" >
    <div class=" mx-auto">
      <img class=" mx-auto w-full" src=${mainImg} alt="Imagem ilustrativa do Rei Lich King">
    </div>
    <div class="px-10">
      <h1 class=" uppercase text-colorTitle text-4xl text-center py-10 text-5xl mb-5">rumo à nortúndria</h1>
      <p class="text-textDefault text-xl"><span class=" italic">Wrath of the Lich King® Classic™*</span> <span class="textBold">já está disponível</span> e pronto para ser explorado, Fulano! </p>
      <p class=" text-textDefault  text-xl mt-12">Reúna seus aliados e atenda ao chamado às armas. Azeroth se prepara para enfrentar o <span class="textBold">Lich Rei</span> e seu exército do <span class="textBold">Flagelo</span>. Os lacaios do Lich Reisão infindos, bem como a obstinação dele, portanto reúna suas forças e prepare-se para uma longa jornada.</p>
    </div>
    <div class=" text-center mt-12">
     ${Button('Saiba mais')} 
    </div>
    <p class=" text-textDefault text-sm italic text-center mt-5">* Requer assinatura de World of Warcraft®.</p>
  </div>
</main>
`
}
export default Main