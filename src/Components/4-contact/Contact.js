import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation/email.json";

function Contact(){
    const [state, handleSubmit] = useForm("xnnvknbv");

    return(
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"/>
                Contact Us
            </h1>
            <p className="sub-title">Feel free to send me a message and I’ll get back to you as soon as possible.</p>

            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" name="email" id="email" required/>
                        <ValidationError prefix="Email" field="email"errors={state.errors}/>
                    </div>

                    <div className="d-flex" style={{marginTop: '24px'}}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="message" id="message" required></textarea>
                        <ValidationError prefix="Message" field="message"errors={state.errors}/>
                    </div>

                    
                    <button className="submit" disabled={state.submitting}>{state.submitting? 'submitting...': 'submit'}</button>

                    {state.succeeded&&
                    <p className="d-flex">
                        <Lottie className="icon" loop={false} animationData={doneAnimation} />
                        Your message his been Succesfuly</p>}
                </form>
                <div className="animation">
                    <Lottie className="icon" animationData={emailAnimation} />
                </div>
            </div>

        </section>
    )
}
export default Contact;