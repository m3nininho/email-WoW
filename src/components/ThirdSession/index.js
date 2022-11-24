import thirdSessionImg from '../../../images/thirdSession.png'
import Button from '../Button'

function ThirdSession(){

return /*html*/`
<section>
<div class="mx-auto max-w-3xl bg-bgContent">
  <div class=" mx-auto">
    <img class=" mx-auto w-full" src=${thirdSessionImg} alt="Imagem ilustrativa do game time quando adquirido comprado.">
  </div>
  <div class=" px-10">
    <h1 class="uppercase text-colorTitle text-4xl text-center py-10 text-5xl mb-5">o poder de gélido lamento está em suas mãos</h1>
    <p class="text-textDefault text-xl mb-10">"Aquele que arrancar esta espada terá poder eterno. Assim como a espada rasga a carne, o poder macula o espírito.”
    </p>   
    <p class="text-textDefault text-xl">A <span class=" textBold">lendária lâmina rúnica Gélido Lamento</span>, um artefato maligno ancestral, foi empunhada pelo inclemente Lich Rei e agora pode ser sua. Empunhe o poder para devastar almas fazendo a <span class="textBold">compra antecipada</span> de Gélido Lamento na <span class="textBold">Blizzard Gear Store</span> hoje mesmo! 
    </p>
    <p class="text-textDefault text-xl mt-10">
    Esta réplica magnífica em escala <span class="textBold">1:1 de Gélido Lamento</span>* é simplesmente fabulosa. O corpo da espada é feita de liga de zinco e cobre, aço inoxidável e couro. Ela é criada de forma magistral por meio de um molde em cera, com acabamento em fresa e polimento manual.</p>
    <p class="text-textDefault text-xl mt-10">
    Você ainda pode ostentar a grandiosidade dela em suas paredes com o suporte específico para Gélido Lamento, vendido separadamente.
    </p>
  </div>
  <div class=" text-center mt-16 mb-8">
    ${Button('Compre hoje na pré-venda', 'https://worldofwarcraft.com/pt-br/news/23819893/pr%C3%A9-venda-dispon%C3%ADvel-o-poder-de-g%C3%A9lido-lamento-em-suas-m%C3%A3os?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=button-link-pre-order-today')} 
  </div>
  <div  class=" text-textDefault text-sm italic text-center mt-5 p-8">
    <p>* *É preciso ter 18 anos ou mais para comprar. Mantenha fora do alcance das crianças. Item colecionável adulto apenas para exibição.</p>
  </div>
</section>
`
}
export default ThirdSession