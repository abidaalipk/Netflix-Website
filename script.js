const centerdiv = document.getElementById("centerdiv");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=100").then((apidata) => {
 return (apidata.json());
}).then((jsondata) => {
console.log(jsondata[0].url);

jsondata.map((val) => {
    key = val.id;
    let img = document.createElement("img");
    // img.src = val.url;
    img.src = `https://picsum.photos/350/500?random=${val.id}`;
    centerdiv.appendChild(img);
   console.log(val.url);
});
});

