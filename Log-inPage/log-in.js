function setFormMessage(formElement,type,message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
function setInputError(inputElement,message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded",() =>{
    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("submit",e =>{
        e.preventDefault;

        setFormMessage(loginForm,"error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur",e =>{
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be atleast 10 characters in length");
            }
        });
        inputElement.addEventListener("input",e=>{
            clearInputError(inputElement);

        });
    });
});
var i;
var bool = false;
function activeWindow(i){
    if(i==1){
        if(bool){
        document.getElementById('containerlogin-1').style.display="block";
        document.getElementById('containerlogin-2').style.display="none";
            bool = false;
    }}
    if(i==2){
        if(!bool){
            bool = true;
        document.getElementById('containerlogin-2').style.display="block";
        document.getElementById('containerlogin-1').style.display="none";
        }}
}
