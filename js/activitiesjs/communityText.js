//Author(s): Ethan Scott//

document.getElementById("heading").innerHTML = "Community ("+CommunityNames.length+")";

for (let i = 0; i < CommunityNames.length; i++) {
  const link = document.createElement("a"); //creates the link//
  const para = document.createElement("p"); //creates the text//
  para.innerText = CommunityNames[i] + " ("+CommunitySexes[i]+")"; //sets the text of the text//
  para.id = i; //sets the id//
  link.appendChild(para); //adds the text to the link so the text is the link//
  link.classList.add("pseudolink"); //gives it the link look//
  console.log(i);
  document.getElementById("theDIV").appendChild(link); //adds the stuff to the page//
  document.getElementById(i).addEventListener('click', () => { //takes you to the page of the relationship you clicked//
    relationshipIDSelected = i;
    console.log(relationshipIDSelected);
    localStorage.setItem("relationshipIDSelected", i);
    window.location.href = "./community-person.html";
  })
};