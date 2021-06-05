let input =  document.querySelector('#input');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list-container');


// Add items in list;
function addListItem(){
    const removeBtn = document.createElement('span');
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
    removeBtn.textContent = 'Remove';
    li.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => list.removeChild(li));
    
}


btn.addEventListener('click', addListItem);


document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addListItem();
    }
})


