import React, { useState } from "react";
import { SORT } from "../config/messageList";
import TextBox from "./textBox";
import "../style/sort.css";

const Sort = ({ filter, setFilter }) => {
    const { sort, pagination } = filter;
    const [showDropdown, toogleDropdown] = useState(false);
    const handleRowClick = (row) => {
        const element = document.getElementById("message-list");
        element.scrollTop = 0;
        if (row.key !== sort.key) {
            setFilter({
                sort: row,
                pagination: {
                    ...pagination,
                    pageNo: 1,
                },
            });
        }
        toogleDropdown(!showDropdown);
    };

    return (
        <div className="sort-contianer">
            <div className="sort-inner">
                <div
                    className="selectedSort"
                    onClick={() => {
                        toogleDropdown(!showDropdown);
                    }}
                >
                    <TextBox id={sort.id} />{" "}
                    <div className="icon-down">&#8964;</div>
                </div>
                <div className={"dropdown" + (showDropdown ? " open" : "")}>
                    {SORT.map((row) => {
                        return (
                            <div
                                key={row.key}
                                className="dropdown-row"
                                onClick={() => handleRowClick(row)}
                            >
                                <TextBox id={row.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Sort;
