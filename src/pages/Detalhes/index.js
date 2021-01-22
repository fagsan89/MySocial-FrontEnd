import React, {useEffect} from 'react'
import api from '../../services/api';
import Header from '../Header/index'
import './stylesDet.css'

function Detalhe({match}) {

  const idUser = match.params.id

  const [user, setUser] = React.useState([])
  const [friends, setFriends] = React.useState([])


  useEffect(()=>{
    getUser() 
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  async function getUser(){

    await api.post('',{query:`

            query usuario {

              usuario(id:"${idUser}" ){
                  _id
                  name
                  age
                  eyeColor
                  company
                  email
                  picture
                  friends{
                      _id
                      name
                      age
                      eyeColor
                      company
                      email
                      picture
                    }
                }                
            }
        
    `}).then(resp => {
      //console.log(resp.data.data)
      setUser(resp.data.data.usuario)
      setFriends(resp.data.data.usuario.friends)
    })
    .catch(err => {
      console.log(err)
    })

    // axios({
    //   url: 'http://127.0.0.1:4000/graphql',
    //   method: 'post',
    //   data: {
    //     query: `
    //             query usuarios {
    //               usuarios{
    //                 _id
    //                   name
    //                   age
    //                   eyeColor
    //                   company
    //                   email
    //                   greeting
    //               }            
    //           }
    //       `
    //   }
    // }).then((result) => {
    //   console.log(result.data)
    // });
}

const urlPathname = window.location.pathname.split('/')


  return (     
   <>
      <Header pathname={urlPathname[1]}/>
      <div className="container">
      
        <div className="grid-min d-flex">
            <img id="imgPhoto" data-sizes='auto' src={user.picture} data-src={user.picture} alt="PhotoDet" />
            <div className="text-min ">
              <span className="text-min-t"><b>Name:</b> {user.name}</span>
              <span className="text-min-t"><b>Age:</b> {user.age}</span>
              <span className="text-min-t"><b>Email:</b> {user.email}</span>
            </div>
          </div>
        

        <h2>Friends:</h2>
        <main className="grid">    

        {
          friends && friends.map((item,index) => {
              return(

                <article key={item._id}>                  

                  <img id="imgPhoto" data-sizes='auto' data-src={item.picture} src={item.picture} alt="PhotoFrientes"/>
                  
                  <div className="text d-flex flex-column align-items-start">

                      <span className="text-min-t"><b>Name:</b> {item.name}</span>
                      <span className="text-min-t"><b>Age:</b> {item.age}</span>
                      <span className="text-min-t"><b>EyeColor:</b> {item.eyeColor}</span>
                      <span className="text-min-t"><b>Company:</b> {item.company}</span>
                      <span className="text-min-t"><b>Email:</b> {item.email}</span>
                
                  </div>
                  
              </article> 
              )
            })
          }
              
        </main>
    </div>
  </>
  )
}

export default Detalhe;