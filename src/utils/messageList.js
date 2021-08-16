export const sortList = (list, sortKey) => {
    if (!Array.isArray(list)) {
        return [];
    }
    switch (sortKey) {
        case "ASC":
            return list.sort((a, b) => {
                return new Date(a.sentAt) - new Date(b.sentAt);
            });
        case "DESC":
            return list.sort((a, b) => {
                return new Date(b.sentAt) - new Date(a.sentAt);
            });
        default:
            return list;
    }
};

export const formateDate = (timestamp) => {
    const date = new Date(timestamp);
    if (date.toString() === "Invalid Date") {
        return timestamp;
    }
    const getLocaleString = (options) => {
        return date.toLocaleString("en-US", options);
    };
    return `${getLocaleString({ weekday: "long" })} ${getLocaleString({
        day: "2-digit",
        year: "numeric",
        month: "long",
    })} at ${getLocaleString({
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })}`;
};

export const deleteDuplicateMessages = (list) => {
    const messageList = [...list];
    const uuidToContentMap = {};
    let deletedCount = 0;

    for (let i in messageList) {
        const row = messageList[i];
        if (!uuidToContentMap[row.uuid]) {
            uuidToContentMap[row.uuid] = new Set();
            uuidToContentMap[row.uuid].add(row.content);
            continue;
        }
        if (uuidToContentMap[row.uuid].has(row.content)) {
            list.splice(parseInt(i) - deletedCount, 1);
            deletedCount++;
            continue;
        }
        uuidToContentMap[row.uuid].add(row.content);
    }
};
