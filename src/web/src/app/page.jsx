"use client";
import { z } from "zod";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const formSchema = z.object({
    email: z
        .string()
        .email("Endereço de e-mail inválido")
        .min(1, "Email obrigatório"),
    password: z
        .string()
        .min(1, "Senha obrigatória")
        .min(8, "Senha deve possuir pelo menos 8 caractéres"),
});

export default function Home() {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const credentials = Object.fromEntries(formData);

        const user = localStorage.getItem("nutripuc[user]");

        if (user != credentials.email) {
            toast.error("Usuário não cadastrado");

            return;
        }

        const storedPassword = localStorage.getItem("nutripuc[password]");

        const response = await fetch("/api/login", {
            cache: "no-store",
            method: "POST",
            body: JSON.stringify({
                password: credentials.password,
                storedPassword,
            }),
            headers: {
                "Content-Type": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        const { authSuccess } = await response.json();
        console.log(authSuccess);

        if (authSuccess == true) {
            router.push("/dashboard");
        } else {
            toast.error("Senha inválida!");
        }
    }

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 my-10 items-center bg-teal-100">
            <div className="min-w-[320px] max-w-[60ch] justify-self-center justify-center items-center flex flex-col md:items-start md:justify-start">
                <h2 className="md:text-9xl text-center text-7xl text-gray-50 italic font-bold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
                    Nutripuc
                </h2>
                <h3 className="text-2xl md:text-5xl text-center md:text-start  font-semibold text-slate-500 my-4 max-w-[15ch]">
                    Seu aplicativo de saúde geral
                </h3>
                <p className="text-center items-center self-center md:text-left md:self-start my-4 max-w-[35ch]">
                    Estimular a saúde, a qualidade de vida e a prevenção de
                    doenças visando à longevidade. Promover uma relação saudável
                    entre o paciente e o alimento, respeitando preferências e
                    individualidades. Sem fazer terrorismo nutricional faz parte
                    do nosso objetivo!
                </p>
            </div>
            <div className="min-w-[320px] justify-self-center">
                <form
                    method="POST"
                    onSubmit={handleSubmit}
                    className="bg-teal-500/25 shadow-2xl p-10 border-2 border-teal-500/10 rounded-xl"
                >
                    <h3 className="font-bold text-teal-600 text-5xl text-center p-2 m-4 mb-8">
                        Faça seu login
                    </h3>

                    <label
                        htmlFor="email"
                        className="block text-teal-600 font-bold my-2 text-lg"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Email cadastrado"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-md"
                    />

                    <label
                        htmlFor="password"
                        className="block text-teal-600 font-bold my-2 mt-4 text-lg"
                    >
                        Senha
                    </label>
                    <input
                        type="password"
                        autoComplete="new-password"
                        placeholder="Senha"
                        name="password"
                        id="password"
                        className="w-full px-4 py-2 rounded-md"
                    />

                    <button
                        type="submit"
                        className="block w-full bg-teal-500 hover:bg-teal-600 rounded-md mt-8 text-white font-bold tracking-wider p-4 text-2xl"
                    >
                        Entrar
                    </button>
                    <fieldset className="border-t border-slate-400 text-center py-4 mt-8">
                        <legend className="mx-auto px-4 text-slate-400 text-2xl italic">
                            Não tem cadastro?
                        </legend>
                        <Link
                            href="/sign-up"
                            className="text-teal-500 text-lg hover:text-white"
                        >
                            Faça cadastro agora
                        </Link>
                    </fieldset>
                    <Toaster />
                </form>
            </div>
        </main>
    );
}
