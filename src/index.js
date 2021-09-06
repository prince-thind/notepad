const saveBtn=document.querySelector('#save-text');
const textArea=document.querySelector('#text');
saveBtn.addEventListener('click',saveText);

function saveText(e){
    e.preventDefault();
    const text=textArea.value;
    const downloadBtn=document.createElement('a');
    downloadBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    downloadBtn.setAttribute('download', 'text.txt');
    downloadBtn.click();
}