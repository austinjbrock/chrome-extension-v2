const inputBtn = document.getElementById('save-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
//Parses data into strings
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


//dynamically creats list items from user input

const renderLeads = () =>{
    let listItems = '';
    for(let i =0; i< myLeads.length; i ++){
        listItems +=`
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${ myLeads[i]} 
            </a>
        </li>`
    }
ulEl.innerHTML = listItems;
}

//sets current leads based on local storage 
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//Grabs user input from for and renders to screen
inputBtn.addEventListener('click',() =>{
    myLeads.push(inputEl.value)
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

})

//Deletes list items and clears local storage

deleteBtn.addEventListener('click',()=>{
    ulEl.innerHTML = ''
    localStorage.clear()

})


