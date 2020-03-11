import React from 'react'

const AboutBody = () => {
    return (
        <div className="container blog">
            <h1>The basics</h1>
            <div className="row about">
                <div className="six columns">
                    <p>
                        I was a Web Project/Account Manager at{' '}
                        <a href="http://springload.co.nz">Springload</a> for
                        over five years until 2012, and have built WordPress
                        sites for small businesses ever since. In 2017 I made a
                        personal commitment to update and refine my skills, and
                        subsequently became an Enspiral Dev Academy graduate.
                    </p>
                    <p>
                        I smile at passing strangers on a quiet street, and
                        strongly believe in thank you waves when behind the
                        wheel. I enjoy reading, gaming, guitaring, redditing and
                        coding. I'm also pretty big into Formula 1, so I have
                        that going for me which is nice.
                    </p>
                    <div className="row">
                        <div className="six columns contact">
                            <h3>Mail</h3>
                            <p>
                                <a href="mailto:andy@andycondon.com">
                                    andy@
                                    <wbr />
                                    andycondon.com
                                </a>
                            </p>
                            <h3>Twitter</h3>
                            <p>
                                <a href="https://twitter.com/too_much_andrew">
                                    @Too_Much_Andrew
                                </a>
                            </p>
                        </div>
                        <div className="six columns contact">
                            <h3>Github</h3>
                            <p>
                                <a href="https://github.com/andrew-rayco">
                                    andrew-rayco
                                </a>
                            </p>
                            <h3>Available for</h3>
                            <p>Hire and Freelance</p>
                        </div>
                    </div>
                </div>
                <div className="six columns">
                    <p className="large">
                        HTML5, CSS3, JavaScript, React, Redux, Node.js, Git,
                        Express, Knex, SQL, APIs, Webpack, Sass, Flexbox,
                        WordPress, Copywriting, Client-friendly{' '}
                        <span>
                            and other stuff too. I won't be pidgeon-holed.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutBody
