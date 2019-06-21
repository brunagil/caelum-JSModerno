export default localStorage.getItem('paginaInicial')

export function setPaginaInicial(paginaInicial) {
    localStorage.setItem('paginaInicial', paginaInicial)
} 

export function setPedePaginaInicial(value) {
    localStorage.setItem('paginaInicial', value)
}
