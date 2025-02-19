
function addEducation() {
    eduDiv = document.createElement("div")
    eduDiv.setAttribute("class", "border p-4 mb-3")
    eduDiv.innerHTML = `<br>Enter School/College :<input type="text" class="form-control college">
    <br>Enter Branch/Class :<input type="text" class="form-control year">
    <br>Aggregate Marks :<input type="text" class="form-control marks">`
    educationDetails.appendChild(eduDiv)
}

function addSkills() {
    skillDiv = document.createElement("div")
    skillDiv.setAttribute("class", "form-group")
    skillDiv.innerHTML = `<input type="text" class="form-control skills" placeholder="Enter a Skill">`
    skillDetails.appendChild(skillDiv)
}

function addWorkExperience() {
    workDiv = document.createElement("div")
    workDiv.setAttribute("class", "form-group")
    workDiv.innerHTML = `<textarea type="text" class="form-control work"
    placeholder="Enter Work Experience (With Description)" rows="4"></textarea>`
    workDetails.appendChild(workDiv)
}

function addAchievement() {
    achieveDiv = document.createElement("div")
    achieveDiv.setAttribute("class", "form-group")
    achieveDiv.innerHTML = `<input type="text" class="form-control achieve" placeholder="Enter Achievement">`
    achieveDetails.appendChild(achieveDiv)
}

function addProject() {
    projectDiv = document.createElement("div")
    projectDiv.setAttribute("class", "form-group")
    projectDiv.innerHTML = `<textarea type="text" class="form-control project"
    placeholder="Enter Project (With Description)" rows="4"></textarea>`
    projectDetails.appendChild(projectDiv)
}

//Main logic
function generate(){
    if((noPhoto.value == "false")){
        document.getElementById("rightside").style.backgroundColor = document.getElementById("templateColor").value;
    }
    let cardHeader = Array.from(document.getElementsByClassName("card-header"));
    cardHeader.forEach(element => {
        element.style.backgroundColor = document.getElementById("templateColor").value;
    });

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let linkedin = document.getElementById("linkedin").value;
    let github = document.getElementById("github").value;

    nameT.innerHTML = name;
    nameHead.innerHTML = name;
    emailT.innerHTML = email;
    contactT.innerHTML = contact;
    linkedinT.innerHTML = linkedin;
    githubT.innerHTML =github;

    let str = "";
   
    let skills = document.getElementsByClassName("skills");
    Array.from(skills).forEach(element => {
        str = str + `<li> ${element.value} </li>`
    });

    document.getElementById("skillsT").innerHTML = str;

    str = "";
   
    let work = document.getElementsByClassName("work");
    Array.from(work).forEach(element => {
        str = str + `<li> ${element.value} </li>`
    });

    document.getElementById("workT").innerHTML = str;

    str = "";
   
    let achieve = document.getElementsByClassName("achieve");
    Array.from(achieve).forEach(element => {
        str = str + `<li> ${element.value} </li>`
    });

    document.getElementById("achieveT").innerHTML = str;

    str = "";
   
    let project = document.getElementsByClassName("project");
    Array.from(project).forEach(element => {
        str = str + `<li> ${element.value} </li>`
    });

    document.getElementById("projectT").innerHTML = str;

    str = "";

    let college = document.getElementsByClassName("college");
    let year = document.getElementsByClassName("year");
    let marks = document.getElementsByClassName("marks"); 
   
    let collegeArr = Array.from(college);
    let yearArr = Array.from(year);
    let marksArr = Array.from(marks);

    for (let i = 0; i < collegeArr.length; i++) {
        str = str + `<li> `+collegeArr[i].value+ `  ( ` +yearArr[i].value+ ` )` + `           <i>Aggregate percentage/CGPA :             ` +marksArr[i].value+ `</i> </li>`
        
    }

    document.getElementById("eduT").innerHTML = str;

    //photo
    if((noPhoto.value == "false")){
        let file = document.getElementById("photo").files[0];
        let reader = new FileReader();
        
        try {
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                document.getElementById("photoT").src = reader.result;
            }
        } catch (error) {
            console.log("Not uploaded photo")
        }
        
    }

    document.getElementById("cv-template").style.display = "block";
    document.getElementById("printBtn").style.display = "block";
    // document.getElementById("infoContainer").style.display = "none";


}

function printCV(){
    var printContent = document.getElementById("cv-template").innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}