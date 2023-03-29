import React from "react";
import Link from "next/link";
import "./bootstrap.min.css";

/* [Corpus; Elements Of Page] */
import { Tittle } from "./frags/Tittle";
import { Cards } from "./frags/Cards";
import { Manual, VideoInput, VideoInput2 } from "./frags/Manual";
import { Guide } from "./frags/Guide";
import { VideoReview, CardVideoReview } from "./frags/VideoReview";

export default function M0sPage() {
    return (
        <React.Fragment>
            <Tittle DownloadLink="https://drive.google.com/drive/folders/1pC_CYIVL_HMuRiVJpbn_fAiQai3dm4-c?usp=share_link"
            />
            <Cards/>
            <Manual VideInput=<VideoInput/> VideoInput2=<VideoInput2/> />
            <Guide/>
            {<CardVideoReview VideoInsert=<VideoReview/> />}
        </React.Fragment>
    );
};