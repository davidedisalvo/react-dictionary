import React, { Component } from 'react';
import WordContext from './WordsContext';
import style from './SingleWord.module.scss'
import { FaCaretDown, FaCaretUp, FaRegTrashAlt } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert'





class SingleWord extends Component {

    state = {
        readMoreToggle: false
    }
    onDelete =  () => {
        this.props.delete(this.props.index)
    }

    handleReadMore = () => {
        this.setState(prevState => ({
        readMoreToggle: !prevState.readMoreToggle
        }));
    }
    render() {
        let arrow = undefined
        if(this.state.readMoreToggle) {
            arrow = <FaCaretUp className = {style.arrow} onClick ={this.handleReadMore} />

        } else {
            arrow = <FaCaretDown className = {style.arrow} onClick ={this.handleReadMore} />
        }
        return (
            <Alert variant='info' className={style.SingleWord}>
                <div className={style.header}>
                    <h2>{this.props.title}</h2>
                    <div className={style.buttonGroup}>
                        {arrow}
                        <FaRegTrashAlt className={style.delete} onClick={this.onDelete} />
                    </div>
                </div>
                <div className={style.wrapper} >
                    <div className={this.state.readMoreToggle ?  style.fullHeight : style.normalHeight } >
                        {this.props.definition.map(el => 
                            <div className={style.singleDefinition}>
                                <h4>{el.fl}</h4>
                                <p>{el.shortdef.join(', ')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Alert>
        );
    }
}
 
export default SingleWord;