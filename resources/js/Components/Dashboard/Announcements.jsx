// resources/js/Components/Dashboard/Announcements.jsx
import { useState } from 'react';

export default function Announcements() {
    const [announcements] = useState([
        { 
            id: 1,
            title: "Ujian Semester Genap", 
            date: "2 Jam lalu", 
            type: "exam",
            priority: "high",
            content: "Ujian semester genap akan dilaksanakan pada tanggal 15-20 Mei 2024."
        },
        { 
            id: 2,
            title: "Pembayaran SPP April", 
            date: "Kemarin", 
            type: "payment",
            priority: "medium",
            content: "Tenggat pembayaran SPP bulan April adalah tanggal 10 April 2024."
        },
        { 
            id: 3,
            title: "Kegiatan Bakti Sosial OSIS", 
            date: "2 Hari lalu", 
            type: "activity",
            priority: "low",
            content: "OSIS akan mengadakan kegiatan bakti sosial di panti asuhan pada akhir bulan."
        }
    ]);

    // Ganti route() dengan href biasa untuk sementara
    const announcementsLink = "#"; // Ganti dengan "/announcements" jika sudah ada route

    const getTypeIcon = (type) => {
        switch(type) {
            case 'exam': return { icon: 'fas fa-clipboard-list', color: 'text-red-500', bg: 'bg-red-50' };
            case 'payment': return { icon: 'fas fa-money-check-alt', color: 'text-green-500', bg: 'bg-green-50' };
            case 'activity': return { icon: 'fas fa-users', color: 'text-blue-500', bg: 'bg-blue-50' };
            default: return { icon: 'fas fa-bullhorn', color: 'text-gray-500', bg: 'bg-gray-50' };
        }
    };

    const getPriorityBadge = (priority) => {
        switch(priority) {
            case 'high': return <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">Penting</span>;
            case 'medium': return <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">Sedang</span>;
            case 'low': return <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Rutin</span>;
            default: return null;
        }
    };

    const formatDate = (dateString) => {
        // Simple date formatting
        return dateString;
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Pengumuman</h3>
                <a 
                    href={announcementsLink}
                    className="text-sm text-primary font-medium hover:underline"
                >
                    Semua
                </a>
            </div>
            
            <div className="space-y-4">
                {announcements.length > 0 ? (
                    announcements.map((announcement) => {
                        const typeInfo = getTypeIcon(announcement.type);
                        
                        return (
                            <div 
                                key={announcement.id}
                                className="p-4 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors"
                            >
                                <div className="flex items-start">
                                    <div className={`w-10 h-10 rounded-lg ${typeInfo.bg} flex items-center justify-center mr-3`}>
                                        <i className={`${typeInfo.icon} ${typeInfo.color}`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-medium text-neutral-900">{announcement.title}</h4>
                                            {getPriorityBadge(announcement.priority)}
                                        </div>
                                        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                                            {announcement.content}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-xs text-neutral-500">
                                                <i className="far fa-clock mr-1"></i>
                                                {formatDate(announcement.date)}
                                            </span>
                                            <button className="text-xs text-primary hover:underline">
                                                Baca selengkapnya →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-8">
                        <i className="fas fa-bullhorn text-3xl text-neutral-300 mb-3"></i>
                        <p className="text-neutral-500">Tidak ada pengumuman</p>
                    </div>
                )}
            </div>
        </div>
    );
}