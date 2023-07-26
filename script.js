
function gerar(){

    var num = window.document.getElementById('ndi')
    var tab = window.document.getElementById('tabuada')

    if(num.value.length == 0){
        window.alert('Insira um valor para prosseguir!')
    } else {

        var n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 1 ; c <= 10 ; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}