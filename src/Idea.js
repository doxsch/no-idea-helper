import React from "react";
import styles from './Idea.module.css'

const Idea = (props) => {
    const properties = {
        API: "Name",
        Link: "Url",
        Description: 'Description',
        Auth: 'Authentication',
        Category: 'Category'
    };
    return (

        <div className={styles.idea}>
            {Object.keys(props.data)
                .filter((key) => Object.keys(properties).includes(key))
                .map(key => {
                    return (
                        <>
                            <div className={styles.group} key={key}>
                                <p>{properties[key]}:</p>
                                {props.data[key].includes('://') ?
                                    <p><a href={props.data[key]} target='_blank' rel='noopener noreferrer'>{props.data[key]}</a></p> :
                                    <p>{props.data[key].length > 0 ? props.data[key] : '-'}</p>
                                }
                            </div>
                        </>
                    )
                })}

        </div>
    );
};
export default Idea;
