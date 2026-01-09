// resources/js/Components/Layout/Header.jsx
import { useState, useEffect } from 'react';
import NotificationDropdown from './NotificationDropdown';
import { FaBars, FaBell, FaCog, FaPlus, FaSearch } from 'react-icons/fa';
export default function Header({
    title = "Dashboard",
    onMenuClick,
    onNotificationClick,
    user,
    notificationsOpen = false
}) {
    const [greeting, setGreeting] = useState('Selamat pagi!');

    // Update greeting based on time
    useEffect(() => {
        const hour = new Date().getHours();
        let newGreeting = "Selamat pagi!";

        if (hour >= 12 && hour < 15) newGreeting = "Selamat siang!";
        else if (hour >= 15 && hour < 18) newGreeting = "Selamat sore!";
        else if (hour >= 18 || hour < 4) newGreeting = "Selamat malam!";

        setGreeting(newGreeting);
    }, []);

    return (
        <header className="bg-white border-b border-neutral-200 p-4 flex items-center justify-between sticky top-0 z-20">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                    <FaBars className="text-xl text-neutral-700" />
                </button>

                {/* Page Title */}
                <div>
                    <h1 className="text-xl font-bold text-neutral-900">{title}</h1>
                    <p className="text-sm text-neutral-500">{greeting}</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                
                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={onNotificationClick}
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative"
                    >
                        <FaBell className="text-xl text-neutral-700" />
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
                        <FaPlus className="text-neutral-700" />
                    </button>
                </div>
            </div>
        </header>
    );
}