// resources/js/Components/SubjectDetail/SubjectHeader.jsx
import { useState, useEffect } from 'react';
import { FaBook, FaUserTie } from 'react-icons/fa';

export default function SubjectHeader({ subject }) {
    console.log('Subject data:', subject);

    const [nextSession, setNextSession] = useState(null);
    const [isTeacherInfoOpen, setIsTeacherInfoOpen] = useState(false);

    // Format data untuk digunakan di komponen
    const subjectData = subject ? {
        id: subject.subject_code || '',
        name: subject.name || '',
        code: subject.subject_code || '',
        teacher: subject.teachers?.[0] || {
            name: 'Belum ditentukan',
            avatar: null,
            email: '',
            phone: '',
            office: '',
            status: 'unknown'
        },
        credits: 0, // Tambahkan dari data jika ada
        semester: '', // Tambahkan dari data jika ada
        academicYear: '', // Tambahkan dari data jika ada
        totalStudents: 0, // Tambahkan dari data jika ada
        progress: 0, // Tambahkan dari data jika ada
        grade: subject.minimum_passing_grade || 0,
        materials: 0, // Tambahkan dari data jika ada
        assignments: 0, // Tambahkan dari data jika ada
        announcements: 0 // Tambahkan dari data jika ada
    } : null;

    // Effect untuk menghitung next session
    useEffect(() => {
        if (subjectData) {
            const session = getNextSession();
            setNextSession(session);
        }
    }, [subjectData]);

    const getNextSession = () => {
        // Jika tidak ada data jadwal, return null
        // Anda perlu menambahkan data schedule ke subject jika ada
        if (!subject || !subject.schedule) {
            return null;
        }

        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const today = new Date().getDay();
        const todayName = days[today];

        // Cek apakah ada kelas hari ini
        const todaySession = subject.schedule.find(s => s.day === todayName);
        if (todaySession) {
            return { ...todaySession, isToday: true };
        }

        // Cari sesi berikutnya
        for (let i = 1; i <= 7; i++) {
            const dayIndex = (today + i) % 7;
            const dayName = days[dayIndex];
            const session = subject.schedule.find(s => s.day === dayName);
            if (session) {
                return { ...session, isToday: false, daysUntil: i };
            }
        }
        return null;
    };

    if (!subjectData) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                <div className="text-center py-8">
                    <FaBook className='text-4xl text-neutral-300 mb-4' />
                    <p className="text-neutral-600">Data mata pelajaran tidak ditemukan</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-2">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div className="flex-1">
                    <div className="flex items-start mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                            <FaBook className="text-white text-4xl" />
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
                                    Nilai Minimum: {subjectData.grade}
                                </span>
                                {subjectData.credits > 0 && (
                                    <>
                                        <span className="text-sm text-neutral-600">•</span>
                                        <span className="text-sm text-neutral-600">
                                            SKS: {subjectData.credits}
                                        </span>
                                    </>
                                )}
                                {subjectData.semester && (
                                    <>
                                        <span className="text-sm text-neutral-600">•</span>
                                        <span className="text-sm text-neutral-600">
                                            Semester {subjectData.semester} {subjectData.academicYear}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Teacher Info */}
                    <div className="flex items-center">
                        <div className="relative">
                            <button
                                onClick={() => setIsTeacherInfoOpen(!isTeacherInfoOpen)}
                                className="flex items-center p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-3">
                                    <FaUserTie className="text-primary text-lg" />
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-neutral-900">
                                        {subjectData.teacher.full_name || subjectData.teacher.name}
                                    </div>
                                    <div className="text-sm text-neutral-600">
                                        Guru Pengampu
                                    </div>
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
                                                    {subjectData.teacher.full_name || subjectData.teacher.name}
                                                </h4>
                                                <p className="text-sm text-neutral-600">
                                                    {subjectData.name} • {subjectData.teacher.status || 'Aktif'}
                                                </p>
                                                <p className="text-sm text-neutral-600">
                                                    NIP: {subjectData.teacher.employee_number || 'Tidak tersedia'}
                                                </p>
                                            </div>
                                        </div>
                                        {subjectData.teacher.email && (
                                            <div className="space-y-3">
                                                <div className="flex items-center">
                                                    <i className="fas fa-envelope text-neutral-500 w-5 mr-3"></i>
                                                    <span className="text-sm text-neutral-700">{subjectData.teacher.email}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <i className="fas fa-phone text-neutral-500 w-5 mr-3"></i>
                                                    <span className="text-sm text-neutral-700">{subjectData.teacher.phone || 'Tidak tersedia'}</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="mt-4 pt-4 border-t border-neutral-200">
                                            <div className="flex space-x-2">
                                                {subjectData.teacher.email && (
                                                    <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm">
                                                        <i className="fas fa-envelope mr-1"></i>
                                                        Email
                                                    </button>
                                                )}
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
            </div>

            {/* Stats Cards - Sembunyikan jika data tidak tersedia */}
            {(subjectData.materials > 0 || subjectData.assignments > 0 || subjectData.totalStudents > 0 || subjectData.grade > 0 || subjectData.progress > 0) && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-neutral-200">
                    {subjectData.materials > 0 && (
                        <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                            <div className="text-2xl font-bold text-neutral-900">{subjectData.materials}</div>
                            <div className="text-sm text-neutral-600">Materi</div>
                        </div>
                    )}
                    {subjectData.assignments > 0 && (
                        <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                            <div className="text-2xl font-bold text-neutral-900">{subjectData.assignments}</div>
                            <div className="text-sm text-neutral-600">Tugas</div>
                        </div>
                    )}
                    {subjectData.totalStudents > 0 && (
                        <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                            <div className="text-2xl font-bold text-neutral-900">{subjectData.totalStudents}</div>
                            <div className="text-sm text-neutral-600">Siswa</div>
                        </div>
                    )}
                    {subjectData.grade > 0 && (
                        <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                            <div className="text-2xl font-bold text-green-600">{subjectData.grade}</div>
                            <div className="text-sm text-neutral-600">Nilai Minimum</div>
                        </div>
                    )}
                    {subjectData.progress > 0 && (
                        <div className="text-center p-3 bg-white border border-neutral-200 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600">{subjectData.progress}%</div>
                            <div className="text-sm text-neutral-600">Progress</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}