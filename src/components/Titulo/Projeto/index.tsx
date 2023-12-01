import Titulo from '..'
import Paragrafo from '../../../components copy/Titulo'
import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com Vue.js</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
