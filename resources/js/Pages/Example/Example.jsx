import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Example({ auth, lista }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Exampla Paga</h2>}
        >
            <Head title="Exampla Paga" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Págiana de Exemplo</div>
                        {lista.join('')}
                    </div> 
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
