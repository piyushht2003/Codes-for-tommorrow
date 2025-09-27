import React, {useEffect, useState} from 'react'

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      if(!response.ok){
        throw new error("Network response was not ok")
      }
      return response.json();
    })
    .then((data)=>{
      setData(data.slice(0,6));
      setLoading(false);
    })
    .catch((error)=>{
      setError(error);
      setLoading(false);
    });
  }, [])
  console.log(data)

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;
  
  return (
    <div className='h-screen p-10 text-black w-full'>
      <div className='w-full grid grid-cols-3 gap-10 h-96'>
      {data.map((a)=>(
        
          <div className='bg-gray-100 shadow-xl rounded-2xl h-96  p-6 w-72'>
         <h4 className='font-bold text-lg w-full overflow-hidden h-14 mb-1'>{a.title}</h4>
          <p className='text-gray-700 w-full overflow-hidden h-10 text-sm'>{a.body}</p>
          <p className='text-gray-400 text-xs mt-3'>Mon, 21 Dec 2020 14:57 GMT</p>
           <div className='bg-white pb-2 h-32 w-full mt-4 rounded'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"  alt="img"  className='w-full h-full object-cover'/>

        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default App
