import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { languages, frameworks, database, tools } from "../data";

export default function Skills() {
    const [showLang, setShowLang] = useState(false);
    const [showFrame, setShowFrame] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showTools, setShowTools] = useState(false);

    const languageName = showLang
        ? "Hide Programming Languages"
        : "Show Programming Languages";
    const frameworkName = showFrame
        ? "Hide Frameworks & Libraries"
        : "Show Frameworks & Libraries";
    const databaseName = showData
        ? "Hide Database & Industry Tools"
        : "Show Database & Industry Tools";
    const toolName = showTools
        ? "Hide Tools & Software"
        : "Show Tools & Software";

    return <section id="skills"></section>;
}
