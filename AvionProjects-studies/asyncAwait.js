// //JS reads from top to bottom
// //

// const photos = [];

// function photoUpload() {
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             photos.push("Picture");
//             resolve("Photo Uploaded");
//     }, 3000);
//     });


// let result = uploadStatus;
// console.log(result);
// console.log(photos.length);
// }
// photoUpload();

async function getCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);
}
getCatFact();