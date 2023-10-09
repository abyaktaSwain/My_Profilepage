import './Contact.css'

function Contact()
{
    return(
        <div class="main">
        <div class="contact">
            <h3>Get In Touch</h3>
            <input class="input" type="text" placeholder="First Name"/>
            <input class="input" type="text" placeholder="Last Name"/><br/><br/>
            <input class="input" type="email" placeholder="Email"/>
            <input class="input" type="number" placeholder="Phone"/><br/><br/>
            <input style={{width: '78%'}} class="input" type="text" placeholder="Addresh"/><br/><br/>
            <textarea name="" id="" cols="30" rows="10">Type your message here</textarea>
            <a href="Task5_Homepage.html"><button>Submit</button></a>
        </div>
    </div>
    )
}

export default Contact