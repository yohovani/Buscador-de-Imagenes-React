import React, { Component } from 'react';
//Importar Componente
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component{
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smoot', 'start');
  }

  paginaAnterior = () => {
    //Leer el state de la págian actual
    let pagina = this.state.pagina;
    //Validar Numero de pagina
    if(pagina === 1) return null;
    //Restar uno a la página actual
    pagina-=1;
    //Agregar el cambio al state 
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    //Leer el state de la págian actual
    let pagina = this.state.pagina;
    //Sumar uno a la página actual
    pagina+=1;
    //Agregar el cambio al state 
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=14854725-716f33397db9921f0a89c5aee&q=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    });
  }

  render(){
    return (
      <div className="app container">
          <div className="jumbotron">
              <p className="lead text-center">Buscador de Imágenes</p>
              <Buscador 
                datosBusqueda={this.datosBusqueda}
              />
          </div>
          <div className="row justify-content-center">
            <Resultado 
                imagenes = {this.state.imagenes}
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
            />
          </div>
      </div>
    );
  }
}

export default App;
