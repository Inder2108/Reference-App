import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import _ from "underscore";
import "./BlogDetail.scss";

let blogDetail = props => {
    let { title, content } = props.blogObj;

    let contentJsx = _.map(content, contentObj => {
        if (contentObj.type === "paragraph") {
            return <p class="card-text mb-auto">{contentObj.value}</p>;
        } else {
            return (
                <pre>
                    <code>{contentObj.value}</code>
                </pre>
            );
        }
    });

    return (
        <div class="card mb-4 box-shadow h-md-250">
            <div class="card-header">
                <span>{title}</span>
                <span class="float-right">
                    <Link to={process.env.PUBLIC_URL + "/"}><FontAwesomeIcon icon={faTimes} className="text-danger" /></Link>
                </span>
            </div>
            <div class="card-body">{contentJsx}</div>
        </div>
    );
};

export default blogDetail;
