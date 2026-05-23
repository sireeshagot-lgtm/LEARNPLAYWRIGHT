//Build Health Reporter
/*Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let buildhealth = 10;

if (buildhealth === 100) {

    console.log("Input:" + buildhealth, "Output: Green build")
}
else if (buildhealth >= 90 && buildhealth <= 99) {
    console.log("Input:" + buildhealth, "Output: Stable build — Investigate failures")
}
else if (buildhealth >= 70 && buildhealth <= 89) {
    console.log("Input:" + buildhealth, "Output: Unstable build")
}
else if (buildhealth <= 70) {
    console.log("Input:" + buildhealth, "Output: Broken build, block deployment")
}
