import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    font-size: 18px;
  }
`
function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        olá
      </Botao>
      <Botao principal={false}>olá</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}
export default Teste
