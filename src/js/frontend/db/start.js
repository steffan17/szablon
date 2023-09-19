const app = document.getElementById('app')

const axios = require('axios');



const start = {
    renderTablesList: ()=>
    {
        axios.get('http://localhost:3000/api/getTables')
            .then(function (response) {
                console.log(response.data)
      
                const newParagraph = document.createElement('p')

                response.data.forEach(names=>{
                    newParagraph.textContent=names.name
                    console.log(names.name)
                    app.appendChild(newParagraph.cloneNode(true))
                })
              

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

start.renderTablesList();