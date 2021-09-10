const saveBtn = document.querySelector('#save-text');
const textArea = document.querySelector('#text');
const fileUploadForm = document.querySelector('#file-upload-form');
saveBtn.addEventListener('click', saveText);
fileUploadForm.addEventListener('submit', uploadText);
textArea.addEventListener('change', updateLocalStorage);
init();

function updateLocalStorage(e){
    const text=e.target.value;
    localStorage.setItem('notepad-text',text);
}

function init(){
    textArea.value=localStorage.getItem('notepad-text')
}

function saveText(e) {
  e.preventDefault();
  const text = textArea.value;
  const downloadBtn = document.createElement('a');
  downloadBtn.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  downloadBtn.setAttribute('download', 'text.txt');
  downloadBtn.click();
}

function uploadText(e) {
  e.preventDefault();
  const inputFile = e.target.file.files[0];
  const textPromise = readText(inputFile);
  textPromise.then(text=>{
      textArea.value=text;
  })
}

async function readText(file) {
  const text = await new Response(file).text();
  return text;
}
