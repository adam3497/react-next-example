import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const Home: React.FC = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 60 }, // Habilita la revalidación cada 60 segundos
    });
    const users: User[] = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Lista de Usuarios de ejemplo</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border p-4 rounded shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-700">{user.email}</p>
                        <a
                            href={`/user/${user.id}`}
                            className="text-blue-500 underline mt-2 block"
                        >
                            Ver más detalles
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;