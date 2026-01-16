// resources/js/Components/Grades/GradesHeader.jsx
import { useState } from 'react';
import { FaCalendarCheck, FaChartBar, FaChartLine, FaFileExcel, FaFilePdf, FaPrint, FaTrophy } from 'react-icons/fa';

export default function GradesHeader({ user }) {
    const [academicYear, setAcademicYear] = useState('2023/2024');
    const [semester, setSemester] = useState('genap');
    const [viewMode, setViewMode] = useState('detailed'); // 'detailed' or 'summary'

    const academicYears = [
        '2023/2024',
        '2022/2023',
        '2021/2022',
        '2020/2021'
    ];

    const semesters = [
        { id: 'ganjil', label: 'Ganjil' },
        { id: 'genap', label: 'Genap' }
    ];

    const overallStats = {
        average: 85.5,
        rank: 5,
        totalStudents: 32,
        improvement: '+2.3%',
        attendance: '95%',
        completedAssignments: '42/45'
    };

    const handleExport = (format) => {
        console.log('Export grades as:', format);
        // Implement export functionality
    };

    const handlePrint = () => {
        console.log('Print grades');
        window.print();
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <p className="text-neutral-600">
                        {user.class} • Tahun Ajaran {user.academicYear} • Semester {user.semester}
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={() => handleExport('pdf')}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <FaFilePdf className='text-red-500 mr-2' />
                        PDF
                    </button>
                    <button
                        onClick={() => handleExport('excel')}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <FaFileExcel className='text-green-500 mr-2' />
                        Excel
                    </button>
                    <button
                        onClick={handlePrint}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <FaPrint className='mr-2'/>
                        Cetak
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                <div className="col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                            <FaChartLine className='text-xl'/>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{overallStats.average}</div>
                            <div className="text-sm opacity-90">Nilai Rata-rata</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <FaTrophy className='text-blue-600'/>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                #{overallStats.rank}
                            </div>
                            <div className="text-sm text-neutral-600">Peringkat</div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <FaChartBar className='text-green-600'/>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {overallStats.improvement}
                            </div>
                            <div className="text-sm text-neutral-600">Peningkatan</div>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <FaCalendarCheck className='text-orange-600'/>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {overallStats.attendance}
                            </div>
                            <div className="text-sm text-neutral-600">Kehadiran</div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-tasks text-purple-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {overallStats.completedAssignments}
                            </div>
                            <div className="text-sm text-neutral-600">Tugas Selesai</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                    {/* Academic Year Selector */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Tahun Ajaran
                        </label>
                        <select
                            value={academicYear}
                            onChange={(e) => setAcademicYear(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {academicYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Semester Selector */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Semester
                        </label>
                        <select
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {semesters.map(sem => (
                                <option key={sem.id} value={sem.id}>{sem.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-sm text-neutral-600">
                    <div className="flex items-center">
                        <i className="fas fa-user-tie mr-2 text-primary"></i>
                        <span>Wali Kelas: {user.homeroomTeacher}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}