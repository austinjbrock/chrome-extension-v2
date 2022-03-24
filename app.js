const inputBtn = document.getElementById('save-btn')
const inputEl = document.getElementById('input-el')
//empty array to loop through when user submits a lead
let myLeads = []
const ulEl = document.getElementById('ul-el')

//Grabs user input from for and renders to screen

inputBtn.addEventListener('click',() =>{
    myLeads.push(inputEl.value)

    //list items append to dom
let listItems = '';
for(let i =0; i< myLeads.length; i ++){
    listItems +=`
    <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${ myLeads[i]} 
        </a>
    </li>`

//clears input value after click
 inputEl.value = '';
}
 ulEl.innerHTML = listItems;

})
