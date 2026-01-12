// resources/js/Components/SubjectDetail/SubjectHeader.jsx
import { useState } from 'react';

export default function SubjectHeader({ subject }) {
    const [subjectData] = useState({
        id: 'MATH-XII',
        name: 'Matematika',
        code: 'MAT-XII-001',
        teacher: {
            name: 'Bu Sari, S.Pd.',
            avatar: null,
            email: 'sari.matematika@sekolah.sch.id',
            phone: '081234567890',
            office: 'Guru-101'
        },
        class: 'XII IPA 1',
        schedule: [
            { day: 'Senin', time: '07:30 - 09:00', room: 'LAB-301' },
            { day: 'Rabu', time: '10:30 - 12:00', room: 'LAB-301' }
        ],
        description: 'Mata pelajaran Matematika untuk kelas XII IPA dengan fokus pada kalkulus, trigonometri, dan aljabar linear. Pembelajaran mencakup teori dan praktik penerapan matematika dalam kehidupan sehari-hari.',
        credits: 4,
        semester: 'Genap',
        academicYear: '2023/2024',
        totalStudents: 32,
        progress: 75,
        grade: 89.5,
        attendance: '95%',
        materials: 8,
        assignments: 12,
        announcements: 3
    });

    const [isTeacherInfoOpen, setIsTeacherInfoOpen] = useState(false);

    const getNextSession = () => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const today = new Date().getDay();
        const todayName = days[today];

        // Cek apakah ada kelas hari ini
        const todaySession = subjectData.schedule.find(s => s.day === todayName);
        if (todaySession) {
            return { ...todaySession, isToday: true };
        }

        // Cari sesi berikutnya
        for (let i = 1; i <= 7; i++) {
            const dayIndex = (today + i) % 7;
            const dayName = days[dayIndex];
            const session = subjectData.schedule.find(s => s.day === dayName);
            if (session) {
                return { ...session, isToday: false, daysUntil: i };
            }
        }
        return null;
    };

    const nextSession = getNextSession();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div className="flex-1">
                    <div className="flex items-start mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                            <i className="fas fa-calculator text-white text-2xl"></i>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-neutral-900 mb-1">
                                {subjectData.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm text-neutral-600">
                                    Kode: {subjectData.code}
                                </span>
                                <span className="text-sm text-neutral-600">•</span>
                                <span className="text-sm text-neutral-600">
                                    {subjectData.class} • SKS: {subjectData.credits}
                                </span>
                                <span className="text-sm text-neutral-600">•</span>
                                <span className="text-sm text-neutral-600">
                                    Semester {subjectData.semester} {subjectData.academicYear}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-neutral-700 mb-6">
                        {subjectData.description}
                    </p>

                    {/* Teacher Info */}
                    <div className="flex items-center">
                        <div className="relative">
                            <button
                                onClick={() => setIsTeacherInfoOpen(!isTeacherInfoOpen)}
                                className="flex items-center p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-3">
                                    <i className="fas fa-user-tie text-primary text-lg"></i>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-neutral-900">
                                        {subjectData.teacher.name}
                                    </div>
                                    <div className="text-sm text-neutral-600">Guru Pengampu</div>
                                </div>
                                <i className={`fas fa-chevron-${isTeacherInfoOpen ? 'up' : 'down'} ml-3 text-neutral-400`}></i>
                            </button>

                            {/* Teacher Info Dropdown */}
                            {isTeacherInfoOpen && (
                                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-neutral-200 z-10">
                                    <div className="p-4">
                                        <div className="flex items-start mb-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-3">
                                                <i className="fas fa-user-tie text-primary text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900">
                                                    {subjectData.teacher.name}
                                                </h4>
                                                <p className="text-sm text-neutral-600">Guru Matematika</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <i className="fas fa-envelope text-neutral-500 w-5 mr-3"></i>
                                                <span className="text-sm text-neutral-700">{subjectData.teacher.email}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-phone text-neutral-500 w-5 mr-3"></i>
                                                <span className="text-sm text-neutral-700">{subjectData.teacher.phone}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-door-open text-neutral-500 w-5 mr-3"></i>
                                                <span className="text-sm text-neutral-700">{subjectData.teacher.office}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-neutral-200">
                                            <div className="flex space-x-2">
                                                <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm">
                                                    <i className="fas fa-envelope mr-1"></i>
                                                    Email
                                                </button>
                                                <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 text-sm">
                                                    <i className="fas fa-calendar mr-1"></i>
                                                    Jadwal Konsultasi
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Next Session Info */}
                <div className="mt-6 lg:mt-0 lg:ml-6">
                    {nextSession ? (
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-5">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                                    <i className="fas fa-calendar-day text-primary"></i>
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-neutral-900">
                                        {nextSession.isToday ? 'Kelas Hari Ini' : `Kelas ${nextSession.day}`}
                                    </div>
                                    <div className="text-sm text-neutral-600">
                                        {nextSession.isToday ? 'Saat ini' : nextSession.daysUntil === 1 ? 'Besok' : `${nextSession.daysUntil} hari lagi`}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-neutral-500 mr-2"></i>
                                    <span className="font-medium">{nextSession.time}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-door-open text-neutral-500 mr-2"></i>
                                    <span>{nextSession.room}</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                                <i className="fas fa-door-open mr-2"></i>
                                Masuk Kelas
                            </button>
                        </div>
                    ) : (
                        <div className="bg-neutral-50 rounded-xl p-5">
                            <div className="text-center">
                                <i className="fas fa-calendar-times text-3xl text-neutral-300 mb-3"></i>
                                <p className="text-neutral-600">Tidak ada jadwal kelas</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-neutral-200">
                <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                    <div className="text-2xl font-bold text-neutral-900">{subjectData.materials}</div>
                    <div className="text-sm text-neutral-600">Materi</div>
                </div>
                <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                    <div className="text-2xl font-bold text-neutral-900">{subjectData.assignments}</div>
                    <div className="text-sm text-neutral-600">Tugas</div>
                </div>
                <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                    <div className="text-2xl font-bold text-neutral-900">{subjectData.totalStudents}</div>
                    <div className="text-sm text-neutral-600">Siswa</div>
                </div>
                <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{subjectData.grade}</div>
                    <div className="text-sm text-neutral-600">Nilai Rata-rata</div>
                </div>
                <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{subjectData.progress}%</div>
                    <div className="text-sm text-neutral-600">Progress</div>
                </div>
            </div>
        </div>
    );
}