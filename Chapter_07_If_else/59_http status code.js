/* Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

let statuscode = 314;

if (statuscode >= 200 && statuscode <= 299) {
    console.log("Input:" + statuscode, "Output: Success")
}
else if (statuscode >= 300 && statuscode <= 399) {
    console.log("Input:" + statuscode, "Output: Redirection")
}
else if (statuscode >= 400 && statuscode <= 499) {
    console.log("Input:" + statuscode, "Output: Client Error")
}
else if (statuscode >= 500 && statuscode <= 599) {
    console.log("Input:" + statuscode, "Output: Server Error")
}
else {
    console.log("Input:" + statuscode, "Output: Invalid")
}
