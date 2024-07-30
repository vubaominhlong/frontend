import { useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveusers = searchParams.get('filter') === 'active'
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset User</button>
            </div>
            {
                showActiveusers ? <h2>Show active Users</h2> : <h2>Showing all</h2>
            }
        </div>
    );
};

export default Users;