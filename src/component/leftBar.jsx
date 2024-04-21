import LinksList from "./resources";
import Topics from "./topics";

export default function LeftBar({ topics, onChange }) {
    console.log(onChange);
    return (
        <>
            <Topics topics={topics} onChange={onChange}>    </Topics>
            <LinksList> </LinksList>

        </>
    );
}