// resources/js/Components/Dashboard/UpcomingSchedule.jsx
import { useState } from 'react';
import { FaCalculator, FaAtom, FaLanguage, FaBook } from 'react-icons/fa';
export default function UpcomingSchedule() {
    const [schedules] = useState([
        { 
            id: 1,
            time: "08:00 - 09:30", 
            subject: "Matematika", 
            teacher: "Bu Sari, S.Pd.", 
            room: "Lab 1",
            type: "matematika",
            status: "upcoming"
        },
        { 
            id: 2,
            time: "10:00 - 11:30", 
            subject: "Fisika", 
            teacher: "Pak Budi, M.Pd.", 
            room: "Ruang 201",
            type: "fisika",
            status: "current"
        },
        { 
            id: 3,
            time: "13:00 - 14:30", 
            subject: "Bahasa Inggris", 
            teacher: "Bu Lisa, S.Pd.", 
            room: "Ruang 105",
            type: "inggris",
            status: "upcoming"
        }
    ]);

    const getIconByType = (type) => {
        switch(type) {
            case 'matematika': return FaCalculator;
            case 'fisika': return FaAtom;
            case 'inggris': return FaLanguage;
            default: return FaBook;
        }
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'current': 
                return <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">Sedang Berlangsung</span>;
            case 'upcoming': 
                return <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">Akan Datang</span>;
            default: 
                return <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700">Selesai</span>;
        }
    };

    const scheduleLink = "#"; // Ganti dengan "/schedule" jika sudah ada route

    return (
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Jadwal Berikutnya</h3>
                <a 
                    href={scheduleLink}
                    className="text-sm text-primary font-medium hover:underline"
                >
                    Lihat semua
                </a>
            </div>
            
            <div className="space-y-4">
                {schedules.length > 0 ? (
                    schedules.map((schedule) => (
                        <div 
                            key={schedule.id}
                            className="flex items-center p-4 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                {(() => {
                                    const Icon = getIconByType(schedule.type);
                                    return <Icon className="text-primary text-xl" />;
                                })()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-neutral-900 truncate">
                                    {schedule.subject}
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    <span className="text-sm text-neutral-500 flex items-center">
                                        <i className="fas fa-user-tie mr-1 text-xs"></i>
                                        {schedule.teacher}
                                    </span>
                                    <span className="text-sm text-neutral-500 flex items-center">
                                        <i className="fas fa-door-open mr-1 text-xs"></i>
                                        {schedule.room}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right ml-4">
                                <div className="font-medium text-neutral-900">{schedule.time}</div>
                                <div className="mt-1">{getStatusBadge(schedule.status)}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <i className="fas fa-calendar-times text-3xl text-neutral-300 mb-3"></i>
                        <p className="text-neutral-500">Tidak ada jadwal hari ini</p>
                    </div>
                )}
            </div>
        </div>
    );
}