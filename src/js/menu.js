let fechou = true;

function mostrarMenu()
{
    let container = document.getElementById("container_header"),
    logoContainer = document.getElementById("logo_header"),
    fechaMenu = document.getElementById("fechar_menu"),
    abreMenu = document.getElementById("menu_cta"),
    nav = document.getElementById("nav"),
    peca_btn = document.getElementById("peca_btn");
    

    nav.classList.add("nav_ativo");
    nav.style.display= "flex";
    document.getElementById("barra_um").style.display = "flex";
    document.getElementById("barra_dois").style.display = "flex";
    
    container.classList.add("ativo_container");
    
    logoContainer.classList.add("logo_ativo");

    fechaMenu.classList.add("fechar_ativo")

    abreMenu.classList.add("esconde");

    peca_btn.classList.add("esconde");

    fechou = false;
}

function fecharMenu()
{
    let container = document.getElementById("container_header"),
    logoContainer = document.getElementById("logo_header"),
    fechaMenu = document.getElementById("fechar_menu"),
    abreMenu = document.getElementById("menu_cta"),
    nav = document.getElementById("nav"),
    peca_btn = document.getElementById("peca_btn");
    

    nav.classList.remove("nav_ativo");
    nav.style.display= "none";
    
    container.classList.remove("ativo_container");
    
    logoContainer.classList.remove("logo_ativo");

    fechaMenu.classList.remove("fechar_ativo")

    abreMenu.classList.remove("esconde");

    peca_btn.classList.remove("esconde");

    fechou = true;
}

window.addEventListener('resize', function(event) {

    let nav = document.getElementById("nav");

    if(window.matchMedia("(min-width: 1020px)").matches)
    {
        fecharMenu();
        document.getElementById("nav").style.display = "flex";
    }
    else if(window.matchMedia("width: 1019px"))
    {   
        if(fechou)
        nav.style.display = "none";
    }
});