import React, {useState} from "react";



function Projects(){
    //sets value if hovering over project
    const [isHovering, setIsHovering] = useState(-1);

    //project array
    const projectInfo = [
        {
            name: 'Game Lounge',
            description:'A relaxed place to chat with friends and play some games',
            link: 'https://the-3-codeteers.herokuapp.com/',
            gitHub: 'https://github.com/afebre1027/the-3-codeteers',
            tech:'MySQL, Handlebars, Express.js'
        },
        {
            name: 'Parks And Brews',
            description:'An app for finding a place to relax after a hard day hiking',
            link: 'https://amuldrow.github.io/group-project/',
            gitHub: 'https://github.com/amuldrow/group-project',
            tech: 'APIs, Javascript, Foundation'
        },
        {
            name: 'Budget Tracker',
            description:'A PWA for tracking your finances no matter where you are',
            link: 'https://arcane-forest-95788.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Budget-Tracker-PWA',
            tech: 'PWA, Service Worker, Heroku'
        },
        {
            name: 'Note Taker',
            description:'An app for any ideas you want to jot down',
            link: 'https://boiling-everglades-66556.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Note-Taker',
            tech: 'Express.js, Node.js'
        },
        {
            name: 'Work Day Scheduler',
            description: 'An app for keeping track of your hectic work day',
            link: 'https://mark-miller78.github.io/Work-Day-Scheduler/',
            gitHub: 'https://github.com/Mark-Miller78/Work-Day-Scheduler',
            tech: 'JQuery, Moment.js, Bootstrap'
        },
        {
            name: 'Social Network API',
            description: 'Backend setup for a social media app',
            link: 'https://github.com/Mark-Miller78/Social-Network-API',
            gitHub: 'https://github.com/Mark-Miller78/Social-Network-API',
            tech: 'MongoDB, Mongooose, Express.js'
        }
    ];

    return (
        <div className="project-container">
            <h2 className="section-title">Projects</h2>
            <section className="project-list container">
                <div className="row justify-content-center">
                    {/* maps over project array to create card for each, also passing in index in array */}
                    {projectInfo.map((project, index) => {
                        return (<div className="col-lg-4 col-md-6 col-sm-6 col-9" key={index}>
                            <div 
                                //changes class of card that is hovered over
                                className={`card ${isHovering === index ? "cardHover" : ""}`}
                                //on hover, changes isHovering to index value
                                onMouseEnter={() => setIsHovering(index)} 
                                onMouseLeave={() => setIsHovering(-1)}
                            >
                                <img  
                                    className={`projectImg ${isHovering === index ? "hover" : ""}`} 
                                    src={require(`../../assets/images/Projects/${project.name}.png`)} 
                                    alt="project screenshot"
                                />
                            <div className="card-body">    
                                <h2 className="card-title">{project.name}</h2>
                                <p className="description">{project.description}</p>
                                <p className="description col-12">{project.tech}</p>
                                <div className="card-body">
                                    <a  href={project.link} target="_blank" rel="noreferrer noopener">
                                        View app
                                    </a>
                                    <a  href={project.gitHub} target="_blank" rel="noreferrer noopener">
                                        View repo
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>)
                    })}

                </div>
            </section>
        </div>
    );
}

export default Projects;