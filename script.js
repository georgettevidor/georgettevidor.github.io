var svg = {};

var AMARELO = 'amarelo';
var AZUL = 'azul';

console.log();

function previewFile() {
  var preview = document.querySelector('.foto');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function() {
    preview.src = reader.result;
    if (preview.src) {
      colarMascara(AZUL);
    }
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function colarMascara(cor) {
  var caminho = 'imagens/' + cor + '/';

  $('.mascara.top img').attr('src', caminho + 'cima.png');
  $('.mascara.bottom img').attr('src', caminho + 'baixo.png');

}


function download(){
  html2canvas(document.querySelector('.camarada'), {
    onrendered: function(canvas) {
      document.body.appendChild(canvas);
    }
  });
}
