"use client";

import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import ScrollAnimationWrapper from "./scroll-animation-wrapper";
import type { Locale } from "@/i18n-config";

export default function ContactSection({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Ensure dictionary and form properties exist with fallbacks
  const formDictionary = dictionary?.form || {};
  const namePlaceholder = formDictionary?.name || "Name";
  const emailPlaceholder = formDictionary?.email || "Email";
  const companyPlaceholder = formDictionary?.company || "Company";
  const messagePlaceholder =
    formDictionary?.messagePlaceholder || "How can we help your company?";
  const buttonDefault = formDictionary?.button?.default || "Send Message";
  const buttonSending = formDictionary?.button?.sending || "Sending...";
  const successTitle = formDictionary?.success?.title || "Message Sent!";
  const successDescription =
    formDictionary?.success?.description ||
    "Thank you for your contact. Our team will get back to you soon.";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "support@braza.io",
        }),
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      // Reset do estado após 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      // Aqui você pode adicionar uma notificação de erro para o usuário
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-[#050505] w-full"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text">
                  {dictionary?.title?.highlighted || "Contact Us"}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                {dictionary?.description ||
                  "We're ready to discuss how we can help your company."}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper direction="right" delay={200}>
            <div className="bg-[#0a0a0a] p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-10 sm:py-16">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-bg mb-4 sm:mb-6">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-braza-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                    {successTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {successDescription}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        {namePlaceholder}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#151515] border-0 focus:outline-none focus:ring-2 focus:ring-braza-yellow text-foreground rounded-md"
                        placeholder={namePlaceholder}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        {emailPlaceholder}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#151515] border-0 focus:outline-none focus:ring-2 focus:ring-braza-yellow text-foreground rounded-md"
                        placeholder={emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      {companyPlaceholder}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#151515] border-0 focus:outline-none focus:ring-2 focus:ring-braza-yellow text-foreground rounded-md"
                      placeholder={companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      {formDictionary?.message || "Message"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#151515] border-0 focus:outline-none focus:ring-2 focus:ring-braza-yellow text-foreground rounded-md"
                      placeholder={messagePlaceholder}
                      resize="none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md group"
                    >
                      <span className="relative z-10 bg-background px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center w-full rounded-md overflow-hidden group-hover:text-braza-yellow transition-colors duration-300">
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 gradient-text"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            {buttonSending}
                          </span>
                        ) : (
                          <span className="inline-flex items-center">
                            <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                              {buttonDefault}
                            </span>
                            <Send className="ml-2 h-4 w-4 gradient-icon transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        )}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-braza-yellow to-braza-green group-hover:w-full transition-all duration-300 ease-in-out"></span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
