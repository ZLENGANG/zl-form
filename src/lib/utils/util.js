export const tranToArray = (val) => {
    if (Array.isArray(val)) {
        return val
    } else if (val === undefined || val === null || val === '') {
        return []
    }
    return [val]
}