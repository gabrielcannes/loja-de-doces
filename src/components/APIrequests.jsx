import {useState,useEffect} from 'react'

function APIrequests({type}) {
  const [list, setList] = useState([])

  const ConstantsUrl = {
    cakesUrl: 'http://localhost:3000/bolosetortas',
    sweetsUrl: 'http://localhost:3000/docestradicionais',
    dessertsUrl: 'http://localhost:3000/sobremesas'
  }
  
  useEffect(() => {
    let url = getUrl()
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setList(data)
    })    
  }, [])

  const getUrl = () => {
    if(type === 'cakes') return ConstantsUrl.cakesUrl
    if(type === 'sweets') return ConstantsUrl.sweetsUrl
    if(type === 'desserts') return ConstantsUrl.dessertsUrl
  }

  return (
    <ul>
      {list.map(item => {
        return(
          <li key={item.id}>
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}



export default APIrequests