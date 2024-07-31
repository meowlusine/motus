

var numCase = "11";
var ListeMot =['agent', 'aider', 'aimer', 'alors', 'amour', 'autre', 'autre', 'avoir', 'bande', 'beaux', 'blanc', 'blond', 'boire', 'bruit', 'calme', 'carte', 'cause', 'celui', 'chair', 'champ', 'chant', 'chaud', 'chien', 'choix', 'chose', 'chute', 'clair', 'coeur', 'corde', 'corps', 'cours', 'court', 'crise', 'croix', 'cruel',  'digne', 'doigt', 'doute', 'douze', 'drame', 'droit', 'faire', 'faute', 'fixer', 'fleur', 'folie', 'force', 'forme', 'foule', 'frais', 'franc', 'froid', 'front', 'fruit', 'fumer', 'fusil', 'garde', 'genou', 'glace', 'grain', 'grand', 'grave', 'haine', 'haute', 'hiver', 'honte', 'image', 'jambe', 'jaune', 'jouer', 'juger', 'juste', 'large', 'larme', 'libre', 'ligne', 'livre', 'lourd', 'matin', 'mieux', 'mince', 'miser', 'moins', 'monde', 'moyen', 'noire', 'notre', 'nuage', 'objet', 'odeur', 'ombre', 'oncle', 'parmi', 'parti', 'payer', 'perdu', 'place', 'plein', 'pluie', 'poche', 'poids', 'point', 'porte', 'poser', 'poste', 'quand', 'quart', 'rayon', 'repas','riche', 'roche', 'roman', 'rouge', 'route', 'ruine', 'sable', 'saint',  'salut', 'selon', 'seuil', 'signe', 'sorte', 'sourd', 'subir', 'suite', 'sujet', 'table', 'tache', 'taire', 'tapis', 'temps', 'tenir', 'toile', 'tombe', 'trace', 'train','trois', 'usage', 'vague', 'vaste', 'venir', 'vieux', 'vingt', 'voile', 'voler', 'votre'];
var listeLettreFaux=[];
var listeLettreMalPlace=[];
var listeLettreBon=[];

document.getElementById('resultat').style.visibility = 'hidden';

function RecupMot(){
  let random = Math.floor(Math.random() * ListeMot.length);
  return ListeMot[random];
}

var motFinal = RecupMot();


document.getElementById("case21").disabled = true;
document.getElementById("case22").disabled = true;
document.getElementById("case23").disabled = true;
document.getElementById("case24").disabled = true;
document.getElementById("case25").disabled = true;
document.getElementById("case31").disabled = true;
document.getElementById("case32").disabled = true;
document.getElementById("case33").disabled = true;
document.getElementById("case34").disabled = true;
document.getElementById("case35").disabled = true;
document.getElementById("case41").disabled = true;
document.getElementById("case42").disabled = true;
document.getElementById("case43").disabled = true;
document.getElementById("case44").disabled = true;
document.getElementById("case45").disabled = true;
document.getElementById("case51").disabled = true;
document.getElementById("case52").disabled = true;
document.getElementById("case53").disabled = true;
document.getElementById("case54").disabled = true;
document.getElementById("case55").disabled = true;
document.getElementById("case61").disabled = true;
document.getElementById("case62").disabled = true;
document.getElementById("case63").disabled = true;
document.getElementById("case64").disabled = true;
document.getElementById("case65").disabled = true;

function AjoutCase(){
  if(parseInt(numCase[1])<5){
      numCase = numCase[0]+(parseInt(numCase[1])+1).toString();
  }
  else{
    numCase = (parseInt(numCase[0])+1).toString()+"1";
  }
  return 1;
}


function EcrireCase(numCase,lettre){
  if(document.getElementById("case"+numCase).disabled == false){
    document.getElementById("case"+numCase).value = lettre;
    var numCase = AjoutCase();
  }
}

