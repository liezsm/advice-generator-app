const adviceBtn = document.querySelector('.advice-btn')


adviceBtn.addEventListener('click', () => {

    // exp it cached the advice so when you click, it doesnt give a new advice so I'll use the one with ID instead

    // exp update: already found the solution: add no cache
  ( async () =>{
        

    try {

        const url ='https://api.adviceslip.com/advice';
        const resp = await fetch(url, {cache: "no-cache"})
        const data = await resp.json()
      
        const { id, advice} = data.slip;

    //    console.log(data.slip)
    //    console.log(id, advice)

        document.getElementById('advice_number').textContent =id;
        document.querySelector('.advice-content').textContent = `\"${advice}\"`;
    }catch(err){
        console.log(err)
    }
    
})()


// (  async() =>{
    
//     try {
        
//         const random = Math.floor( Math.random() * 100)
//         const url =`https://api.adviceslip.com/advice/${random}`;
//         const resp = await fetch(url)
//         const data = await resp.json()
      
//         const { id, advice} = data.slip;

//     //    console.log(data)
//        console.log(id, advice)

//         document.getElementById('advice_number').textContent =id;
//         document.querySelector('.advice-content').textContent = `\"${advice}\"`;
//     }catch(err){
//         console.log(err)
//     }
// })();


})

