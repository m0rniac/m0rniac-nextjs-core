/* [Corpus; React imports] */
import React from "react";
import Link from "next/link";

/* [Corpus; Fragments of page] */
import { Introduction } from "./fragments/Introduction";

/* [Corpus; Principal function] */
export function ProjectsSection() {
    return (
        <div className="container-fluid">
            <Introduction DownloadLink="https://drive.google.com/drive/folders/1pC_CYIVL_HMuRiVJpbn_fAiQai3dm4-c?usp=share_link"/>
        </div>
    );
};