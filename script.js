var svg = {};

function previewFile() {
  var preview = document.querySelector('.foto');
  console.log(preview);
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function() {
    preview.src = reader.result;
    if (preview.src) {
      adicionarMascara();
    }
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function adicionarMascara() {
  var imgWidth = $('img').width();
  $('.top, .bottom').css('width', imgWidth + 'px');
}
