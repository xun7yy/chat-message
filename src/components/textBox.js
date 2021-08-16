import English from "../content/english.json";
const TextBox = ({ className, id }) => {
    return <span className={className}>{English[id] || ""}</span>;
};
export default TextBox;
