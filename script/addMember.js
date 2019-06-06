//Firebase Config
var registreredUsers = [
    {
        userName: "filip",
        email: "filip@filip.com",
        profilePic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "oj",
        email: "oj@oj.com",
        profilePic: "https://images.unsplash.com/photo-1511200016789-e7b694d91f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
    },{
        userName: "sofie",
        email: "sofie@sofie.com",
        profilePic: "https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
    },
    {
        userName: "julian",
        email: "julian@julian.com",
        profilePic: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "fereba",
        email: "fereba@fereba.com",
        profilePic: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    },
    {
        userName: "micheal",
        email: "micheal@micheal.com",
        profilePic: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80"
    }

];

var membersInProject = [
   
];

var wrapper = document.getElementById("addMember");
var memberButton = document.getElementById("addMemberIcon");
var members = document.getElementById("members");

var submitButton = document.getElementById("submitMemberInput");

console.log(memberButton);

wrapper.appendChild(memberButton);

function enterMember(event){
    if(submitButton.focus && event.which == 13) {
        submitMember();
    }
}

function submitMember (){
    var memberInput = document.getElementById("submitMemberInput");
    var newValue = memberInput.value;

    for(var i = 0; i < membersInProject.length; i++) {
        if(newValue == membersInProject[i].userName || newValue == membersInProject[i].email) {
            memberInput.value = "";
            memberInput.setAttribute("placeholder", "Member already added");
            return;
        }
    }

    for(var k = 0; k < registreredUsers.length; k++){
        if(newValue === registreredUsers[k].userName || newValue === registreredUsers[k].email) {
            membersInProject.push(registreredUsers[k]);
            var memberImageContainer = document.createElement("div");
            memberImageContainer.className = "memberImageContainer";

            var memberImage = document.createElement("img");
            memberImageContainer.appendChild(memberImage)
            memberImage.className = "memberImage";
            memberInput.value = "";
            memberImage.setAttribute("src", registreredUsers[k].profilePic)
            members.appendChild(memberImageContainer);
            return;
        }
    }
    memberInput.value = "";
    memberInput.setAttribute("placeholder", "Invalid name");
};