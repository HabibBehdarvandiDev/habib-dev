import MainHeader from "@/components/shared/header/main-header";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col items-center">    
            <MainHeader />
            {children}
        </section>
    );
};

export default HomeLayout;
