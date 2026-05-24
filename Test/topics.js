function filterSupportedJsBasicsTopics(topics) {
    if (topics === "node" || topics === "runtime") {
        return topics;
    }
    else if (topics === "node" || topics === "runtime" || topics === "node") {
        return topics = "node"
    }
}
console.log(filterSupportedJsBasicsTopics("node", "runtime"))