import React from 'react';


export default function Resume() {
    return (
        <section id="resume" className="relative">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                
                <iframe 
                    id='pdf'
                    src='./mark-oka-resume.pdf'
                />
            </div>
        </section>
    );
}