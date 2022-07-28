import React, { useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

export const ContactForm = () => {

    const form = useRef();

    const initialValues = {
        company: '',
        email: '',
        phone: '',
        theme: '',
        request: '',
    }

    const onSubmit = () => {
        emailjs.sendForm('service_h2zusuy', 'template_pqpj53j', form.current, 'x6-8LVIrjwT2UXfe-')
            .then(() => {
                toast.success("Email enviado correctamente");
            }, (error) => {
                toast.error("Error al enviar la consulta");
            });
    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values } = formik

    return (
        <div className='contact-form' id="form">
            <div className='container-form'>
                <ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={2000}
                />
                <form onSubmit={handleSubmit} ref={form}>
                    <h2>Contactanos</h2>
                    <h4>Solicita más información a través de nuestro formulario de contacto</h4>
                    <div className='contact-form-inputs-container'>
                        <div>
                            <input
                                placeholder='Nombre'
                                name="company"
                                values={values.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Email'
                                name="email"
                                type="email"
                                values={values.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='contact-form-inputs-container'>
                        <div>
                            <input
                                placeholder='Teléfono'
                                name="phone"
                                type='tel'
                                values={values.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Asunto'
                                name='theme'
                                type='text'
                                values={values.theme}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            placeholder='Mensaje'
                            name="request"
                            values={values.request}
                            onChange={handleChange}
                            cols="30"
                            rows="5"
                            required
                            maxLength={1000}
                        />
                    </div>
                    <button type='submit' className="app__button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
