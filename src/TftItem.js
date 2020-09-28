import React from "react";
import data from "./data/tft.json";
import "./App.css";

class TftItem extends React.Component {
    
    render() {
        const item = this.props.item;

        return (
            <div className="tftitem" onClick={() => window.open(item.boardUrl, "_blank")}>
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
                <div className="tftcontent">
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
                    <span className="tftcontentseperator tftcontentseperator--vertical"></span>
                    <div className="tftrightcontent">
                        <h3 className="tftrightheading">Requirements: </h3>
                        <div className="tftrequirements">
                            <ul className="tftrequirements--ul">
                                {item.requiremets.map(req => {
                                    return(
                                        <li key={req}>
                                            {req}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="tftcontentseperator tftcontentseperator--horizontal"></div>
                        <div className="tftplaystyle">
                            <h3 className="tftrightheading">Playstyle:</h3>
                            <ul className="tftplaystyle--ul">
                                {item.playstyle.map(pl => {
                                    return (
                                        <li key={pl}>
                                            {pl}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
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
