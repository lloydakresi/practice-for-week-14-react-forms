import { useState } from "react";
const ContactUs = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();

        const contactInformation = {
            name,
            email,
            phone,
            submittedOn: new Date()
        }

        console.log(contactInformation);
        setName("");
        setEmail("");
        setPhone("");

    }
    return(
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={name}
                    onChange={e=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input id="email" type="text" value={email}
                    onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="text" value={phone}
                    onChange={e=>{setPhone(e.target.value)}}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;
