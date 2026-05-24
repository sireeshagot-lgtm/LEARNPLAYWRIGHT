function getJsBasicsKeywordMeaning(term) {
    if (term === "Node") {
        return "runtime"
    }
    else if (term === "v8") {
        return "engine"
    }
    else if (term === "npm") {
        return "package manager"
    }
    else if (term === "Not a topic") {
        return "Unknown"

    }
}
console.log(getJsBasicsKeywordMeaning("npm"))