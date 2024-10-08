const imageInput = document.getElementById("imageInput");
const canvas = document.getElementById("imageCanvas");
const ctx = canvas.getContext("2d");
const encryptButton = document.getElementById("encryptButton");
const decryptButton = document.getElementById("decryptButton");
const downloadLink = document.getElementById("downloadLink");

let originalImageData = null;
let encryptedImageData = null;


imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

     
      originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});


function manipulatePixels(imageData, operation) {
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    
    if (operation === "encrypt") {
      const temp = data[i]; 
      data[i] = data[i + 2]; 
      data[i + 2] = temp; 
    } else if (operation === "decrypt") {
      const temp = data[i]; 
      data[i] = data[i + 2];
      data[i + 2] = temp;
    }
  }

  return imageData;
}


encryptButton.addEventListener("click", function () {
  if (!originalImageData) return alert("Please upload an image first!");

  encryptedImageData = manipulatePixels(
    ctx.getImageData(0, 0, canvas.width, canvas.height),
    "encrypt"
  );
  ctx.putImageData(encryptedImageData, 0, 0);


  downloadLink.style.display = "inline-block";
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = "encrypted_image.png";
  downloadLink.textContent = "Download Encrypted Image";
});


decryptButton.addEventListener("click", function () {
  if (!encryptedImageData) return alert("No encrypted image to decrypt!");

  const decryptedImageData = manipulatePixels(
    ctx.getImageData(0, 0, canvas.width, canvas.height),
    "decrypt"
  );
  ctx.putImageData(decryptedImageData, 0, 0);

  
  downloadLink.style.display = "inline-block";
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = "decrypted_image.png";
  downloadLink.textContent = "Download Decrypted Image";
});
