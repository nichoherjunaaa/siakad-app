// resources/js/Components/Layout/NotificationDropdown.jsx
import { useEffect, useRef } from 'react';

export default function NotificationDropdown({ onClose }) {
    const dropdownRef = useRef(null);

    const notifications = [
        {
            id: 1,
            title: 'Tugas Baru: Matematika',
            message: 'Tugas turunan fungsi diberikan',
            time: '2 menit lalu',
            type: 'assignment',
            read: false
        },
        {
            id: 2,
            title: 'Pengumuman Ujian',
            message: 'Ujian semester akan dilaksanakan minggu depan',
            time: '1 jam lalu',
            type: 'announcement',
            read: false
        },
        {
            id: 3,
            title: 'Pembayaran SPP',
            message: 'Tenggat pembayaran SPP bulan ini',
            time: 'Kemarin',
            type: 'payment',
            read: true
        },
        {
            id: 4,
            title: 'Kegiatan OSIS',
            message: 'Akan ada kegiatan bakti sosial',
            time: '2 hari lalu',
            type: 'activity',
            read: true
        },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const markAllAsRead = () => {
        console.log('Mark all as read');
        // Implement mark all as read functionality
    };

    const getIconByType = (type) => {
        switch (type) {
            case 'assignment': return 'fas fa-file-alt text-blue-500';
            case 'announcement': return 'fas fa-bullhorn text-orange-500';
            case 'payment': return 'fas fa-money-check-alt text-green-500';
            case 'activity': return 'fas fa-users text-purple-500';
            default: return 'fas fa-bell text-gray-500';
        }
    };

    return (
        <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 z-50"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-neutral-900">Notifikasi</h3>
                <button
                    onClick={markAllAsRead}
                    className="text-xs text-primary hover:underline"
                >
                    Tandai semua terbaca
                </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-3 rounded-lg border ${notification.read
                                ? 'border-neutral-200 bg-white'
                                : 'border-blue-200 bg-blue-50'
                                }`}
                        >
                            <div className="flex items-start space-x-3">
                                <i className={`${getIconByType(notification.type)} mt-1`}></i>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm text-neutral-900 truncate">
                                        {notification.title}
                                    </h4>
                                    <p className="text-xs text-neutral-600 mt-1">
                                        {notification.message}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-neutral-500">
                                            {notification.time}
                                        </span>
                                        {!notification.read && (
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-4">
                        <i className="fas fa-bell-slash text-3xl text-neutral-300 mb-2"></i>
                        <p className="text-sm text-neutral-500">Tidak ada notifikasi</p>
                    </div>
                )}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200">
                <a
                    href={route('notifications')}
                    className="block text-center text-sm text-primary font-medium hover:underline"
                >
                    Lihat semua notifikasi
                </a>
            </div>
        </div>
    );
}