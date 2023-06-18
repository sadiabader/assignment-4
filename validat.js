let login = () => {
    
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let password = document.getElementById('pass').value
    let contact = document.getElementById('contact').value

    }
function validation(){
    let str = "A-Z||a-z||0-9"
    let fname = /^[a-z]{3,10}$/i
    let lname = /^[a-z]{3,10}$/i
    let password = /^[\w@-]{8,12}$/i
    let contact = /^[\d{10}]$/

let result1 = str.match(fname)
let result2 = str.match(lname)
let result3 = str.match(password)
let result4 = str.match(contact)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
}

validation()