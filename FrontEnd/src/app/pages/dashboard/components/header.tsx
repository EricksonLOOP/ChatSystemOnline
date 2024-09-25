export default function Header({ name }: { name: string }) {
    return (
        <header className="p-4 bg-purple-500">
            <h1 className="font-bold text-white text-xl"> {`Hello, ${name}!`}</h1>
        </header>
    )
}