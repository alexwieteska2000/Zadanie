const sizeUp = document.querySelector( '.size-up' )
const sizeDouw = document.querySelector( ".size-down" )
const color = document.querySelector( ".color" )
const p = document.querySelector( "p" )

let fontsize = 20;
function bigText ()
{
    fontsize += 5
    p.style.fontSize = fontsize + 'px'
   
}
function smallText ()
{
    fontsize -= 5
    p.style.fontsize = fontsize + 'px'
}
function colorf ()
{
    p.style.color = 'gold'
}
color.addEventListener('click', colorf)
sizeUp.addEventListener( 'click', bigText )
sizeDouw.addEventListener( 'click', smallText )



