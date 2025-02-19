//Author(s): Ethan Scott//

let relationshipIDSelected = parseInt(localStorage.getItem("relationshipIDSelected"));
console.log(relationshipIDSelected)

document.getElementById("name").innerHTML = PersonNames[relationshipIDSelected];
document.getElementById("role").innerHTML = "Role: "+PersonRoles[relationshipIDSelected]+" ("+PersonSexes[relationshipIDSelected]+")";
document.getElementById("age").innerHTML = "Age: "+PersonAges[relationshipIDSelected];
document.getElementById("relationshipText").innerHTML = "Relationship: "+PersonRelationships[relationshipIDSelected];

Logs = "I looked at my "+PersonRoles[relationshipIDSelected]+".";
localStorage.setItem("Logs", Logs);

document.getElementById("x").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./home.html";
})

document.getElementById("left").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./relationships.html";
})