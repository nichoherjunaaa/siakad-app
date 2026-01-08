// resources/js/Components/Layout/MobileMenu.jsx
import { Link, usePage } from '@inertiajs/react';

export default function MobileMenu({ isOpen, onClose, user }) {
    const { url } = usePage();

    const navigation = [
        {
            name: 'Dashboard',
            href: route('dashboard'),
            icon: 'fas fa-home',
            current: url === route('dashboard')
        },
        {
            name: 'Jadwal',
            href: route('schedule'),
            icon: 'fas fa-calendar-alt',
            current: url.includes('schedule')
        },
        {
            name: 'Materi',
            href: route('materials'),
            icon: 'fas fa-book',
            current: url.includes('materials')
        },
        {
            name: 'Nilai',
            href: route('grades'),
            icon: 'fas fa-chart-line',
            current: url.includes('grades')
        },
        {
            name: 'Tugas',
            href: route('assignments'),
            icon: 'fas fa-clipboard-check',
            current: url.includes('assignments')
        },
        {
            name: 'Notifikasi',
            href: route('notifications'),
            icon: 'fas fa-bell',
            current: url.includes('notifications'),
            badge: 3
        },
        {
            name: 'Pengaturan',
            href: route('settings'),
            icon: 'fas fa-cog',
            current: url.includes('settings')
        },
    ];

    const handleLogout = () => {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
            window.location.href = route('logout');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={onClose}
            ></div>

            {/* Mobile Menu */}
            <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 md:hidden">
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="p-4 border-b border-neutral-200 flex justify-end">
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-neutral-100"
                        >
                            <i className="fas fa-times text-xl text-neutral-700"></i>
                        </button>
                    </div>

                    {/* User Profile */}
                    <div className="p-4 border-b border-neutral-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">
                                    {user.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <h2 className="font-semibold">{user.name}</h2>
                                <div className="flex items-center space-x-1">
                                    <span className="inline-block w-2 h-2 rounded-full bg-success"></span>
                                    <span className="text-xs text-neutral-500 capitalize">
                                        {user.role === 'orangtua' ? 'Orang Tua' : user.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <ul className="space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className={`flex items-center space-x-3 p-3 rounded-xl ${item.current
                                            ? 'bg-primary text-white'
                                            : 'hover:bg-neutral-100 text-neutral-700'
                                            }`}
                                    >
                                        <i className={`${item.icon} w-5`}></i>
                                        <span>{item.name}</span>
                                        {item.badge && (
                                            <span className="ml-auto inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-danger text-white rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-neutral-200">
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center space-x-2 w-full p-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700"
                        >
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Keluar</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}