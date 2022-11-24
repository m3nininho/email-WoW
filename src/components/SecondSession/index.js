import sectionTwoImg from '../../../images/secondSession.png'
import Button from '../Button'

function SecondSession(){

  return /*html*/`
  
  <section>
  <div class="mx-auto max-w-3xl bg-bgContent">
    <div class=" mx-auto">
      <img class=" mx-auto w-full" src=${sectionTwoImg} alt="Imagem ilustrativa do game time quando adquirido comprado.">
    </div>
    <div class=" px-10">
      <h1 class="uppercase text-colorTitle text-4xl text-center py-10 text-5xl mb-5">ganhe vantanges com upgrades</h1>
      <p class="text-textDefault text-xl">Para aprimorar a sua experiência, confira os <span class="text-bold">Upgrades</span> Northrend*, que oferece diversos <span class="text-bold">itens raros**</span> para ajudar em sua jornada pelo frio.</p>
      <div class=" mt-10">
        <h3 class=" textBold text-xl">Northrend Heroic Upgrade:</h3>
        <nav>
          <ul class=" list-disc text-textDefault pl-14 text-xl mt-5">
            <li>Upgrade de personagem para o nível 70***</li>
            <li>Mascote pinguim Pedrisco</li>
            <li>Brinquedo Isca da Sorte do Parlapeixe</li>
          </ul>
        </nav>
      </div>
      <div class=" mt-10">
        <h3 class=" textBold text-xl">Northrend Epic Upgrade****</h3>
        <nav>
          <ul class=" list-disc text-textDefault pl-14 text-xl mt-5">
            <li>Tudo no Heroic Upgrade</li>
            <li>30 dias de jogo</li>
            <li>Montaria Planacosta Morsano (para personagens que não sejam do Classic)</li>
            <li>Montaria Planador de Osso de Baleia Kalu’ak (para personagens de Wrath of the Lich King Classic)</li>
          </ul>
        </nav>
      </div>
      <div class=" text-center mt-16 mb-10">
        ${Button('Compre já', 'https://us.shop.battle.net/pt-br/product/world-of-warcraft-wrath-classic-upgrades?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=button-link-shop-now')} 
      </div>
      <div  class=" text-textDefault text-sm italic text-center mt-5 p-5">
      <p>* Requer assinatura de World of Warcraft. </p>
      <p class= " mt-5 mb-5">
      ** Mascote, brinquedo e montaria Planador de Osso de Baleia Kalu’ak só estão disponíveis em reinos de Wrath of the Lich King Classic. A montaria Planacosta Morsano só está disponível para reinos de World of Warcraft moderno.  </p>
      <p class=" mb-5">*** Limite de um Upgrade de Personagem para o nível 70 por conta do WoW®. Upgrades disponíveis apenas para reinos de Wrath of the Lich King Classic, exceto para reinos novos introduzidos no pré-patch. O Upgrade não pode ser usado em Cavaleiros da Morte e só pode ser aplicado na conta de WoW para a qual foi comprado ou resgatado. </p>
      <p class=" mb-5">
      **** O Epic Upgrade não concede novamente itens já desbloqueados na sua conta pelo Heroic Upgrad </p>
    </div>
    </div>
  </section>
  `
}
export default SecondSession