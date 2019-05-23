export function set (elem) {
    const store = JSON.stringify({ ...get(), ...elem});
    localStorage.store = store
}

export function get () {
    return localStorage.store ? JSON.parse(localStorage.store) : {}
}