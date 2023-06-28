import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('input');

const textEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle((e) => {
   const obj = {
        email: inputEl.value,
        message: textEl.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    console.log(localStorage)
}, 500))

function loadLocalStorage () {
    const valueStorage = localStorage.getItem("feedback-form-state")
    if(valueStorage) {
        const valueStorageJs = JSON.parse(valueStorage);
        inputEl.value = valueStorageJs.email;
        textEl.value = valueStorageJs.message;
        console.log(valueStorage)
    } 
    else {
        return
    }
}
loadLocalStorage();

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inputEl.value === "" || textEl.value === ""){
        alert('All fields must be filled')
    }
    else {
    const objValues = {
        email: inputEl.value,
        message: textEl.value
    }
    localStorage.removeItem("feedback-form-state")
    console.log("Feedback form state :", objValues)
    formEl.reset()}
    
})
