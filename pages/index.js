import MainGrid from '../src/components/MainGrid' 
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutComons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';

function ProfileSidebar(propriedades){
  console.log(propriedades);
  return(

    <Box>
    <img src= {`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}}/>
  </Box>
  )
}

export default function Home() {  
  const usuarioAleatorio = 'ErickIgorLubawski' //assim funciona para passar valor dinamicamente 
  const pessoasFavoritas =
  ['alurakut-neon-psi.vercel.app','omariosouto','paes','rafaballerine',]
  return ( 
      <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style ={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio}/>
        </div>
        <div className="welcomeArea" style ={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem-Vindo(a)
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className ="profileRelationsArea"style ={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidades ({pessoasFavoritas.length})
            </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return(
                <li>
                  <a href={`/users/${itemAtual}`} key = {itemAtual}>
                  <img src={'https://github.com/${itemAtual}.png'}/>
                  <span>${itemAtual}</span>
                </a>
                </li>
              )
            })}       
          </ul>
        </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
