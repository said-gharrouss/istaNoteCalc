// ================== result final section ===========================

let note1 = document.querySelector(".n1");
let note2 = document.querySelector(".n2");
let noteEff = document.querySelector(".nf");
let result = document.querySelector(".result");

note1.oninput = () => {
    const n1 = parseFloat(note1.value) || 0;
    const n2 = parseFloat(note2.value) || 0;
    const nf = parseFloat(noteEff.value) || 0;
    const resultValue = ((n1 + (n2 * 3) + nf) / 9).toFixed(2);
    result.textContent = resultValue ;
}

note2.oninput = () => {
    const n1 = parseFloat(note1.value) || 0;
    const n2 = parseFloat(note2.value) || 0;
    const nf = parseFloat(noteEff.value) || 0;
    const resultValue = ((n1 + (n2 * 3) + nf) / 9).toFixed(2);
    result.textContent = resultValue ;
}

noteEff.oninput = () => {
    const n1 = parseFloat(note1.value) || 0;
    const n2 = parseFloat(note2.value) || 0;
    const nf = parseFloat(noteEff.value) || 0;
    const resultValue = ((n1 + (n2 * 3) + nf) / 9).toFixed(2);
    result.textContent = resultValue ;
}

// ====================== navbar ===================================

let rfbtn = document.querySelector(".rf");
let effbtn = document.querySelector(".eff");
let rfBox = document.querySelector(".rf-container");
let effBox = document.querySelector(".eff-container");

effbtn.onclick = () => {
    rfbtn.classList.remove("active");
    effbtn.classList.add("active");
    rfBox.style.display = "none";
    effBox.style.display = "block";
}
rfbtn.onclick = () => {
    effbtn.classList.remove("active");
    rfbtn.classList.add("active");
    effBox.style.display = "none";
    rfBox.style.display = "block";
}

// ========================== note de EFF section =============================

let note1_eff = document.querySelector(".effn1");
let note2_eff = document.querySelector(".effn2");
let note_eff = document.querySelector(".effnote");
let result_note = document.querySelector(".effresult");

note1_eff.oninput = () => {
    const n1 = parseFloat(note1_eff.value) || 0;
    const n2 = parseFloat(note2_eff.value) || 0;
    const rn = parseFloat(result_note.value) || 0;
    const EffValue = (9 * rn) - n1 - (3 * n2).toFixed(2);
    note_eff.textContent = EffValue ;
}

note2_eff.oninput = () => {
    const n1 = parseFloat(note1_eff.value) || 0;
    const n2 = parseFloat(note2_eff.value) || 0;
    const rn = parseFloat(result_note.value) || 0;
    const EffValue = (9 * rn) - n1 - (3 * n2).toFixed(2);
    note_eff.textContent = EffValue ;
}

result_note.oninput = () => {
    const n1 = parseFloat(note1_eff.value) || 0;
    const n2 = parseFloat(note2_eff.value) || 0;
    const rn = parseFloat(result_note.value) || 0;
    const EffValue = (9 * rn) - n1 - (3 * n2).toFixed(2);
    note_eff.textContent = EffValue ;
}







