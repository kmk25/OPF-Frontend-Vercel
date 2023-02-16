const dropArea = document.querySelector(".drag-image"),
  dragText = dropArea.querySelector("h6"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
let file;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  viewfile();
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();

  file = event.dataTransfer.files[0];
  viewfile();
});

function viewfile() {
  let fileType = file.type;
  console.log(fileType);
  let validExtensions = ["text/csv"];
  if (validExtensions.includes(fileType)) {
  } else {
    alert("This is not a CSV File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
