function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    suiteName = suiteName.trim();
    environment = environment.toLowerCase();
    return suiteName + " | " + environment + " | build-" + buildNumber
}
console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42))