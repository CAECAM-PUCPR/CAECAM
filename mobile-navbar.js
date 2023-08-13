var Item_menu = document.querySelectorAll('.item-menu')
var Exp =document.querySelector('#exp')
var menu = document.querySelector('.menu-lateral')

function select (){
    Item_menu.forEach((i)=>
        i.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

Item_menu.forEach((i)=>
    i.addEventListener('click',select)
)

Exp.addEventListener('click',function(){
    menu.classList.toggle('expandir')
})
