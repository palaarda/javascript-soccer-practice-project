let editMode = document.getElementById("editMode");
let scoreButtons = document.getElementById("scoreButtons");
let teamA = document.getElementById("team-a");
let teamB = document.getElementById("team-b");
let teamA_Score = document.getElementById("team-a-score");
let teamB_Score = document.getElementById("team-b-score");
let league = document.getElementById("league");
let teamA_Nmb = 0;
let teamB_Nmb = 0;

function openEditMode(){
    editMode.style.display = "flex";
    scoreButtons.style.display = "flex";
}
function closeEditMode(){
    editMode.style.display = "none";
    scoreButtons.style.display = "none";
}
function team_a_add_score(){
    teamA_Nmb++
    teamA_Score.innerHTML = teamA_Nmb;
}
function team_a_rmv_score(){
    teamA_Nmb--
    teamA_Score.innerHTML = teamA_Nmb;
}
function team_b_add_score(){
    teamB_Nmb++
    teamB_Score.innerHTML = teamB_Nmb;
}
function team_b_rmv_score(){
    teamB_Nmb--
    teamB_Score.innerHTML = teamB_Nmb;
}
function change_team_a(){
    let teamA_Name = prompt("A Takımını Girin: ");
    teamA.innerHTML = teamA_Name;
}
function change_team_b(){
    let teamB_Name = prompt("B Takımını Girin: ");
    teamB.innerHTML = teamB_Name;
}
function change_score_a(){
    let teamA_Score_Manuel = parseInt(prompt("A Takımı Skorunu Girin: "));
    teamA_Nmb = teamA_Score_Manuel;
    teamA_Score.innerHTML = teamA_Score_Manuel;
}
function change_score_b(){
    let teamB_Score_Manuel = parseInt(prompt("B Takımı Skorunu Girin: "));
    teamB_Nmb = teamB_Score_Manuel;
    teamB_Score.innerHTML = teamB_Score_Manuel;
}
function change_league(){
    let leaguePrompt = prompt("Lig Girin: ")
    league.innerHTML = leaguePrompt;
}