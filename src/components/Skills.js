import React, { useState } from "react";
import { Transition } from "@headlessui/react";

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
  const toolName = showTools ? 'Hide Tools & Software':'Show Tools & Software';

  //display programming languages
  const displayLanguage =         
  <Transition 
  show={showLang}
  enter="transition-all duration-700 overflow-hidden ease transform"
    enterFrom="opacity-50 -translate-y-4"
    enterTo="  opacity-100 translate-y-0 "
  leave="transition duration-300 ease transform"
    leaveFrom="opacity-50 translate-y-0"
    leaveTo="opacity-0 -translate-y-4"
  className="flex flex-wrap items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal lg:w-3/4 sm:mx-auto sm:mb-2 mx-2">
    {languages.map((languages) => (
      <div key={languages} className="py-2 px-1 sm:w-1/2 w-3/4">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="font-medium text-white">
            {languages}
          </span>
        </div>
      </div>
      ))}
  </Transition>

  //display framworks and libraries
  const displayFrameworks =
  <Transition 
  show={showFrame}
  enter="transition-all duration-700 overflow-hidden ease transform"
    enterFrom="opacity-50 -translate-y-4"
    enterTo="  opacity-100 translate-y-0 "
  leave="transition duration-300 ease transform"
    leaveFrom="opacity-50 translate-y-0"
    leaveTo="opacity-0 -translate-y-4"
  className="flex flex-wrap items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal lg:w-3/4 sm:mx-auto sm:mb-2 mx-2">
    {frameworks.map((frameworks) => (
      <div key={frameworks} className="py-2 px-1 sm:w-1/2 w-3/4">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="font-medium text-white">
            {frameworks}
          </span>
        </div>
      </div>
    ))}
  </Transition>

  //display database and industry tools
  const displayDatabase = 
  <Transition 
  show={showData}
  enter="transition-all duration-700 overflow-hidden ease transform"
    enterFrom="opacity-50 -translate-y-4"
    enterTo="  opacity-100 translate-y-0 "
  leave="transition duration-300 ease transform"
    leaveFrom="opacity-50 translate-y-0"
    leaveTo="opacity-0 -translate-y-4"
  className="flex flex-wrap items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal lg:w-3/4 sm:mx-auto sm:mb-2 mx-2">
    {database.map((database) => (
      <div key={database} className="py-2 px-1 sm:w-1/2 w-3/4">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="font-medium text-white">
            {database}
          </span>
        </div>
      </div>
    ))}
  </Transition>

  //display Tools/Software
  const displayTools = 
  <Transition
  show={showTools}
  enter="transition-all duration-700 overflow-hidden ease transform"
    enterFrom="opacity-50 -translate-y-4"
    enterTo="  opacity-100 translate-y-0 "
  leave="transition duration-300 ease transform"
    leaveFrom="opacity-50 translate-y-0"
    leaveTo="opacity-0 -translate-y-4"
  className="flex flex-wrap items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal lg:w-3/4 sm:mx-auto sm:mb-2 mx-2">
    {tools.map((tools) => (
      <div key={tools} className="py-2 px-1 sm:w-1/2 w-3/4 ">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="font-medium text-white">
            {tools}
          </span>
        </div>
      </div>
    ))}
  </Transition>

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
              <button className="inline-flex text-gray-50 justify-center bg-green-500 border-0 py-2 px-6 mb-2 focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg w-3/4 transition-colors duration-300 ease-in-out" 
              onClick={()=> {
                setShowLang(!showLang)
              }}>
                <h2>{languageName}</h2>
                </button>
              {displayLanguage}
            </div>
          </div>


          <div className="container px-5 py-1 mx-auto">
            <div className="text-center">  
              <button className="inline-flex text-gray-50 justify-center bg-green-500 border-0 py-2 px-6 mb-2 focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg w-3/4 transition-colors duration-300 ease-in-out" onClick={()=> {
                setShowFrame(!showFrame)
              }}><h2>{frameworkName}</h2></button>
              {displayFrameworks}
            </div>
          </div>


          <div className="container px-5 py-1 mx-auto">
            <div className="text-center">
              <button className="inline-flex text-gray-50 justify-center bg-green-500 border-0 py-2 px-6 mb-2 focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg w-3/4 transition-colors duration-300 ease-in-out" onClick={()=> {
                setShowData(!showData)
              }}><h2>{databaseName}</h2></button>
              {displayDatabase}
            </div>
          </div>

          <div className="container px-5 pt-1 pb-10 mx-auto">
            <div className="text-center">
              <button className="inline-flex text-gray-50 justify-center bg-green-500 border-0 py-2 px-6 mb-2 focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg w-3/4 transition-colors duration-300 ease-in-out" onClick={()=> {
                setShowTools(!showTools)
              }}><h2>{toolName}</h2></button>
              {displayTools}
            </div>
          </div>
        </div>
    </section>
    );
}