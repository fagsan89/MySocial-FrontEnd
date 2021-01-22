import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/index'
import api from '../../services/api';

//import {get} from '../../services/api'
//import { SpanInfo } from './styles'
import './stylesHome.css'

function Home(props) {

  const [listUser, setListUser] = React.useState([])


  useEffect(()=>{
    getListUser()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps


async function getListUser(data){


  if(data){
    setListUser(data)
  }else{

    await api.post('',{query:`

          query usuarios {
            usuarios{
              _id
                name
                age
                eyeColor
                company
                email
                greeting
                picture
            }            
        }
        
    `}).then(resp => {
      //console.log(resp.data.data)
      setListUser(resp.data.data.usuarios)
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

    
}

  return (     
    <>
      <Header listUserFilter={getListUser}  reloadListUsers={getListUser}/>
      
        <div className="container">
          <main className="grid">
        
            {
              listUser.map((item,index) => {
                return(

                  <article key={item._id}>                  

                    <img id="imgPhoto" data-sizes='auto' data-src={item.picture} src={item.picture} alt="PhotoHome"/>
                    
                    <div className="text d-flex flex-column align-items-start">

                        <span className="text-min-t"><b>Name:</b> {item.name}</span>
                        <span className="text-min-t"><b>Age:</b> {item.age}</span>
                        <span className="text-min-t"><b>EyeColor:</b> {item.eyeColor}</span>
                        <span className="text-min-t"><b>Company:</b> {item.company}</span>
                        <span className="text-min-t"><b>Email:</b> {item.email}</span>

                        <Link to={`/detalhes/${item._id}`} className="btn btn-primary btn-block"> +Detalhes </Link>
                  
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

export default Home;