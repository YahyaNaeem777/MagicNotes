console.log("magic notes using javascript");
shownotes();


// if user adds a note, add it into the local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function(e) {
    let addtit = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    if (addTxt.value == "" || addtit.value == "") {
        return alert('Please fill the textfield')
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    let valObj = {
        title: addtit.value,
        txt: addTxt.value
    }
    noteObj.push(valObj);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addtit.value = null;
    addTxt.value = null;

    // console.log(noteObj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    let html = "";
    noteObj.forEach(function(element, index) {
        html += ` <div class="card  col-md-5 col-lg-3 col-12 my-3 mx-3" >
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <h3 class="card-title">${element.title}</h3>
            <p class="card-text">${element.txt}</p>
            <button href="#" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let noteEle = document.getElementById("notes");
    if (noteObj != null) {
        noteEle.innerHTML = html;
    } else {
        noteEle.innerHTML = `nothing to show please use a note adds section and click on node button`;
    }

}