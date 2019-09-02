const charactersAPI = new APIHandler("http://localhost:8000")
const container = document.querySelector(".characters-container")


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function () {
    
    charactersAPI.getFullList()
      .then(data => {
        data.data.forEach(character=> {
          let newdiv = document.createElement("div")
          newdiv.className = "character-info"
          
          let features = {
            
          }

          for (feature in character) {
            console.log(character)
            //name
            let divname = document.createElement("div")
            divname.className = "name"
            divname.innerHTML = character.name
            newdiv.appendChild(divname)

            //occupation

            //cartoon
            //weapon
          }
  
          container.appendChild(newdiv)
        });
      })
      .catch(err => console.log(err))
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
