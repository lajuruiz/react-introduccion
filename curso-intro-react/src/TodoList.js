/* eslint-disable no-unused-vars */
import React from "react";

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}