export const pokemonTypes = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];


export const keys = [
    'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
    'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 
    'KeyZ', 'KeyX', 'KeyC' ];

export const typeEffectiveness = {
    Bug:      [1,     1,      1,      1,      1,      0.625,  1.6,    1.6,    1,      0.625,  0.625,  1,      1,      1,      1,      1.6,    1,      1],
    Dark:     [1.6,	0.625,	1,	1,	1.6,	1.6,	1,	1,	0.625,	1,	1,	1,	1,	1,	0.391,	1,	1,	1],
    Dragon:   [1,     1,      1.6,    0.625,  1.6,    1,      0.625,  1,      1,      0.625,  1,      1.6,    1,      1,      1,      1,      1,      0.625], 
    Electric:   [1,     1,      1,      0.625,  1,      1,      1,      0.625,  1,      1,      1.6,    1,      1,      1,      1,      1,      0.625,  1],
    Fairy:      [0.625, 0.625,  0.391,  1,      1,      0.625,  1,      1,      1,      1,      1,      1,      1,      1.6,    1,      1,      1.6,    1], 
    Fighting:   [0.625, 0.625,  1,      1,	1.6,	1,	1,	1.6,	1,	1,	1,	1,	1,	1,	1.6,	0.625,	1,	1],
    Fire:       [0.625,	1,	1,	1,	0.625,	1,	0.625,	1,	1,	0.625,	1.6,	0.625,	1,	1,	1,	1.6,	0.625,	1.6],
    Flying:     [0.625,	1,	1,	1.6,	1,	0.625,	1,	1,	1,	0.625,	0.391,	1.6,	1,	1,	1,	1.6,	1,	1],
    Ghost:      [0.625,	1.6,	1,	1,	1,	0.391,	1,	1,	1.6,	1,	1,	1,	0.391,	0.625,	1,	1,	1,	1],
    Grass:      [1.6,	1,	1,	0.625,	1,	1,	1.6,	1.6,	1,	0.625,	0.625,	1.6,	1,	1.6,	1,	1,	1,	0.625],
    Ground:     [1,	1,	1,	0.391,	1,	1,	1,	1,	1,	1.6,	1,	1.6,	1,	0.625,	1,	0.625,	1,	1.6],
    Ice:        [1,	1,	1,	1,	1,	1.6,	1.6,	1,	1,	1,	1,	0.625,	1,	1,	1,	1.6,	1.6,	1],
    Normal:     [1,	1,	1,	1,	1,	1.6,	1,	1,	0.391,	1,	1,	1,	1,	1,	1,	1,	1,	1],
    Poison:     [0.625,	1,	1,	1,	0.625,	0.625,	1,	1,	1,	0.625,	1.6,	1,	1,	0.625,	1.6,	1,	1,	1],
    Psychic:    [1.6,	1.6,	1,	1,	1,	0.625,	1,	1,	1.6,	1,	1,	1,	1,	1,	0.625,	1,	1,	1],
    Rock:       [1,	1,	1,	1,	1,	1.6,	0.625,	0.625,	1,	1.6,	1.6,	1,	0.625,	0.625,	1,	1,	1.6,	1.6],
    Steel:      [0.625,	1,	0.625,	1,	0.625,	1.6,	1.6,	0.625,	1,	0.625,	1,	0.625,	0.625,	0.391,	0.625,	0.625,	0.625,	1],
    Water:      [1,	1,	1,	1.6,	1,	1,	0.625,	1,	1,	1.6,	1,	0.625,	1,	1,	1,	1,	0.625,	0.625]
    }
/*
typeEffectiveness.Bug.map((effectiveness, index) => {
    if (effectiveness === 1) {
        pokemonTypes[index]
    }

})*/

/*
[   
    [0.391x],
    [0.625x],
    [1x],
    [1.60x],
    [2.56x]
]
*/

export const checkTypes = (state1, state2) => {
    let effectObj = { veryResistant: [],
        resistant:[],
        normal :[],
        weakTo:[],
        veryWeakTo:[]
    } 

    let arrayToSort = typeEffectiveness[state1];
    console.log(typeEffectiveness[state1]);

    const sortThroughArray = (array) => {
        array.forEach((effectiveness, index) => {
            if (effectiveness === 0.391 || effectiveness === (0.625*0.625)) {
                effectObj.resistant.push(pokemonTypes[index])
            } if (effectiveness === 0.625) {
                effectObj.veryResistant.push(pokemonTypes[index])
            } if (effectiveness === 1) {
                effectObj.normal.push(pokemonTypes[index])
            } if (effectiveness === (1.6*1.6)) {
                effectObj.weakTo.push(pokemonTypes[index])
            } if (effectiveness === 1.60) {
                effectObj.veryWeakTo.push(pokemonTypes[index])
            }
        })
    }

    if (state2 === 'Type 2') {          // only one state
        sortThroughArray(arrayToSort)
    }

    if (state1 !== 'Type 1' && state2 !== 'Type 2') {
        let mergedArr = typeEffectiveness[state1].map((type1,index)=>
            (type1*typeEffectiveness[state2][index])
        );
        sortThroughArray(mergedArr);

    };
    

    return effectObj;
}