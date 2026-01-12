// resources/js/Components/SubjectDetail/AnnouncementsSection.jsx
import { useState } from 'react';

export default function AnnouncementsSection() {
    const [announcements] = useState([
        {
            id: 1,
            title: 'Perubahan Jadwal Kuis Matematika',
            content: 'Kuis online tentang konsep limit yang semula dijadwalkan tanggal 12 Desember 2023 pukul 14:00, diubah menjadi tanggal 13 Desember 2023 pukul 10:00. Harap menyesuaikan jadwal.',
            author: 'Bu Sari, S.Pd.',
            date: '8 Des 2023',
            time: '09:30',
            priority: 'high',
            attachments: ['Jadwal_Baru.pdf'],
            comments: 5,
            views: 32,
            isNew: true
        },
        {
            id: 2,
            title: 'Pengumuman Hasil Tugas 1',
            content: 'Hasil penilaian Tugas 1: Aplikasi Turunan dalam Optimasi sudah dapat dilihat di halaman nilai. Rata-rata kelas: 85.5. Selamat kepada yang mendapatkan nilai di atas rata-rata!',
            author: 'Bu Sari, S.Pd.',
            date: '6 Des 2023',
            time: '14:15',
            priority: 'normal',
            views: 45,
            comments: 12
        },
        {
            id: 3,
            title: 'Jadwal Konsultasi Tambahan',
            content: 'Bagi yang membutuhkan konsultasi tambahan untuk materi kalkulus, saya akan berada di ruang Guru-101 setiap hari Rabu pukul 13:00-15:00. Silakan datang dengan perjanjian terlebih dahulu.',
            author: 'Bu Sari, S.Pd.',
            date: '4 Des 2023',
            time: '11:00',
            priority: 'normal',
            views: 28,
            comments: 3
        },
        {
            id: 4,
            title: 'Pengumpulan Proyek Kelompok',
            content: 'Ingatkan kepada semua kelompok bahwa batas waktu pengumpulan proyek kelompok adalah tanggal 15 Desember 2023 pukul 23:59. Presentasi akan dilaksanakan pada minggu berikutnya.',
            author: 'Bu Sari, S.Pd.',
            date: '2 Des 2023',
            time: '08:45',
            priority: 'medium',
            attachments: ['Rubrik_Penilaian.pdf'],
            views: 38,
            comments: 8
        }
    ]);

    const [expandedAnnouncement, setExpandedAnnouncement] = useState(null);

    const getPriorityColor = (priority) => {
        const colors = {
            high: 'bg-red-100 text-red-700 border-red-200',
            medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            normal: 'bg-blue-100 text-blue-700 border-blue-200'
        };
        return colors[priority] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getPriorityLabel = (priority) => {
        const labels = {
            high: 'Penting',
            medium: 'Sedang',
            normal: 'Normal'
        };
        return labels[priority] || priority;
    };

    const toggleExpand = (announcementId) => {
        setExpandedAnnouncement(expandedAnnouncement === announcementId ? null : announcementId);
    };

    const handleComment = (announcement) => {
        console.log('Comment on announcement:', announcement);
        // Implement comment functionality
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">Pengumuman</h3>
                        <p className="text-sm text-neutral-600 mt-1">
                            {announcements.filter(a => a.isNew).length} pengumuman baru
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                        <i className="fas fa-plus mr-2"></i>
                        Buat Pengumuman
                    </button>
                </div>
            </div>

            {/* Announcements List */}
            <div className="divide-y divide-neutral-200">
                {announcements.map((announcement) => (
                    <div key={announcement.id} className="p-6 hover:bg-neutral-50">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center mb-3">
                                    <h4 className="font-bold text-lg text-neutral-900 mr-3">
                                        {announcement.title}
                                    </h4>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(announcement.priority)}`}>
                                        {getPriorityLabel(announcement.priority)}
                                    </span>
                                    {announcement.isNew && (
                                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                            Baru
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                                    {announcement.content}
                                </p>

                                <div className="flex items-center text-sm text-neutral-600">
                                    <div className="flex items-center mr-4">
                                        <i className="fas fa-user-tie mr-1"></i>
                                        <span>{announcement.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>{announcement.date} • {announcement.time}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-3 lg:mt-0">
                                <button
                                    onClick={() => handleComment(announcement)}
                                    className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center mr-2"
                                >
                                    <i className="fas fa-comment mr-1"></i>
                                    {announcement.comments || 0}
                                </button>
                                <button
                                    onClick={() => toggleExpand(announcement.id)}
                                    className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                                >
                                    <i className={`fas fa-chevron-${expandedAnnouncement === announcement.id ? 'up' : 'down'} mr-1`}></i>
                                    Detail
                                </button>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedAnnouncement === announcement.id && (
                            <div className="mt-4 pt-4 border-t border-neutral-200">
                                <div className="mb-4">
                                    <p className="text-neutral-700 whitespace-pre-line">
                                        {announcement.content}
                                    </p>
                                </div>

                                {/* Attachments */}
                                {announcement.attachments && announcement.attachments.length > 0 && (
                                    <div className="mb-4">
                                        <h5 className="font-medium text-neutral-900 mb-3">Lampiran</h5>
                                        <div className="space-y-2">
                                            {announcement.attachments.map((file, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-file-pdf text-red-500 mr-3"></i>
                                                        <div>
                                                            <div className="font-medium text-sm text-neutral-900">{file}</div>
                                                            <div className="text-xs text-neutral-500">PDF • 1.2 MB</div>
                                                        </div>
                                                    </div>
                                                    <button className="text-primary hover:text-primary-dark">
                                                        <i className="fas fa-download"></i>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Comment Section */}
                                <div>
                                    <h5 className="font-medium text-neutral-900 mb-3">Komentar</h5>
                                    <div className="space-y-3">
                                        {/* Example Comment */}
                                        <div className="p-3 bg-neutral-50 rounded-lg">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                                                    <i className="fas fa-user text-primary text-sm"></i>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm text-neutral-900">Ahmad Rizki</div>
                                                    <div className="text-xs text-neutral-500">5 Des 2023 • 10:30</div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-neutral-700">
                                                Terima kasih Bu atas informasinya. Apakah kuis tetap 30 menit?
                                            </p>
                                        </div>

                                        {/* Add Comment */}
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Tulis komentar..."
                                                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {announcements.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-bullhorn text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Belum ada pengumuman</h3>
                    <p className="text-neutral-500">Guru belum membuat pengumuman untuk mata pelajaran ini.</p>
                </div>
            )}
        </div>
    );
}