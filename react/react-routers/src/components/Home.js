import { useNavigate } from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();
    return  (
        <>
        <div> Home Page </div>
        <button onClick={() => navigate('contact')}>Go to Contact page</button>
        </>
    );
}

export default Home;