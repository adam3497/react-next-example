import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface Params {
    id: string;
}

const UserPage = async ({ params }: { params: Params }) => {
    // Aseguramos que params.id sea tratado de manera compatible
    const { id } = params;

    // Fetch de datos del usuario
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch user data");
    }

    const user: User = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{user.name}</h1>
            <p className="text-lg">Email: {user.email}</p>
            <p className="text-lg">Teléfono: {user.phone}</p>
            <p className="text-lg">
                Sitio web:{" "}
                <a
                    href={`https://${user.website}`}
                    className="text-blue-500 underline"
                >
                    {user.website}
                </a>
            </p>
        </div>
    );
};

export default UserPage;

// Generación de rutas estáticas
export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

    return users.map((user) => ({
        id: user.id.toString(),
    }));
}
