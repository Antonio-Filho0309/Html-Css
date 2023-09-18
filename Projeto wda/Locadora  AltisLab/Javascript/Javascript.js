
function abrirfechar(){
var sidebar=document.getElementById('sidebar')

if(sidebar.classList.contains('sidebar')){
    sidebar.classList.remove('sidebar')
    sidebar.classList.add('sidebar-curta')
    } else {
        sidebar.classList.remove('sidebar-curta')
        sidebar.classList.add('sidebar')
    }
}