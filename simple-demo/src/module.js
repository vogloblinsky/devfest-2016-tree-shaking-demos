export let log = {
    debug: (message) => { console.debug(message) },
    error: (message) => { throw new Error(message) }
}
