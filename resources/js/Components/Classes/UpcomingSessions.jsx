// resources/js/Components/Classes/UpcomingSessions.jsx
import { useState } from 'react';

export default function UpcomingSessions() {
    const [sessions] = useState([
        {
            id: 1,
            class: 'Matematika',
            teacher: 'Bu Sari, S.Pd.',
            topic: 'Integral Tak Tentu',
            time: 'Hari ini, 07:30 - 09:00',
            room: 'LAB-301',
            type: 'regular',
            status: 'upcoming', // upcoming, in-progress, completed, cancelled
            materials: 3,
            assignments: 1,
            joinLink: '#'
        },
        {
            id: 2,
            class: 'Fisika',
            teacher: 'Pak Budi, M.Pd.',
            topic: 'Hukum Newton',
            time: 'Besok, 09:15 - 10:45',
            room: 'LAB-302',
            type: 'lab',
            status: 'upcoming',
            materials: 2,
            assignments: 0,
            joinLink: '#'
        },
        {
            id: 3,
            class: 'Biologi',
            teacher: 'Bu Rina, M.Si.',
            topic: 'Sistem Pencernaan',
            time: 'Kamis, 07:30 - 09:00',
            room: 'LAB-304',
            type: 'lab',
            status: 'upcoming',
            materials: 4,
            assignments: 2,
            joinLink: '#'
        },
        {
            id: 4,
            class: 'Bahasa Inggris',
            teacher: 'Bu Maya, S.Pd.',
            topic: 'Reading Comprehension',
            time: 'Jumat, 09:15 - 10:45',
            room: 'R-205',
            type: 'regular',
            status: 'upcoming',
            materials: 2,
            assignments: 1,
            joinLink: '#'
        }
    ]);

    const getStatusColor = (status) => {
        const colors = {
            upcoming: 'bg-blue-100 text-blue-700 border-blue-200',
            'in-progress': 'bg-green-100 text-green-700 border-green-200',
            completed: 'bg-gray-100 text-gray-700 border-gray-200',
            cancelled: 'bg-red-100 text-red-700 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getStatusLabel = (status) => {
        const labels = {
            upcoming: 'Akan Datang',
            'in-progress': 'Sedang Berlangsung',
            completed: 'Selesai',
            cancelled: 'Dibatalkan'
        };
        return labels[status] || status;
    };

    const getTypeColor = (type) => {
        const colors = {
            regular: 'bg-primary/10 text-primary border-primary/20',
            lab: 'bg-green-100 text-green-700 border-green-200',
            online: 'bg-blue-100 text-blue-700 border-blue-200'
        };
        return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getTypeLabel = (type) => {
        const labels = {
            regular: 'Reguler',
            lab: 'Praktikum',
            online: 'Online'
        };
        return labels[type] || type;
    };

    const handleJoinSession = (session) => {
        console.log('Join session:', session);
        // Implement join session functionality
    };

    const handleViewMaterials = (session) => {
        console.log('View materials for:', session);
        // Implement view materials functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Sesi Mendatang</h3>
                <button className="text-sm text-primary hover:text-primary-dark">
                    Lihat Semua
                </button>
            </div>

            <div className="space-y-4">
                {sessions.map((session) => (
                    <div key={session.id} className="border border-neutral-200 rounded-xl p-4 hover:bg-neutral-50">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-bold text-lg text-neutral-900 mr-3">
                                        {session.class}
                                    </h4>
                                    <span className={`px-2 py-1 rounded-md text-xs ${getStatusColor(session.status)}`}>
                                        {getStatusLabel(session.status)}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 mb-2">
                                    <i className="fas fa-book mr-1"></i>
                                    {session.topic}
                                </p>
                                <div className="flex items-center text-sm text-neutral-600">
                                    <div className="flex items-center mr-4">
                                        <i className="fas fa-user-tie mr-1"></i>
                                        <span>{session.teacher}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-door-open mr-1"></i>
                                        <span>{session.room}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-medium text-neutral-900">{session.time}</div>
                                <span className={`px-2 py-1 rounded-md text-xs ${getTypeColor(session.type)}`}>
                                    {getTypeLabel(session.type)}
                                </span>
                            </div>
                        </div>

                        {/* Session Details */}
                        <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-sm text-neutral-600">
                                    <i className="fas fa-file-alt mr-1"></i>
                                    <span>{session.materials} materi</span>
                                </div>
                                <div className="flex items-center text-sm text-neutral-600">
                                    <i className="fas fa-tasks mr-1"></i>
                                    <span>{session.assignments} tugas</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => handleViewMaterials(session)}
                                    className="px-3 py-1 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                >
                                    <i className="fas fa-eye mr-1"></i>
                                    Preview
                                </button>
                                <button
                                    onClick={() => handleJoinSession(session)}
                                    className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark"
                                >
                                    <i className="fas fa-door-open mr-1"></i>
                                    Masuk
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {sessions.length === 0 && (
                <div className="text-center py-8">
                    <i className="fas fa-calendar-alt text-4xl text-neutral-300 mb-4"></i>
                    <p className="text-neutral-600">Tidak ada sesi mendatang</p>
                </div>
            )}

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-xl font-bold text-neutral-900">4</div>
                        <div className="text-sm text-neutral-600">Sesi Minggu Ini</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-green-600">12</div>
                        <div className="text-sm text-neutral-600">Total Jam</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">3</div>
                        <div className="text-sm text-neutral-600">Praktikum</div>
                    </div>
                </div>
            </div>
        </div>
    );
}