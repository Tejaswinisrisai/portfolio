import React, { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed';

export const Typewriter = ({ text, delay, onTextFullyDisplayed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            if (typeof onTextFullyDisplayed === 'function') {
                onTextFullyDisplayed();
            }
        }
    }, [currentIndex, delay, text, onTextFullyDisplayed]);

    return <span>{currentText}</span>;
};


const IntroSection = () => {
    const [h2Displayed, setH2Displayed] = useState(false);
    const handleTextFullyDisplayed = () => {
        setH2Displayed(true);
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '60%', textAlign: 'left', height: '85vh', marginTop: '30px', }}>
                    <h1 style={{ fontSize: 100, fontWeight: '400', width: '40%', marginBottom: '0' }}>
                        Hello..!
                    </h1>
                    <h2 style={{ fontSize: 80, fontWeight: '400', width: '100%', marginTop: '0', marginBottom: '0' }}> This is
                        <span style={{ marginLeft: '13px', color: '#7bff00' }}>
                            <Typewriter text="Ariyana Grande" delay={200} onTextFullyDisplayed={handleTextFullyDisplayed} />
                        </span>
                    </h2>
                    {h2Displayed && (
                        <h3 style={{ fontSize: 70, fontWeight: '400', width: '100%', marginTop: '0' }}> I'm a {" "}

                            <ReactTyped
                                style={{ fontFamily: 'monospace', color: 'green' }}
                                strings={[
                                    "<span style='color: #00fffd'>Full Stack</span>",
                                    "<span style='color: #8f00ff'>Front-end</span>",
                                    "<span style='color: #ff00e8'>Back-end</span>",
                                    "<span style='color: #5dff00'>MEAN Stack</span>",
                                    "<span style='color: #0097ff'>MERN Stack</span>",
                                    "<span style='color: #ebffa3'>React Js</span>",
                                    "<span style='color: #00ffd8'>Angular</span>",
                                    "<span style='color: #ffe500'>Node Js</span>",
                                    "<span style='color: #00fffd'>Express</span>",
                                    "<span style='color: #ffa100'>MySQL</span>",
                                    "<span style='color: #ff00f7'>PostgresSQL</span>",
                                    "<span style='color: #4300ff'>MongoDB</span>",
                                    "<span style='color: #d200ff'>GraphQL</span>"
                                ]
                                }
                                typeSpeed={200}
                                loop
                                backSpeed={20}
                                showCursor={true}
                            />{" Developer"}

                        </h3>
                    )}

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', height: '85vh', alignItems: 'center' }}>
                    <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' style={{ height: '180px', width: '180px', objectFit: 'cover', zoom: '2', borderRadius: '100px', marginTop: '40px' }} />


                    {/* <button style={{ width: '40%', backgroundColor: 'black', border: '1px solid #7bff00', fontSize: '18px', color: '#7bff00', paddingTop: '20px', paddingBottom: '20px', marginTop: '20px' }}>
                        Connect</button> */}
                    <button class="btn" style={{ marginTop: '20px' }}>
                        CONNECT WITH ME
                    </button>
                </div>
            </div >
        </>
    )
}

export default IntroSection

