import Header from '../components/header';
import Typewriter from '../components/typewriter';

const Home = () => {
    const words = ['a Technical Manager', 'Software Engineer', 'Game Designer', 'Storyteller', 'Your Next Developer']
    const wordDelay = 1000; // Delay before starting to delete
    const letterDelay = 100;
    
    return (
        <div class="h-screen bg-gradient-to-r from-primary to-secondary">
            <Header></Header>
            <div class="bg-gradient-to-r from-primary to-secondary flex-center flex">
                <div class = "text-white mx-12 my-12">
                    <h1 class="text-9xl">
                        Hello I am <Typewriter words={words} delay={letterDelay} wdelay={wordDelay}/>
                    </h1>
                </div>
            </div>
        </div>
        
    )
};



export default Home