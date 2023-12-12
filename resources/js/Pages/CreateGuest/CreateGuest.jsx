import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        event_id: "",
        user_id: "",
        nome_convidado: "",
        telefone_contato: "",
        email: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("event-guests")).then(() => {
            reset();
            Inertia.visit("/events");
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="event_id" value="Event ID" />

                    <TextInput
                        id="event_id"
                        name="event_id"
                        value={data.event_id}
                        className="mt-1 block w-full"
                        autoComplete="event_id"
                        isFocused={true}
                        onChange={(e) => setData("event_id", e.target.value)}
                        required
                    />

                    <InputError message={errors.event_id} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="user_id" value="User ID" />

                    <TextInput
                        id="user_id"
                        name="user_id"
                        value={data.user_id}
                        className="mt-1 block w-full"
                        autoComplete="user_id"
                        isFocused={true}
                        onChange={(e) => setData("user_id", e.target.value)}
                        required
                    />

                    <InputError message={errors.user_id} className="mt-2" />
                </div>


                <div>
                    <InputLabel htmlFor="name" value="Nome do Convidado" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.nome_convidado}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("nome_convidado", e.target.value)}
                        required
                    />

                    <InputError message={errors.start_date} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Telefone de Contato" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.telefone_contato}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("telefone_contato", e.target.value)}
                        required
                    />

                    <InputError message={errors.end_date} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="location" value="Email" />

                    <TextInput
                        id="location"
                        name="location"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="location"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.location} className="mt-2" />
                </div>

                

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("dashboard")}
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
