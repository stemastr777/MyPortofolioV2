

function descriptiveToPathCompatible(descriptive) {
    return descriptive.toLowerCase().replace(" ", "-")
}

function pathToDescriptiveCompatible(path) {
    return path.replace("/", "").replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())
}

function fileNameSimplifier(filename="", cutStart) {

    let res = ""

    const extIndex = filename.indexOf('.')

    res += filename.slice(0, cutStart)
    res += '...'
    res += filename.slice(extIndex-3)

    return res
}


export { descriptiveToPathCompatible, pathToDescriptiveCompatible, fileNameSimplifier }