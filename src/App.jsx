import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, Rocket } from "lucide-react";

export default function Landing() {
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Заявка отправлена. Мы на связи!");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <Rocket className="h-4 w-4" />
              <span>Экстренная уверенность за 500₽</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
              <span className="text-white">5 приёмов, чтобы перестать мяться перед людьми</span>
            </h1>
            <p className="mt-5 text-white/70 md:text-lg">
              Рабочий комплект техник, которые включат уверенность за 2 минуты — для переговоров, собеседований, свиданий, выступлений.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium shadow hover:shadow-lg transition">
                Получить за 500₽
              </a>
              <a href="#features" className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">
                Что внутри
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-xl flex items-center justify-center">
              <span className="text-white/60">Видео-превью продукта</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="bg-neutral-900/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          {[
            { t: "Приём 'Стенка'", d: "Стойка и дыхание, которые переводят тело в режим контроля." },
            { t: "Триггер фразы", d: "3 фразы, вбивающие ощущение авторитета." },
            { t: "Внутренний якорь", d: "Мгновенный вызов состояния уверенности из прошлого успеха." },
          ].map((x, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <Check className="h-6 w-6" />
              <h3 className="mt-4 text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-white/70">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-neutral-900/60">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Получите «Экстренная уверенность» сейчас</h2>
          <p className="mt-2 text-white/70">Оплатите 500₽ и получите PDF + аудио с техниками.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input required placeholder="Имя" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
            <input required type="email" placeholder="Email" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium shadow hover:shadow-lg transition">
              <Mail className="h-4 w-4" /> Оплатить и получить
            </button>
            {status && <div className="text-green-400">{status}</div>}
          </form>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-10 text-white/60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Экстренная уверенность</div>
          <div className="text-sm">Политика конфиденциальности</div>
        </div>
      </footer>
    </div>
  );
}
