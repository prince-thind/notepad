const saveBtn = document.querySelector('#save-text');
const textArea = document.querySelector('#text');
const fileUploadForm = document.querySelector('#file-upload-form');
const editForm = document.querySelector('#edit-form');

saveBtn.addEventListener('click', saveText);
fileUploadForm.addEventListener('submit', uploadText);
textArea.addEventListener('change', updateLocalStorage);
editForm.addEventListener('submit', edit);
init();

function edit(e) {
  e.preventDefault();
  const fontSize = e.target['font-size'].value;
  textArea.style.fontSize = fontSize + 'px';
  localStorage.setItem('notepad-font-size', fontSize);
}
function updateLocalStorage(e) {
  const text = e.target.value;
  localStorage.setItem('notepad-text', text);
}

function init() {
  textArea.value = localStorage.getItem('notepad-text');
  textArea.style.fontSize =
    (localStorage.getItem('notepad-font-size') || '16') + 'px';
}

function saveText(e) {
  e.preventDefault();
  const text = textArea.value;
  const downloadBtn = document.createElement('a');
  downloadBtn.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  downloadBtn.setAttribute('download', 'data.txt');
  downloadBtn.click();
}

function uploadText(e) {
  e.preventDefault();
  const inputFile = e.target.file.files[0];
  const textPromise = readText(inputFile);
  textPromise.then((text) => {
    textArea.value = text;
  });
}

async function readText(file) {
  const text = await new Response(file).text();
  return text;
}
