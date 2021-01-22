import React from 'react';
import { Container, Header } from './styles';
import api from '../../services/api'
import iconBack from '../../assets/images/back.svg'


function Cabecalho (props) {

  const [description, setDescription] = React.useState('')

  function handleKeyFilter(value){

    //console.log(value)
    if(value !== ''){
      setDescription(value)
    }else{
      setDescription('')
      props.reloadListUsers()
    }
    
  }
    async function getFilter(){
     
      await api.post('',{query:`
  
            query filtro {  
              filtro(name:"${description}" ){
                  _id
                  name
                  age
                  eyeColor
                  company
                  email
                  picture
          
                }  
          }
          
      `}).then(resp => {
        //console.log(resp.data.data.filtro)
        props.listUserFilter(resp.data.data.filtro)
       
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handlePage(){
    window.location.href='/'
  }

  return(

    <Container>

      {
        props.pathname === 'detalhes' 
          ?
            <Header>
                MySocial
               
                            <div><img src={iconBack} alt="Sair" onClick={handlePage}/></div>
              
            </Header>
          :

            <Header>
              <a href="/" style={{color:'#DDD', textDecoration: 'none' }}>MySocial </a>          
              <div className="pseudo-search">
                <input 
                      type="search" 
                      placeholder="Search..." 
                      autoFocus
                      onKeyUp={(event) => { if (event.which === 13) { getFilter() } }}
                      onChange={(event) => handleKeyFilter(event.target.value)}
                      value={description} 
                />
              </div> 
          </Header>
      }
        

        
  </Container>

  )
}

export default Cabecalho;