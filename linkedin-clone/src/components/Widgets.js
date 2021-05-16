import React from 'react';
import "../css/Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("News of 2021","Top News-9099 Readers")}
            {newsArticle("CoronaVirus: India Updates","Top News-886 Readers")}
            {newsArticle("Tesla Hits New Highs","Cars and Auto-300 Readers")}
            {newsArticle("Bitcoin Breaks $22k","Crypto-8000 Readers")}
            {newsArticle("Is Redux too good?","Code-123 Readers")}
            {newsArticle("PAPA react launches course?","Top News-6503 Readers")}
        </div>
    )
}

export default Widgets;