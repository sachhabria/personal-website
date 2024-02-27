export default function Section({ id, children }) {
    const title = id.toUpperCase();
    return (
        <div id={id} className="flex flex-col">
            <div className="text-lg font-bold p-5">{title}</div>
            <div>{children}</div>
        </div>
    );
}