import Header from '../components/header';
import Typewriter from '../components/typewriter';
import ToggleChar from '../components/toggleChar';
import { Fragment } from 'react';


const Home = () => {
    const words = ['a Technical Manager', 'Software Engineer', 'Game Designer', 'Storyteller', 'Your Next Developer']
    const wordDelay = 1000; // Delay before starting to delete
    const letterDelay = 100;
    
    return (
        <Fragment>
        <div class="h-auto bg-gradient-to-r from-primary to-secondary">
            <Header></Header>
            <div class="flex">
                <div class = "flex justify-center mx-12 my-12">
                    <div class="mx-8">

                    </div>
                    <h1 class="text-9xl">
                        Hello I am <Typewriter words={words} wordDelay={wordDelay} delay={letterDelay}/>
                        <ToggleChar char='_' delay={750}/>
                    </h1>
                </div>
            </div>
        </div>
        <div class = "flex justify-center items-center h-100 bg-neutral">
            <h1 class="text-4xl">
                I am passionate about...
            </h1>
        </div >

        </Fragment>
        
    )
};



export default Home