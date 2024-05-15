var stulist = document.getElementById("stulist")
var savebtn = document.getElementById("savebtn")
var stuname = document.getElementById("name")
var stuage = document.getElementById("age")
var gender = document.getElementsByName("Gender")
var cls = document.getElementById("cls")
var sex;
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var firstclick = 0
var newheadrow = document.createElement("tr")

savebtn.addEventListener("click", function () {
    if (gender[0].checked == true) {
        sex = "Female"
    } else if (gender[1].checked == true) {
        sex = "Male"
    }
    newheadrow.innerHTML = "<tr><td class='border border-black p-2'><h1>Name</h1></td><td class='border border-black p-2'><h1>Age</h1></td><td class='border border-black p-2'><h1>Gender</h1></td><td class='border border-black p-2'><h1>Email</h1></td><td class='border border-black p-2'><h1>Phone Number</h1></td><td></td></tr>"
    var newrow = document.createElement("tr")
    newrow.innerHTML = "<td class='border border-black p-2'><p>" + stuname.value + "</p></td>" + "<td class='border border-black p-2'><p>" + stuage.value + "</p></td>" + "<td class='border border-black p-2'><p>" + sex + "</p></td>" + "<td class='border border-black p-2'><p>" + email.value + "</p></td>" + "<td class='border border-black p-2'><p>" + phone.value + "</p></td>" + "<td><button id='cls' onClick='del(event)' class='bg-red-700 text-white p-1 m-1'>Remove</button></td>"
    newrow.classList.add("closest")
    if (firstclick === 0) {
        stulist.append(newheadrow, newrow)
    } else {
        stulist.append(newrow)
    }
    firstclick = firstclick + 1
})

function del(event) {
    event.target.closest(".closest").remove()
    firstclick = firstclick - 1
    if (firstclick === 0) {
        newheadrow.remove()
    }
    console.log(firstclick);
}