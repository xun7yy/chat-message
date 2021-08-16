import data from "./data.json";
import { sortList, deleteDuplicateMessages } from "../utils/messageList";
let messages = data.messages || [];

export const getMessageList = (filter, removeDuplicates) => {
    const sortKey = filter?.sort?.key;
    const pageNo = filter?.pagination?.pageNo;
    const pageSize = filter?.pagination?.pageSize;
    if (!pageNo || !pageSize) {
        return { list: messages, total: messages.length };
    }
    if (removeDuplicates) {
        deleteDuplicateMessages(messages);
    }
    const list = sortList(messages, sortKey);
    return { list: list.slice(0, pageNo * pageSize), total: messages.length };
};

export const deleteMessage = (index) => {
    messages.splice(index, 1);
};
