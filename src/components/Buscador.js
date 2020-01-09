import React, {Component} from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        //Leer Ref -> Sintaxys Nombre del ref.current.value
        const termino = this.busquedaRef.current.value;
        //Envio del calor del input al componente principal
        this.props.datosBusqueda(termino);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu Imágen. Ejemplo: Futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;