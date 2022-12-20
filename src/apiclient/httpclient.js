
class HttpClient{

   async get(url){
// XMLHttpRequest 

// JSON String ""
// JSON Array []
// JSON Number 
// JSON Object {"key":value}
// JSON Boolean 
    const response = await fetch(url,{
        method: 'GET',
        headers:{
            'Accept':'application/json'
        }

    })
   const responsedata = await response.json()
   return responsedata


   }

   async post(url,data){
        const response = await fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
    
        })
       const responsedata = await response.json()
       return responsedata
    
    
       }
     
       async put(url,data){
        const response = await fetch(url,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
    
        })
        //await response.status == 200
       const responsedata = await response.json()
       return responsedata
    
    
       }

       async delete(url,data){
        const response = await fetch(url,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
    
        })
       const responsedata = await response.json()
       return responsedata
    
    
       }


}
// node.js commonjs
//module.exports = new HttpClient()
// es2015 module exports
 export default new HttpClient()