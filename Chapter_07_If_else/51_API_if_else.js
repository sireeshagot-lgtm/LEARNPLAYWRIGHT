let statusCode = 800;

if (statusCode === 200) {
    console.log("OK: The request was successful.");
}
else if (statusCode === 404) {
    console.log("Not Found: The requested resource was not found.");
}
else if (statusCode === 500) {
    console.log("Internal Server Error: The server encountered an error.");
}

else {
    console.log("Unknown Status Code: " + statusCode);
}