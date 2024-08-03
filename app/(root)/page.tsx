'use client';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    user && (
        <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
        
    )
    console.log(user) 


    return (
        <main className="sm:mx-24 mx-0">
            <div className="">
                {/* Welcome {user.name} */}
                <a href="/api/auth/logout">Login</a>
                <a href="/api/auth/login">Logout</a>
                <p>Hello world! Welcome to Aski</p>
            </div>
        </main>
    );
}

export default withPageAuthRequired(Home)



