import LinksList from "./resources";
import Topics from "./topics";

export default function LeftBar({ topics, onChange }) {
    return (

        <>
            <Topics data={topics}> onChange={onChange}   </Topics>
            <LinksList> </LinksList>

        </>
    );
}