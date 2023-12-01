import React, { useState } from "react";

import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import {languages, frameworks, database, tools} from "../data";

export default function Skills() {

  const [ showLang, setShowLang ] = useState(false);
  const [ showFrame, setShowFrame ] = useState(false);
  const [ showData, setShowData ] = useState(false);
  const [ showTools, setShowTools ] = useState(false);

  const languageName = showLang ? 'Hide Programming Languages':'Show Programming Languages';
  const frameworkName = showFrame ? 'Hide Frameworks & Libraries':'Show Frameworks & Libraries';
  const databaseName = showData ? 'Hide Database & Industry Tools':'Show Database & Industry Tools';
  const toolName = showTools ? 'Hide Tools/Software':'Show Tools/Software';

    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
          </div>

          <div className="container px-5 py-1 mx-auto">
            <div className="text-center items-center justify-center">
              <button className="inline-flex text-slate-50 justify-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-emerald-600 to-emerald-500 hover:text-white rounded text-lg w-3/4" onClick={()=> {
                setShowLang(!showLang)
              }}><h2>{languageName}</h2></button>
              {showLang && displayLanguage}
            </div>
          </div>


          <div className="container px-5 py-1 mx-auto">
            <div className="text-center">  
              <button className="inline-flex text-slate-50 justify-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-emerald-600 to-emerald-500 hover:text-white rounded text-lg w-3/4" onClick={()=> {
                setShowFrame(!showFrame)
              }}><h2>{frameworkName}</h2></button>
              {showFrame && displayFrameworks}
            </div>
          </div>


          <div className="container px-5 py-1 mx-auto">
            <div className="text-center">
              <button className="inline-flex text-slate-50 justify-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-emerald-600 to-emerald-500 hover:text-white rounded text-lg w-3/4" onClick={()=> {
                setShowData(!showData)
              }}><h2>{databaseName}</h2></button>
              {showData && displayDatabase}
            </div>
          </div>

          <div className="container px-5 py-1 mx-auto">
            <div className="text-center">
              <button className="inline-flex text-slate-50 justify-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-emerald-600 to-emerald-500 hover:text-white rounded text-lg w-3/4" onClick={()=> {
                setShowTools(!showTools)
              }}><h2>{toolName}</h2></button>
              {showTools && displayTools}
            </div>
          </div>
          </div>
    </section>
    );
}

//display programming languages
const displayLanguage =         
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {languages.map((languages) => (
      <div key={languages} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="title-font font-medium text-white">
            {languages}
          </span>
        </div>
      </div>
      ))}
  </div>

//display framworks and libraries
const displayFrameworks =
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {frameworks.map((frameworks) => (
      <div key={frameworks} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="title-font font-medium text-white">
            {frameworks}
          </span>
        </div>
      </div>
    ))}
  </div>

  //display database and industry tools
  const displayDatabase = 
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {database.map((database) => (
      <div key={database} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="title-font font-medium text-white">
            {database}
          </span>
        </div>
      </div>
    ))}
  </div>

  //display Tools/Software
  const displayTools = 
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {tools.map((tools) => (
      <div key={tools} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="title-font font-medium text-white">
            {tools}
          </span>
        </div>
      </div>
    ))}
  </div>