import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { userId } = useParams();
    return (
        <div>
            Detail about User  {userId}
        </div>
    );
};

export default UserDetail;