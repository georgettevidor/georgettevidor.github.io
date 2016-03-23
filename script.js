var svg = {};

var AMARELO = 'amarelo';
var AZUL = 'azul';

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

  carregarImagem();

}

function carregarImagem(){
    html2canvas(document.querySelector('.imagem'), {
      onrendered: function(canvas) {
        var url = canvas.toDataURL('image/png');
        $('a#download').attr('href',url);
        $('a#download').css('display','inline');
      }
    });
}
