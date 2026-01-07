"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/bajajd382@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
                <p className="text-gray-400">Fill out the form or contact me directly.</p>
              </div>
              
              <div className="space-y-6">
                <a href="mailto:bajajd382@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="text-purple-500 w-6 h-6" />
                  </div>
                  <span className="text-lg">bajajd382@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-3 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <Phone className="text-pink-500 w-6 h-6" />
                  </div>
                  <span className="text-lg">+91 8889422439</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-3 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                    <MapPin className="text-indigo-500 w-6 h-6" />
                  </div>
                  <span className="text-lg">Katni, Madhya Pradesh, India</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/deepakbajaj12" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-colors">
                    Github
                  </a>
                  <a href="https://www.linkedin.com/in/deepak-bajaj218/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <form 
              className="space-y-6 p-8 bg-zinc-900/30 rounded-3xl border border-white/5"
              onSubmit={handleSubmit}
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="p-4 rounded-full bg-green-500/20 text-green-500">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I've received your message and will get back to you soon. Best regards, Deepak." />
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-400">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="First Name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 text-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-400">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="Last Name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 text-white transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 text-white transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      id="message"
                      name="Message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 text-white transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">
                      {error}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

