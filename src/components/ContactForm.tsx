"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/lexciinnovation@gmail.com", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Something went wrong. Please try again.");
                setStatus("error");
            }
        } catch (err) {
            setErrorMessage("Network error. Please check your connection.");
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-semibold tracking-tight">Message Sent!</h3>
                    <p className="text-white/40 font-light max-w-xs mx-auto text-sm md:text-base">We've received your inquiry and our team will get back to you shortly.</p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="aiera-button-solid px-10 py-3.5 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Full Name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Subject</label>
                <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Inquiry regarding Cybersecurity"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Message</label>
                <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
            </div>

            {status === "error" && (
                <p className="text-red-400 text-xs ml-1">{errorMessage}</p>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="aiera-button-solid w-full py-4 text-sm font-semibold flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
        </form>
    );
}
