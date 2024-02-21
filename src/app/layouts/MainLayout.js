'use client';

import Footer from '@/components/Footer';
import MainHeader from '@/components/Headers/MainHeader';
import SubMenu from '@/components/Headers/SubMenu';
import TopMenu from '@/components/Headers/TopMenu';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

export default function MainLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.addEventListener('storage', function () {
            let res = this.localStorage.getItem('isLoading');
            res === 'false' ? setIsLoading(false) : setIsLoading(true);
        });
    });
    return (
        <>
            <div
                id="Mainlayout"
                className="min-w-[1050px] max-w-[1300px] mx-auto"
            >
                <div>
                    {isLoading ? <Loading /> : <div></div>}
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />

                    {children}

                    <Footer />
                </div>
            </div>
        </>
    );
}
