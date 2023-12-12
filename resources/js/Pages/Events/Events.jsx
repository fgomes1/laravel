import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link,Head } from '@inertiajs/react';
import { IoPersonSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Dashboard({ auth, events }) {
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {events.map((event) => (
                                <tr key={event.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.start_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.end_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.capacity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href={route("create-guests")}>
                                        <IoPersonSharp />
                                    </Link>
                                </td>
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
