
// Função para rolar a pagina ao destino indicado no HTML
function rolarPara(sectionId){
    let section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}