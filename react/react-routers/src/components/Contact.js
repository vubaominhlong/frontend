import { useNavigate } from 'react-router-dom';

function Contact(props) {
    const navigate = useNavigate();
    return (
        <>
        <div>Contact Page</div>
        <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
}

export default Contact;