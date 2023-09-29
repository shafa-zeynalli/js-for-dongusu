var $ = (par) => document.querySelector(par)
var $All = (par) => document.querySelectorAll(par) 


$All('span').forEach(function (span) {
    span.addEventListener("click", () => {
        var cloneSpan = span.cloneNode(true)

        if (!span.classList.contains('active')) { 
            span.classList.add('active')
            span.classList.add('inActive')
            $('#sozler').appendChild(cloneSpan)

        } 
        cloneSpan.addEventListener("click", () => {
            $('#sozler').removeChild(cloneSpan)
            span.classList.remove('inActive')
            span.classList.remove('active') 
        })
    })

})

 

var div = $('.progresBar div')
var width = 10
div.style.width = `${width}%`
var isTrue = true

$('.button').addEventListener("click", () => { 
    width += 10
    if (width > 100) {
        width = 100
    }
    div.style.width = `${width}%`
})

$('.click').addEventListener("click", ()=>{
    if(isTrue){
        $('body').style.backgroundColor='black' 
        $('.click').textContent = 'Black Mode'
        isTrue = false
    } else{
        $('body').style.backgroundColor='yellow' 
        $('.click').textContent = 'Yellow Mode'
        isTrue = true
    }

})