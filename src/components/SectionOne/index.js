import sectionOneImg from '../../../images/sectionOne.png'
import mountImg from '../../../images/mount.png'


function SectionOne(){
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
      </div>
    </div>
  </section>
`
}
export default SectionOne