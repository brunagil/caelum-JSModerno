export let paginaInicial = localStorage.getItem('paginaInicial')

export function setPaginaInicial(valor) {
    localStorage.setItem('paginaInicial', valor)
}

export function setPedePaginaInicial(valor) {
    paginaInicial = valor
    localStorage.setItem('paginaInicial', valor)
} 


