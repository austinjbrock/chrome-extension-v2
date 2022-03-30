const inputBtn = document.getElementById('save-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const saveTab = document.getElementById('save-tab')
//Parses data into strings
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//dynamically creats list items from user input

const render = (leads) =>{
    let listItems = '';
    for(let i =0; i< leads.length; i ++){
        listItems +=`
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]} 
            </a>
        </li>`
    }
ulEl.innerHTML = listItems;
}

//sets current leads based on local storage 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//Grabs user input and renders to screen
inputBtn.addEventListener('click',() =>{
    myLeads.push(inputEl.value)
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})
  
//Deletes list items and clears local storage

deleteBtn.addEventListener('click',()=>{
    ulEl.innerHTML = ''
    localStorage.clear()
 
})

//Save Tab 

saveTab.addEventListener('click', ()=>{
    //grab current tab URL
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     });   
})
