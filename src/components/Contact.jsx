"use client"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  VITE_EMAILJS_SERVICE_ID as serviceId,
  VITE_EMAILJS_TEMPLATE_ID as templateId,
  VITE_EMAILJS_USER_ID as userId,
} from '../utils/config.js'
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { IoIosMail as MailIcon } from "react-icons/io";
import { FaLocationDot as AdressIcon } from "react-icons/fa6";
import { TiSocialFacebook as FacebookIcon } from "react-icons/ti";
import { SlSocialInstagram as InstagramIcon } from "react-icons/sl";






export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then(result => {
        console.log(result.text)
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      })
      .catch(error => {
        console.log(error);
        alert("Ocurrio un error al enviar el mensaje, por favor intenta nuevamente");
        setIsSubmitting(false);
      })
    
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactanos</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dejanos tus datos, y contanos un poco acerca de lo que tenes en mente. Estaremos en contacto a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informacion</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Telefono</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <MailIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">enriquez@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <AdressIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Localidad</h4>
                    <p className="text-gray-600">Santa Fe, Capital</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Seguinos en nuestras redes</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envianos tu mensaje</h3>

              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Recibimos tu mensaje, estaremos en contacto a la brevedad</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} ref={ form }>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Correo electronico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contanos un poco acerca de tu proyecto o consulta..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

