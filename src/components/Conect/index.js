import lineUp from '../../../images/lineUp.png'
import bassLine from '../../../images/bassLine.png'
import home from '../../../images/home.png'
import facebook from '../../../images/facebook.png'
import instagram from '../../../images/instagram.png'
import reddit from '../../../images/reddit.png'
import twitter from '../../../images/twitter.png'
import youtube from '../../../images/youtube.png'

function Conect(){

return /*html*/`

<section>
  <div class="mx-auto max-w-3xl bg-bgContent">
    <div class=" mx-auto">
      <img class=" mx-auto w-full" src=${lineUp}>
      <div class=" mx-auto">
        <h2 class="uppercase text-colorTitle text-4xl text-center mt-10 text-2xl mb-10 font-bold">Conecte-se</h2>
        <nav>
          <ul class=" flex w-full items-center justify-center gap-2 mb-10">
            <li><a href="https://wowclassic.blizzard.com/pt-br/"><img class=" w-8" src=${home}></a></li>
            <li><a href="https://www.facebook.com/WarcraftBrasil?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-facebook"><img class=" w-8" src=${facebook}></a></li>
            <li><a href="https://twitter.com/Warcraft_PTBR?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-twitter"><img class=" w-8" src=${twitter}></a></li>
            <li><a href="https://www.youtube.com/WorldofWarcraftPTBR?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-youtube"><img class=" w-8" src=${youtube}></a></li>
            <li><a href="https://www.reddit.com/r/Wow?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-reddit"><img class=" w-8" src=${reddit}></a></li>
            <li><a href="https://www.instagram.com/warcraftbr/?utm_source=wowc-wotlkc-launch-3-20220926&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-instagram"><img class=" w-8" src=${instagram}></a></li>
          </ul>
        </nav>
      </div>
      <img class=" mx-auto w-full" src=${bassLine}>
    </div>
  </div>  
</section>
`
}
export default Conect