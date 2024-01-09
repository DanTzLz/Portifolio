
// Função para rolar a pagina ao destino indicado no HTML
function rolarPara(sectionId, alinhamento){
    let section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth', block:alinhamento});
}