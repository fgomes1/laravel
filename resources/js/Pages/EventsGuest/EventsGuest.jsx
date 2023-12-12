import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Dashboard({ auth, eventGuests }) {
    console.log(eventGuests)
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Listagem</h2>}
    >
        <Head title="Dashboard" />

        <div className="py-12">
        
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evento ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome do convidado</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {eventGuests.map((eventGuest) => (
                                <tr key={eventGuest.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{eventGuest.event_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{eventGuest.user_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{eventGuest.nome_convidado}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{eventGuest.telefone_contato}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{eventGuest.email}</td>
                                    
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href={route("dashboard")}>
                                        <FaPencilAlt />
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href={route("dashboard")}>
                                        <MdDelete />
                                    </Link>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}