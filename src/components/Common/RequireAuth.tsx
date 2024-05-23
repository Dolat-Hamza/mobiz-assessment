// components/RequireAuth.tsx

import {usePathname, useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';
import {ReactNode, useEffect} from 'react';

interface RequireAuthProps {
    children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({children}) => {
    const {data: session, status} = useSession();
    const router = useRouter();
const pathname = usePathname();
    useEffect(() => {
        console.log("Session is here, ", session + " " + status);
        if (status === 'loading') return;


        if (status === 'unauthenticated') {
            router.push('/auth/login'); // Redirect to login page if not authenticated
        }
        if(status === 'authenticated' && pathname === '/auth/login') {
            router.push('/dashboard');
        }
    }, [session, status, router,pathname]);

    if (status === 'loading') return <p>Loading...</p>;

    return <>{children}</>;
};

export default RequireAuth;
