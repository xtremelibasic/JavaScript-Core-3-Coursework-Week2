let newImageBtn = document.getElementById("newImageBtn");
let gallery = document.getElementById("dogPhotoGallery");

function getNewImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        let listItem = document.createElement("li");
        let image = document.createElement("img");
        image.src = data.message;
        listItem.append(image);
        gallery.append(listItem);
    })
    .catch(err => console.warn(err))
}

newImageBtn.addEventListener("click", getNewImage)