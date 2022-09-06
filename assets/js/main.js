let modal = document.getElementById("modal");
let form = document.getElementById("addlist_form");
let data_barang = [];
let root = document.getElementById("root");
let root_title = document.getElementById("root_title");
let modalbtn = document.getElementById("floating_button");
let lihat_list = document.getElementById("lihat_list");
var span = document.getElementsByClassName("close")[0];
let waktu = new Date();

//
// root_title.innerHTML += `
// <h1>List Belanja</h1>
// <h3 class="today">${waktu}</h3>
// `;

//jika form di submit
form.addEventListener("submit", (event) => {
  // cegah form reload page
  event.preventDefault();
  let item = event.target.item.value;
  let harga = event.target.harga.value;

  //validasi
  if (item == "") {
    alert("Silahkan isi nama barang!");
    return;
  } else if (harga == "") {
    alert("Silahkan isi harga barang!");
    return;
  }

  //jadikan value ke object
  let value = {
    item: item,
    harga: harga,
    date: waktu,
  };

  // push note_value ke data_barang
  data_barang.push(value);

  //  clear atau reset textarea value
  form.reset();

  //jalankan func
  renderToHtml();
});
// render dari note_data_storage ke html
function renderToHtml() {
  //reset root
  root.innerHTML = "";

  //perulangan foreach dari array note_data_storage
  data_barang.forEach((e, i) => {
    // console.info(e);

    root.innerHTML += `
    <div class="card">
    <span class="date" style="margin : 0 auto;"> ${e.date} </span>
    <span class="detailorder">
    <p> ${e.item} </p>
    <p> Rp. ${e.harga}  </p>
    </span>
    <button class="card_delete_btn" onclick="deleteNote(${i})" > x </button
    </div>
    `;
  });
}
//fungsi untuk delete list
function deleteNote(i) {
  // confirm delete
  let confDelete = confirm(" Yakin ingin Menghapus List?");

  if (!confDelete) return;
  data_barang.splice(i, 1);
  renderToHtml();
}

// jika tombol lihat_list di klik
lihat_list.onclick = function () {
  modal.style.display = "none";
  modalbtn.style.display = "block";
  root_title.style.display = "flex";
  modalclosebtn.style.display = "none";
};

// jika tombol + di klik
modalbtn.onclick = function () {
  modal.style.display = "flex";
  modalbtn.style.display = "none";
  root_title.style.display = "none";
  modalclosebtn.style.display = "block";
};

// jika tombol close di klik
modalclosebtn.onclick = function () {
  modal.style.display = "none";
  modalclosebtn.style.display = "none";
  root_title.style.display = "flex";
  modalbtn.style.display = "block";
};

// jika di klik di luar element modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalclosebtn.style.display = "none";
    root_title.style.display = "none";
    modalbtn.style.display = "block";
  }
};
