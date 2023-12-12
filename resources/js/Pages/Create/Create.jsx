import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        localtion: '',
        capacity: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
    
        post(route('events.store')).then(() => {
            reset();
            Inertia.visit('/events');
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="titulo" value="Titulo" />

                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        autoComplete="title"
                        isFocused={true}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />

                    <InputError message={errors.title} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Descrição" />

                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.title} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Data de Inicio" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.start_date}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('start_date', e.target.value)}
                        required
                    />

                    <InputError message={errors.start_date} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Data de Termino" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.end_date}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('end_date', e.target.value)}
                        required
                    />

                    <InputError message={errors.end_date} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="location" value="Local" />

                    <TextInput
                        id="location"
                        name="location"
                        value={data.location}
                        className="mt-1 block w-full"
                        autoComplete="location"
                        isFocused={true}
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    />

                    <InputError message={errors.location} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="capacity" value="Capacidade de Pessoas" />

                    <TextInput
                        id="capacity"
                        name="capacity"
                        value={data.capacity}
                        className="mt-1 block w-full"
                        autoComplete="capacity"
                        isFocused={true}
                        onChange={(e) => setData('capacity', e.target.value)}
                        required
                    />

                    <InputError message={errors.capacity} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                <Link
                        href={route('dashboard')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Voltar
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
