import React from "react";
const {useState} = React;

const Searchbar = () => {
    const [search, setSearch] = useState('');

    const onChange = (evt) =>{
        setSearch(evt.target.value);
    }

    const onClick = (e) => {
        console.log('Apretando boton')
    }

    return (
    <div>
        <div>
            <input placheholder="Buscar pokemon"
            onChange = {onChange}
            />
        </div>
        <div>
            <button onClick={onclick}>Buscar</button>
        </div>
    </div>
    );
};

export default Searchbar;