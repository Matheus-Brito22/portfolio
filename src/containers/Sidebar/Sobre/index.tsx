import Paragrafo from '../../../components copy/Titulo'
import Titulo from '../../../components/Titulo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus est
      expedita eaque corporis quae minus sit eius autem dolores quidem sapiente
      repudiandae cum mollitia, velit porro repellat! Eum, illum quae!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Matheus-Brito22&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Matheus-Brito22&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