function Enter(){
  let mot = "";
  if(numCase[1]== "1" && numCase[0]!="1" ){
    for(let i=1;i<6;i++){
      mot = mot + document.getElementById("case"+(parseInt(numCase[0])-1).toString()+i.toString()).value;
      if((parseInt(numCase[0])-1).toString()<=5){
        document.getElementById("case"+numCase[0]+i.toString()).disabled =false;
      }
    }
  }
  VerifMot(mot.toLowerCase());
  CouleurClavier();
  if(Fin(mot.toLowerCase())){
    document.getElementById("case21").disabled = true;
    document.getElementById("case22").disabled = true;
    document.getElementById("case23").disabled = true;
    document.getElementById("case24").disabled = true;
    document.getElementById("case25").disabled = true;
    document.getElementById("case31").disabled = true;
    document.getElementById("case32").disabled = true;
    document.getElementById("case33").disabled = true;
    document.getElementById("case34").disabled = true;
    document.getElementById("case35").disabled = true;
    document.getElementById("case41").disabled = true;
    document.getElementById("case42").disabled = true;
    document.getElementById("case43").disabled = true;
    document.getElementById("case44").disabled = true;
    document.getElementById("case45").disabled = true;
    document.getElementById("case51").disabled = true;
    document.getElementById("case52").disabled = true;
    document.getElementById("case53").disabled = true;
    document.getElementById("case54").disabled = true;
    document.getElementById("case55").disabled = true;
    document.getElementById("case61").disabled = true;
    document.getElementById("case62").disabled = true;
    document.getElementById("case63").disabled = true;
    document.getElementById("case64").disabled = true;
    document.getElementById("case65").disabled = true;
  }
  return mot.toLowerCase();
}

function VerifMot(mot){
  for( let i=0;i<mot.length;i++){
    if(mot[i]==motFinal[i]){
      document.getElementById("case"+(parseInt(numCase[0])-1).toString()+(i+1).toString()).style.backgroundColor = "#71f235";
      if(listeLettreBon.includes(mot[i])==false){
        listeLettreBon.push(mot[i]);
      }
    }
    else if(motFinal.includes(mot[i])==true){
      document.getElementById("case"+(parseInt(numCase[0])-1).toString()+(i+1).toString()).style.backgroundColor = "#fcd432";
      if(listeLettreMalPlace.includes(mot[i])==false){
        listeLettreMalPlace.push(mot[i]);
      }
    }
    else{
      document.getElementById("case"+(parseInt(numCase[0])-1).toString()+(i+1).toString()).style.backgroundColor = "#d4cdcf";
      if(listeLettreFaux.includes(mot[i])==false){
        listeLettreFaux.push(mot[i]);
      }
    }
  }
  return 1;
}


function CouleurClavier(){
  for(let i=0;i<listeLettreFaux.length;i++){
    document.getElementById(listeLettreFaux[i].toUpperCase()).style.backgroundColor = "#d4cdcf";
  }
  for(let i=0;i<listeLettreMalPlace.length;i++){
    document.getElementById(listeLettreMalPlace[i].toUpperCase()).style.backgroundColor = "#fcd432";
  }
  for(let i=0;i<listeLettreBon.length;i++){
    listeLettreBon[i].toUpperCase();
      document.getElementById(listeLettreBon[i].toUpperCase()).style.backgroundColor = "#71f235";
  }
}

function Remove(){
  if(numCase[1]!="1" ){
    numCase = numCase[0]+(parseInt(numCase[1])-1).toString();
    document.getElementById("case"+numCase).value = "";
  }
  else if(numCase[1]==1 && numCase[0]!="1"){
    numCase = (parseInt(numCase[0])-1).toString()+"5"; 
    document.getElementById("case"+numCase).value = "";
 
  }
}
function Rejouer(){
  location.reload();
}

function Fin(mot){
  console.log(mot);
  console.log(motFinal);
  
  if(motFinal==mot){
    document.getElementById("resultatFinal").innerHTML = "Vous avez gagné !";
    document.getElementById('resultat').style.visibility = 'visible';
    return 1;
    
  }
  else{
    if(numCase=="71"){
      document.getElementById("resultatFinal").innerHTML = "Vous avez perdu ! La réponse était " + motFinal;
      document.getElementById('resultat').style.visibility = 'visible';
    }
    return 0;
  }
}
