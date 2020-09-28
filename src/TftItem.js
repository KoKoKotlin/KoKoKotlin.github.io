import React from "react";
import data from "./data/tft.json";
import "./App.css";

import ReactHtmlParser from "react-html-parser";

class TftItemHeader extends React.Component {
    render() {
        const item = this.props.item;
        return(
            <div className="tftheader">
                <span className="tftitemname"><strong>{item.name}</strong></span>
                <div className="tftcompcontainer">{item.comps.map(comp => <div key={comp} className="tftitemcomp">{comp}</div>)}</div>
                <div>
                    {item.carries.map(carry => {
                        return (
                            <img className="tftcarrypic" alt="" src={this.props.refs[carry]} />
                        );
                    })}   
                </div>
            </div>
        );
    }
}

class TftContentItems extends React.Component {
    render() {
        const item = this.props.item;
        return(
            <div className="tftleftcontent">
                {item.items.map((itemContent, index) => {
                    return (<div key={itemContent + index} className="tftitemcontainer">
                        <img alt="" className="tftitemchamp" src={this.props.refs[itemContent.champ]} />
                        {itemContent.items.map((itemRef, index) => {
                            return(
                                <img key={itemRef + index} alt="" className="tftitemitem" src={this.props.refs[itemRef]}/>
                            );
                        })}
                    </div>);
                })}
            </div>
        );
    }
}

class TftContentList extends React.Component {
    render() {
        return(
            <div>
                <h3 className="tftrightheading">{this.props.heading}:</h3>
                <ul className="tftrightcontent--ul">
                    {this.props.lines.map(line => {
                        return(
                            <li key={line}>
                                {ReactHtmlParser(line)}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class TftItem extends React.Component {
    
    render() {
        const item = this.props.item;

        return (
            <div className="tftitem" onClick={() => window.open(item.boardUrl, "_blank")}>
                <TftItemHeader item={item} refs={this.props.refs} />
                <div className="tftcontent">
                    <TftContentItems item={item} refs={this.props.refs} />
                    <span className="tftcontentseperator tftcontentseperator--vertical"></span>
                    <div className="tftrightcontent">
                        <TftContentList lines={item.requirements} heading={"Requirements"} />
                        <div className="tftcontentseperator tftcontentseperator--horizontal"></div>
                        <TftContentList lines={item.playstyle} heading={"Playstyle"} />
                    </div>
                </div>
            </div>
        );
    }
}

class TftItemContainer extends React.Component {
    render() {
        const entries = data.data.map((item, index) => {
            return (
                <TftItem key={index} item={item} refs={data.refs} />
            );
        });

        return (
            <div> 
                {entries}
            </div>
        );
    }
}

export default TftItemContainer;
