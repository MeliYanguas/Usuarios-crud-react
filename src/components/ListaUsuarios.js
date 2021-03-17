import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

class ListaUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = { usuarios : [] }
    }

    getLista(){
        axios.get("http://localhost:3001/usuarios").then( (resp) => {
            this.setState({ usuarios : resp.data })
        })
    }

    componentDidMount(){
        this.getLista();
        
    }

    eliminar(id){
        axios.delete(`http://localhost:3001/usuarios/${id}`)
            .then( (resp)=> {
                this.getLista();
            })
    }

    render(){
        return (<div>

            <Link to={"/usuario/agregar/"} className="btn btn-outline-success mb-3">Agregar usuario</Link>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ocupación</th>
                        <th>Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.usuarios.map( (item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.ocupacion}</td>
                                <td>{item.edad}</td>  
                                <td className="text-right">
                                    <Link to={"/usuario/editar/" + item.id} className="btn btn-primary ml-2">
                                        Editar
                                    </Link>
                                    <button className="btn btn-danger ml-2" onClick={this.eliminar.bind(this, item.id)}>Eliminar</button>

                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>);
    }

}
export default ListaUsuarios;