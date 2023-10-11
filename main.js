$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

$('#botao-cancelar').click(function() {
    $('form').slideUp();
})

    $('form').submit(function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${endereçoDaNovaImagem}'/>`).appendTo(novoItem);
        $(`
            <div class='overlay'>
                <a href='${endereçoDaNovaImagem}' target='_blank' title='Ver imagem em tamanho real'>
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val(' ');

    })
})