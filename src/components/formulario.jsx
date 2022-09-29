import React, {useState} from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import './formulario.css'
import { Button } from 'primereact/button';

const Formulario = () => {
    const [selectRespuesta, setSelectRespuesta] = useState(null);
    const [option, setOption] = useState(null);
    const [value1, setValue1] = useState('');
    const [checked, setChecked] = useState(false);
    const preguntas = 
    [
        { id: 1, titulo: "Describe React features:", rol: 1, tipo:"multiplePregunta", 
            subPreguntas:[{id:'a', titulo: 'JSX:' }, {id:'b', titulo: 'Components:' }, {id:'c', titulo: 'Virtual DOM:' }, {id:'d', titulo: 'One-way data-binding:' }, {id:'e', titulo: 'Performance:' } ]},
        { id: 2, titulo: "Modern Web browsers can read JSX directly:", rol: 2, tipo:"checkbox", respuesta: false},
        { id: 3, titulo: "In a web browser a JSX file needs to be transformed into a regular JavaScript object", rol: 2, tipo:"checkbox"},
        { id: 4, titulo: "DOM stands for Document Only Module", rol: 2, tipo:"checkbox"},
        { id: 5, titulo: "The next component belongs to ES6 standards", rol: 3, tipo:"comboBox"},
        { id: 6, titulo: "The next component belongs to ES6 standards", rol: 3, tipo:"comboBox"},
        { id: 7, titulo: "The next Require declaration belongs to ES6 standards", rol: 4, tipo:"radioButton"},
        { id: 8, titulo: "The next Require declaration belongs to ES6 standards", rol: 4, tipo:"radioButton", respuesta: ""},
        { id: 9, titulo: "Describe steps to create a new React app", rol: 5, tipo:"text", respuesta: ""},
        { id: 10, titulo: "Explain how lists work in React", rol: 5, tipo:"text", respuesta: ""},
        { id: 11, titulo: "Write an example of simple form in React:", rol: 5, tipo:"text"},
        { id: 12, titulo: "Write an arrow function example:", rol: 5, tipo:"text"},
        { id: 13, titulo: "What is a state in React?", rol: 5, tipo:"text"},
        { id: 14, titulo: "What is the use of render() in React?", rol: 5, tipo:"text"},
        { id: 15, titulo: "How do you update the state of a component?", rol: 5, tipo:"text"},
        { id: 16, titulo: "What are props in React?", rol: 5, tipo:"text"},
        { id: 17, titulo: "How do you pass props between components? Write an example.", rol: 5, tipo:"text"},
        { id: 18, titulo: "How can you embed two or more components into one? Write an example.", rol: 5, tipo:"text"},
        { id: 19, titulo: "Explain the lifecycle methods of components", rol: 1, tipo:"multiplePregunta"},
        { id: 20, titulo: "What is Redux?", rol: 5, tipo:"text"},
    ]

    const opciones = [
        { name: 'True', code: 'TR' },
        { name: 'False', code: 'FL' }
    ];
    const onRespuestaChange = (e) => {
        setSelectRespuesta(e.value);
    }

    const onInputChange = (e, propertyId) => {debugger;
        const val = (e.target && e.target.value) || '';
        let _resp = {...preguntas[`${propertyId-1}`]}
        _resp.respuesta = val;
        let nuevoVal = _resp.respuesta
        setValue1(nuevoVal);
        
    }

    
    return (
        <div className="form-demo formulario">
            {
                preguntas.map((preg, index) => {
                    return(
                        <div key={preg.id} className='flex justify-content-center contenedor-preguntas'>
                            <h3>{index+1}.-{preg.titulo}</h3>
                            {
                                preg.rol===1 && (
                                    <div></div>
                                )
                            }
                            {
                                preg.rol===2 && (
                                    <div className='box-check'>
                                        <span className="field-checkbox">
                                            <Checkbox inputId="true" checked={checked} onChange={e => setChecked(e.checked)} />
                                            <label htmlFor="true">True</label>
                                        </span>
                                        <span className="field-checkbox">
                                            <Checkbox inputId="false" checked={checked} onChange={e => setChecked(e.checked)} />
                                            <label htmlFor="false">False</label>
                                        </span>
                                    </div>
                                )
                            }
                            {
                                preg.rol===3 && (
                                    <Dropdown value={selectRespuesta} options={opciones} onChange={onRespuestaChange} optionLabel="name" placeholder="Respuesta" className="combo-box" />
                                )
                            }
                            {
                                preg.rol===4 && (
                                    <div className='box-check'>
                                        <span className="field-radiobutton">
                                            <RadioButton inputId="true" name="true" value="True" onChange={(e) => setOption(e.value)} checked={option === 'True'} />
                                            <label htmlFor="true">True</label>
                                        </span>
                                        <span className="field-radiobutton">
                                            <RadioButton inputId="false" name="false" value="False" onChange={(e) => setOption(e.value)} checked={option === 'False'} />
                                            <label htmlFor="false">False</label>
                                        </span>
                                    </div>
                                )
                            }
                            {
                                preg.rol===5 && (
                                    <div>
                                        <InputText value={value1} onChange={e => onInputChange(e, preg.id)} className="combo-box"/>
                                    </div>
                                )
                            }
                            
                        </div>
                    )
                })
            }
            <Button className='btn-enviar'>Enviar respuesta</Button>
        </div>
    );
}

export default Formulario;