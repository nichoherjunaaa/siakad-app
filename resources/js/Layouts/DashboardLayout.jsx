// resources/js/Layouts/DashboardLayout.jsx
import { useState } from 'react';
import Sidebar from '@/Components/Layout/Sidebar';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';

export default function DashboardLayout({ children, user }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <div className="flex min-h-screen">
                {/* Sidebar */}
                <Sidebar
                    user={user}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-h-screen md:ml-64">
                    {/* Header */}
                    <Header
                        setSidebarOpen={setSidebarOpen}
                        userName={user.name}
                    />

                    {/* Main Content */}
                    <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                        {children}
                    </main>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}