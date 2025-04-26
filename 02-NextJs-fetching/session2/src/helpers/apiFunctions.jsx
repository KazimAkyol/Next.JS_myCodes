
const URL=`http://localhost:8080/users`

// export const getUsers=async()=>{

//     // const response=await fetch(URL,{ cache: 'force-cache' }) 
//* Zaten default olarak force-cache. O yüzden yazmaya gerek yok

//     const response=await fetch(URL)

//     if (!response.ok){
//         throw new Error("Failed to fetch")
//     }

//     const data=response.json()
//     return data
// }


//* revalidate -Belli bir zaman aralığıyla yenileme

// export const getUsers=async()=>{

//     const response=await fetch(URL,{ cache: 'revalidate:10' })  
//     // const response=await fetch(URL)

//     if (!response.ok){
//         throw new Error("Failed to fetch")
//     }

//     const data=response.json()
//     return data
// }

//* no store -sürekli yenileme

export const getUsers=async()=>{

    const response=await fetch(URL,{ cache: 'no-store' })  
    // const response=await fetch(URL)

    if (!response.ok){
        throw new Error("Failed to fetch")
    }

    const data=response.json()
    return data
}

export const getUsersDetail = async (id) => {

    const res = await fetch(`${URL}/${id}`);
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    const data = await res.json();
    return data;
  };
