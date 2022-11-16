import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import Propss from './Propss';


const ExtraFuncc = () => {
    const [state, setstate] = useState(1);
    const [state2, setstate2] = useState('StateTwo');
    const [Props] = useState({
        name : 'Props',
        Age : 25,
        Functionss : function(){
            console.log('Prop_Function');
        }
    });
    // useEffect(() => {
    //     console.log('UseEffect.........')
    // }, [state2]);
    const update = () =>{
        if(state < 30){
            setstate(state+1);
        }else{
            console.warn('Sooooooorrrryyyy!!')
        }
    }
    function down(){
        if (state > 0){
            setstate(state - 1)
        } else {
            console.warn('Sooooooorrrryyyy!!')
        }
        setstate2('Akash Meena');
    }
    
    return (
        <>
            <h1>Jai Mata Di</h1>
            {state2}
            {state}<br/>
            <button onClick={update}>Update</button>
            <button onClick={down}>Down</button>
            <Propss name={Props}/>
        </>
    )
}

const Funccc = () =>{
    return (
        <React.Fragment>
            <h1>HelloWrold!!</h1>
            <ClassComponent />
        </React.Fragment>
    )
}



export {Funccc , ExtraFuncc};