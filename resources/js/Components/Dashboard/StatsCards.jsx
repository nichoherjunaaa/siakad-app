import { FaBookOpen, FaTasks, FaChartLine, FaCalendarCheck, FaChalkboardTeacher, FaUserGraduate, FaUsers } from "react-icons/fa";
export default function StatsCards({ role = 'siswa', stats }) {
    // Gunakan default stats jika tidak ada props
    const defaultStats = {
        todaySchedule: "3 Pelajaran",
        pendingTasks: "5 Tugas",
        averageScore: "85.5",
        attendanceRate: "95%"
    };

    const safeStats = stats || defaultStats;

    const cardsByRole = {
        siswa: [
            {
                id: 1,
                icon: FaBookOpen,
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-100',
                label: 'Hari Ini',
                value: safeStats.todaySchedule,
                description: 'Jadwal pelajaran hari ini'
            },
            {
                id: 2,
                icon: FaTasks,
                iconColor: 'text-green-600',
                bgColor: 'bg-green-100',
                label: 'Batas Waktu',
                value: safeStats.pendingTasks,
                description: 'Tugas menunggu penyelesaian'
            },
            {
                id: 3,
                icon: FaChartLine,
                iconColor: 'text-purple-600',
                bgColor: 'bg-purple-100',
                label: 'Rata-rata',
                value: safeStats.averageScore,
                description: 'Nilai rata-rata semester'
            },
            {
                id: 4,
                icon: FaCalendarCheck,
                iconColor: 'text-orange-600',
                bgColor: 'bg-orange-100',
                label: 'Kehadiran',
                value: safeStats.attendanceRate,
                description: 'Tingkat kehadiran bulan ini'
            }
        ],
        guru: [
            {
                id: 1,
                icon: FaChalkboardTeacher,
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-100',
                label: 'Hari Ini',
                value: safeStats.todaySchedule,
                description: 'Jumlah kelas hari ini'
            },
            {
                id: 2,
                icon: FaTasks,
                iconColor: 'text-green-600',
                bgColor: 'bg-green-100',
                label: 'Perlu Dinilai',
                value: safeStats.pendingTasks,
                description: 'Tugas menunggu penilaian'
            },
            {
                id: 3,
                icon: FaUserGraduate,
                iconColor: 'text-purple-600',
                bgColor: 'bg-purple-100',
                label: 'Rata-rata Kelas',
                value: safeStats.averageScore,
                description: 'Nilai rata-rata kelas'
            },
            {
                id: 4,
                icon: FaUsers,
                iconColor: 'text-orange-600',
                bgColor: 'bg-orange-100',
                label: 'Kehadiran',
                value: safeStats.attendanceRate,
                description: 'Rata-rata kehadiran siswa'
            }
        ],
        orangtua: [
            {
                id: 1,
                icon: FaBookOpen,
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-100',
                label: 'Anak Hari Ini',
                value: safeStats.todaySchedule,
                description: 'Jadwal pelajaran anak'
            },
            {
                id: 2,
                icon: FaTasks,
                iconColor: 'text-green-600',
                bgColor: 'bg-green-100',
                label: 'Tugas Anak',
                value: safeStats.pendingTasks,
                description: 'Tugas yang belum diselesaikan'
            },
            {
                id: 3,
                icon: FaChartLine,
                iconColor: 'text-purple-600',
                bgColor: 'bg-purple-100',
                label: 'Nilai Anak',
                value: safeStats.averageScore,
                description: 'Nilai rata-rata anak'
            },
            {
                id: 4,
                icon: FaCalendarCheck,
                iconColor: 'text-orange-600',
                bgColor: 'bg-orange-100',
                label: 'Kehadiran Anak',
                value: safeStats.attendanceRate,
                description: 'Tingkat kehadiran anak'
            }
        ]
    };

    const cards = cardsByRole[role] || cardsByRole.siswa;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cards.map((card, index) => (
                <div 
                    key={card.id}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200 hover-card animate-slide-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center`}>
                            <card.icon className={`${card.iconColor} text-xl`} />
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${card.bgColor} ${card.iconColor}`}>
                            {card.label}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{card.value}</h3>
                    <p className="text-neutral-600 text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    );
}