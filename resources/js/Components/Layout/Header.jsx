// resources/js/Components/Layout/Header.jsx
import { useState, useEffect } from 'react';
import NotificationDropdown from './NotificationDropdown';

export default function Header({
    title = "Dashboard",
    onMenuClick,
    onNotificationClick,
    user,
    notificationsOpen = false
}) {
    const [greeting, setGreeting] = useState('Selamat pagi!');
    const [searchQuery, setSearchQuery] = useState('');

    // Update greeting based on time
    useEffect(() => {
        const hour = new Date().getHours();
        let newGreeting = "Selamat pagi!";

        if (hour >= 12 && hour < 15) newGreeting = "Selamat siang!";
        else if (hour >= 15 && hour < 18) newGreeting = "Selamat sore!";
        else if (hour >= 18 || hour < 4) newGreeting = "Selamat malam!";

        setGreeting(newGreeting);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for:', searchQuery);
        // Implement search functionality here
    };

    return (
        <header className="bg-white border-b border-neutral-200 p-4 flex items-center justify-between sticky top-0 z-20">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                    <i className="fas fa-bars text-xl text-neutral-700"></i>
                </button>

                {/* Page Title */}
                <div>
                    <h1 className="text-xl font-bold text-neutral-900">{title}</h1>
                    <p className="text-sm text-neutral-500">{greeting}</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                    <form onSubmit={handleSearch} className="relative">
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                        <input
                            type="text"
                            placeholder="Cari..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                        />
                    </form>
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={onNotificationClick}
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative"
                    >
                        <i className="fas fa-bell text-xl text-neutral-700"></i>
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>

                    {/* Notification Dropdown */}
                    {notificationsOpen && (
                        <NotificationDropdown onClose={() => onNotificationClick()} />
                    )}
                </div>

                {/* Quick Actions */}
                <div className="flex items-center space-x-2">
                    <button
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                        title="Tambah"
                    >
                        <i className="fas fa-plus text-neutral-700"></i>
                    </button>
                    <button
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                        title="Bantuan"
                    >
                        <i className="fas fa-question-circle text-neutral-700"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}