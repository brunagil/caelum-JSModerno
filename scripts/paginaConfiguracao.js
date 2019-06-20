//$inputPaginaInicial.value = "google.com.br"
//$inputPermitiuSalvar.checked = true;

$inputPaginaInicial.value = localStorage.getItem('paginaInicial')
$inputPermitiuSalvar.checked = JSON.parse(localStorage.getItem('aceitouSalvar'))
