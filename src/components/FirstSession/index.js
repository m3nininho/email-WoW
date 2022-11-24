import sectionOneImg from '../../../images/firstSession.png'
import mountImg from '../../../images/mount.png'
import Button from '../Button'


function FirstSession(){
return /*html*/ `

  <section>
    <div class="mx-auto max-w-3xl bg-bgContent">
      <div class=" mx-auto">
        <img class=" mx-auto w-full" src=${sectionOneImg} alt="Imagem ilustrativa dos cavaleiros da morte">
      </div>
      <div class=" px-10">
        <h1 class="uppercase text-colorTitle text-4xl text-center py-10 text-5xl mb-5">Erga-se, cavaleiro da morte!</h1>
        <p class="text-textDefault text-xl">Reerga dos mortos como <span class=" textLink">Cavaleiro da Morte</span>* e retome seu lugar entre os heróis de Azeroth na luta contra o Lich Rei e seu exército do Flagelo. A <span class="textBold">primeira Classe Heroica</span> de World of Warcraft Classic, os Cavaleiros da Morte começam em um <span class="textBold">nível mais</span> alto que as outras classes, e iniciam a jornada em uma <span class="textBold">história introdutória exclusiva da classe</span>. </p>
        <p class="text-textDefault text-xl mt-10">Conclua a experiência inicial* do <span class="textBold">Cavaleiro da Morte</span>** em Wrath of the Lich King Classic para alçar voo em uma <span class="textLink">Protosserpe Ninhálgida de montaria</span>*** em World of Warcraft. Erguida dos restos repletos de poder de uma revoada dragônica que sucumbiu, a Protosserpe Ninhálgida é uma visão aterrorizante para os draconianos de Azeroth.</p>
      </div>
      <div class=" mt-10 mb-10">
        <img class=" mx-auto" src=${mountImg} alt=" Imagem ilustrativa da montaria Protosserpe Ninhálgida">
      </div>
      <div class=" px-10">
        <p class="text-textDefault text-xl">A<span class="textLink"> profissão Escrivania</span> agora também está disponível para quem almeja uma vida de escriba. Aprenda a gravar palavras de poder em pergaminhos com magia, o que permite criar <span class="textBold">Pergaminhos, Tomos, Cartas de Negraluna, Glifos e Inscrições do Mestre</span>. Siga para a capital mais próxima para encontrar um treinador de Escrivania e não esqueça de pedir informações a um guarda se você se perder. </p>
        <p class="text-textDefault text-xl mt-5" >
        Prepare-se para a jornada à sua espera e saiba mais sobre a paisagem gélida da Nortúndria lendo o <span class="textLink">Guia de área da Nortúndria</span>, que cobre as florestas sombrias dos <span class="textBold">Fiorde Uivante</span> às florestas verdejantes da <span>Bacia Sholazar</span>, inclusive o grande centro de poder que é a Coroa de Gelo.</p>
      </div>
      <div class=" text-center mt-16 mb-10">
        ${Button('Desperte sua fúria', 'https://worldofwarcraft.com/pt-br/news/23850854/quebre-o-gelo-wrath-of-the-lich-king-classic%E2%84%A2-j%C3%A1-est%C3%A1-dispon%C3%ADvel?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=button-link-unleash-your-wrath')} 
      </div>
      <div  class=" text-textDefault text-sm italic text-center mt-5 p-10">
        <p>* Requer assinatura de World of Warcraft. O Cavaleiro da Morte pode chegar ao nível 70 e não requer mais um personagem de nível 55 ou acima para ser criado, exceto nos reinos de Novos Inícios de Wrath Classic que serão com o patch pré-expansão. .</p>
        <p class= " mt-10 mb-10">
        ** Requer assinatura de World of Warcraft. A experiência inicial do Cavaleiro da Morte culmina na conclusão da missão "Onde reis caminham", com personagens da Aliança, ou "Bênção do Chefe Guerreiro", com personagens da Horda. </p>
        <p class=" mb-5"> *** Requer assinatura de World of Warcraft. Montaria indisponível no WoW® Classic.</p>
      </div>
    </div>
  </section>
`
}
export default FirstSession