const fileSelect = document.getElementById('select');
const drop = document.querySelector('.inputContainer');
const label = document.querySelector('.custom-file');
fileSelect.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    var files = Object.keys(fileList).length;
    label.innerHTML = files + " file(s) uploaded";
    fileSelect.disabled = "true";
});