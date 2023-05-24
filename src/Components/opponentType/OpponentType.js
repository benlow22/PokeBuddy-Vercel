import React, { useEffect, useState } from 'react';
import { TypeList } from '../typeList/TypeList';
import { TypeIndicator } from '../typeIndicators/TypeIndicators';
import { pokemonTypes, keys } from '../../database';
import { StatBox } from '../statBox/StatBox';


// using useState and function class 

export function Homepage () {
    const [ type1, setType1 ] = useState('Type 1');
    const [ type2, setType2 ] = useState('Type 2');

    const handleAdd = (type) => {
        if (type1 === 'Type 1') {
            setType1(type);
        } else {
            if (type !== type1) {
                setType2(type)
            }
        }
    }
    
    const clearButtons = () => {
        setType1('Type 1');
        setType2('Type 2');
    }

    useEffect (()=>{
        document.addEventListener('keyup', (event) => {
            if(event.code === 'Space' || event.code === 'KeyV') {
                clearButtons();
    }})
    },);          // use [] because you only want to add the listener once at the beginning 



    const handleAllKeysArray = (event) =>  {
        if (keys.includes(event.code)) {            // checks if code is in array
            let index = keys.findIndex( (key) => key === event.code);   // returns index in keys array
            console.log(index);
            handleAdd(pokemonTypes[index-1])        // uses index to add type to state
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', handleAllKeysArray);
        return ()=>{document.removeEventListener('keydown', handleAllKeysArray)}
    },);


    return (
        <div>
            <div className='opponent-Stats'>
                <StatBox status='Resistant' type1={type1} type2={type2}/>
                <div className='two-types'>
                    <TypeIndicator type={type1}/>
                    <TypeIndicator type1={type1} type={type2}/>  
                </div>
                <StatBox status='Weak' type1={type1} type2={type2}/>
            </div>
            <div className='list-Of-Buttons'>
                <TypeList onAdd={handleAdd}/>
            </div>
        </div>
    )
}

/* export class OpponentType extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type1: 'Type 1',
            type2: 'Type 2',
            count: 1
        }
        //this.addOneState = this.addOneState.bind(this);
        this.addType = this.addType.bind(this);
        this.handleSpace = this.handleSpace.bind(this);
    }

    addType(newType) {
        
        if (!this.state.type1 || this.state.count % 2 === 1) {
            this.setState({
                type1: newType,
                count: this.state.count+1
            })

            //this.state.type1 ? this.setState({type1: newType}): this.setState({type2: newType})
        } else { 
            this.setState({
                type2:newType,
                count: this.state.count+1
            })
        }
        console.log(this.state.count)
    }

    handleSpace(e) {
        if (e.keycode === 32) {
            this.setState(initialState);

        }
    }



    * /////////
    addOneState(newType) {
        console.log('weMade it to the OpponentType:', newType);
        this.setState({
            type1:newType
        })
    } /////////*

    render() {
        let type1= this.state.type1;
        let type2= this.state.type2;    
            return (
            <div className='type-buttons'>
                <TypeIndicator type={type1}/>
                <TypeIndicator type={type2}/>
                <br></br>
                <TypeList onAdd={this.addType}/>
            </div>
        )
    }
} */