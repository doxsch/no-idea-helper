import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import Idea from "./Idea";
import {ReactComponent as TwitterIcon} from './tw_logo.svg';
import {ReactComponent as GithubIcon} from './gh_logo.svg';
import AnimateHeight from "react-animate-height";


function App() {
    const [getIdea, setIdea] = useState({});
    const [loadCounter, setLoadCounter] = useState(0);
    const [height, setHeigt] = useState(0);
    const loadOther = () => {
        setLoadCounter(loadCounter + 1);
    };
    const [isTextNew, setTextNew] = useState(false);

    const animationDuration = 500;

    useEffect(() => {
        if (loadCounter > 0) {
            setTextNew(true);
            fetch('https://api.publicapis.org/random')
                .then((res) => res.json())
                .then(ideas => setIdea(ideas.entries[0]))
                .then(() => setHeigt('auto'));
        }
    }, [loadCounter]);

    useEffect(() => {
        setTimeout(() => {
            setTextNew(false);
        }, animationDuration)
    }, [getIdea]);


    return (
        <div className="App">
            <header>
                <h1>No idea what you want to program today?</h1>
                <p>click on <span>the button</span> to get a public api for
                    your next project.</p>
            </header>
            <main>
                <AnimateHeight className={isTextNew ? 'blur' : ''} height={height} duration={animationDuration} animateOpacity={true}>
                    <Idea data={getIdea}/>
                </AnimateHeight>

                <div>
                    <Button onClick={loadOther} text={loadCounter === 0 ? 'get an api':'get next'}></Button>
                </div>

            </main>
            <footer>
                <div>
                    <span>created with ♥ from <a href='https://doxsch.github.io/' target='_blank' rel='noopener noreferrer'>doxsch</a></span>
                </div>
                <div>
                    <a href='https://twitter.com/doxsch' target='_blank' rel='noopener noreferrer'><TwitterIcon className='icon'/></a>&nbsp;
                    <a href='https://github.com/doxsch' target='_blank' rel='noopener noreferrer'><GithubIcon className='icon'/></a>
                </div>
            </footer>
        </div>
    );
}

export default App;
