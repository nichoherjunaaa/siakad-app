// resources/js/Components/Layout/Sidebar.jsx
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Sidebar({ user, sidebarOpen, setSidebarOpen }) {
    const navigation = [
        { name: 'Dashboard', href: route('dashboard'), icon: 'fas fa-home', current: true },
        { name: 'Jadwal', href: '#', icon: 'fas fa-calendar-alt', current: false },
        { name: 'Materi', href: '#', icon: 'fas fa-book', current: false },
        { name: 'Nilai', href: '#', icon: 'fas fa-chart-line', current: false },
        { name: 'Tugas', href: '#', icon: 'fas fa-clipboard-check', current: false },
        { name: 'Notifikasi', href: '#', icon: 'fas fa-bell', current: false, badge: 3 },
        { name: 'Pengaturan', href: '#', icon: 'fas fa-cog', current: false },
    ];

    const handleLogout = () => {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
            window.location.href = route('logout');
        }
    };

    return (
        <>
            {/* Mobile Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-neutral-200 transform transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Mobile Sidebar Content */}
                    <SidebarContent 
                        user={user} 
                        navigation={navigation} 
                        handleLogout={handleLogout}
                    />
                </div>
            </aside>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-neutral-200 fixed h-screen z-40">
                <SidebarContent 
                    user={user} 
                    navigation={navigation} 
                    handleLogout={handleLogout}
                />
            </aside>
        </>
    );
}

function SidebarContent({ user, navigation, handleLogout }) {
    return (
        <>
            {/* School Logo */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <i className="fas fa-graduation-cap text-white text-lg"></i>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-neutral-900">Insan Mulia</h1>
                        <p className="text-xs text-neutral-500">Sistem Informasi Sekolah</p>
                    </div>
                </div>
            </div>

            {/* User Profile */}
            <div className="p-4 border-b border-neutral-200">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                        <h2 className="font-semibold">{user.name}</h2>
                        <div className="flex items-center space-x-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-success"></span>
                            <span className="text-xs text-neutral-500 capitalize">{user.role}</span>
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
                                className={`flex items-center space-x-3 p-3 rounded-xl ${item.current ? 'bg-primary text-white active-menu' : 'hover:bg-neutral-100 text-neutral-700'}`}
                            >
                                <i className={`${item.icon} w-5`}></i>
                                <span>{item.name}</span>
                                {item.badge && (
                                    <span className="ml-auto notification-badge bg-danger text-white">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Quick Stats */}
                <div className="mt-8 p-4 bg-neutral-50 rounded-xl">
                    <h3 className="font-semibold text-sm text-neutral-700 mb-3">Statistik Singkat</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-neutral-600">Kehadiran</span>
                            <span className="font-semibold text-success">95%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-neutral-600">Tugas Selesai</span>
                            <span className="font-semibold text-primary">8/10</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-neutral-600">Rata-rata Nilai</span>
                            <span className="font-semibold text-accent">85.5</span>
                        </div>
                    </div>
                </div>
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
        </>
    );
}