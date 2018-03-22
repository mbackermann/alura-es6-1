class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValue = $("#valor");
  }

  adiciona(event){
    event.preventDefault();

    let data = new Date(
      ...this._inputData.value
            .split('-')
            .map((item, event) => item - item%2 )
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValue.value
    );

    console.log(negociacao);

  }

}
