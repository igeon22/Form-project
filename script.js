let form = document.querySelector("form")
let password1 = document.querySelector("#pass-1")
let password2 = document.querySelector("#pass-2")
let passwordAlert = document.querySelector(".match")


passwordAlert.style.visibility = "hidden"


form.addEventListener("submit",(e)=>{

	if(password1.value  != password2.value){
		e.preventDefault()
		passwordAlert.style.visibility = "visible"

	}
	if(password1.value  == password2.value){
		console.log("dat sent!")
	}
})