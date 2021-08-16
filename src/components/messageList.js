import React, { useState, useEffect } from "react";
import { SORT } from "../config/messageList";
import { getMessageList } from "../apis/messageList.js";
import Sort from "./sort";
import MessageRow from "./messageRow";

const PAGE_SIZE = 5;

const MessageList = () => {
    const [filter, setFilter] = useState({
        pagination: { pageNo: 1, pageSize: PAGE_SIZE },
        sort: SORT[0],
        toggle: false,
    });
    const [messageListInfo, setMessageListInfo] = useState({
        list: [],
        total: 0,
    });
    const { list, total } = messageListInfo;
    const [removeDuplicates, toggleRemoveDuplicates] = useState(true);
    const handleOnScroll = (evn) => {
        const { target } = evn;
        if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
            setFilter({
                ...filter,
                pagination: {
                    ...filter.pagination,
                    pageNo: filter.pagination.pageNo + 1,
                },
            });
        }
    };

    useEffect(() => {
        setMessageListInfo(getMessageList(filter, removeDuplicates) || {});
        removeDuplicates && toggleRemoveDuplicates(false);
    }, [filter]);

    return (
        <>
            <Sort filter={filter} setFilter={setFilter} />
            <div
                className="message-list"
                id="message-list"
                onScroll={(evn) => handleOnScroll(evn)}
            >
                {list.map((message, index) => {
                    return (
                        <MessageRow
                            key={index}
                            message={message}
                            index={index}
                            setFilter={setFilter}
                            filter={filter}
                        />
                    );
                })}
            </div>
            <div className="scroll-icon-container">
                <span
                    className={
                        "scroll-icon" + (total > list.length ? " active" : "")
                    }
                >
                    &#8964;
                </span>
            </div>
        </>
    );
};

export default MessageList;
