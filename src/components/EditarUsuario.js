import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class EditarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = { id : this.props.match.params.id}
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/usuarios/${this.state.id}`)
            .then((resp=>{
                this.setState(resp.data)
            }))
    }

    changeInput(event){
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    aceptar(){
        axios.put(`http://localhost:3001/usuarios/${this.state.id}`, this.state)
            .then( (resp)=> {
                this.setState({redirect:true})
            });
    }

    render() { 
        return ( <div>
            <h1>Editar usuario {this.state.id} works.... </h1>
            <form>
                <div className="form-group">
                    Nombre:
                    <input 
                    type="text"
                    className="form-control"
                    name="nombre"  
                    value={this.state.nombre}                      
                    onChange={this.changeInput.bind(this)}>
                    </input>
                </div>
                <div className="form-group">
                    Edad:
                    <input 
                    type="number" 
                    className="form-control"
                    name="edad" 
                    value={this.state.edad} 
                    onChange={this.changeInput.bind(this)}>
                    </input>
                </div>
                <div className="form-group">
                    Ocupación:
                    <input 
                    type="text"
                    className="form-control"
                    name="ocupacion" 
                    value={this.state.ocupacion}                      
                    onChange={this.changeInput.bind(this)}>
                    </input>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary btn-block" 
                    onClick={this.aceptar.bind(this)}>Aceptar
                </button>
            </form>
            {
                (this.state.redirect)?<Redirect to="/usuarios"/>:""
            }
        </div> );
    }
}
 
export default EditarUsuario;