// resources/js/Components/Students/StudentsHeader.jsx
import { useState } from 'react';
import { FaFile, FaFileExport, FaFilter, FaMars, FaSyncAlt, FaUserCheck, FaUserGraduate, FaUserPlus, FaUsers, FaVenus } from 'react-icons/fa';

export default function StudentsHeader({ user, students }) {
    const [selectedClass, setSelectedClass] = useState('all'); // 'all', 'XII IPA 1', 'XII IPA 2', etc.
    const [academicYear, setAcademicYear] = useState('2023/2024');

    const studentsCount = students.length

    const activeStudents = students.filter(student=>student.status === 'active').length
    const maleStudents = students.filter(student=>student.user.gender === 'male').length
    const femaleStudents = students.filter(student=>student.user.gender === 'female').length
    const graduatedStudents = students.filter(student=>student.status === 'graduated').length

    const stats = {
        totalStudents: studentsCount,
        activeStudents: activeStudents,
        graduated: 120,
        newStudents: 45,
        male: maleStudents,
        female: femaleStudents
    };

    const classes = [
        'XII IPA 1',
        'XII IPA 2',
        'XII IPA 3',
        'XII IPS 1',
        'XII IPS 2',
        'XI IPA 1',
        'XI IPA 2',
        'XI IPS 1',
        'XI IPS 2'
    ];

    const academicYears = [
        '2023/2024',
        '2022/2023',
        '2021/2022',
        '2020/2021'
    ];

    const handleAddStudent = () => {
        console.log('Add new student');
        // Implement add student modal
    };

    const handleImportStudents = () => {
        console.log('Import students');
        // Implement import functionality
    };

    const handleExportStudents = () => {
        console.log('Export students');
        // Implement export functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Data Siswa
                    </h1>
                    <p className="text-neutral-600">
                        Kelola data siswa sekolah • Tahun Ajaran {academicYear}
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={handleImportStudents}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <FaFile className="text-blue-500 mr-2" />
                        Import
                    </button>
                    <button
                        onClick={handleExportStudents}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <FaFileExport className="text-green-500 mr-2" />
                        Export
                    </button>
                    <button
                        onClick={handleAddStudent}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <FaUserPlus className="mr-2" />
                        Tambah Siswa
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                <div className="col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                            <FaUsers className="text-xl" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stats.totalStudents}</div>
                            <div className="text-sm opacity-90">Total Siswa</div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <FaUserCheck className="text-green-600" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.activeStudents}
                            </div>
                            <div className="text-sm text-neutral-600">Aktif</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <FaUserGraduate className="text-blue-600" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.graduated}
                            </div>
                            <div className="text-sm text-neutral-600">Lulus</div>
                        </div>
                    </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                            <FaVenus className="text-pink-600" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.female}
                            </div>
                            <div className="text-sm text-neutral-600">Perempuan</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <FaMars className="text-blue-600" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.male}
                            </div>
                            <div className="text-sm text-neutral-600">Laki-laki</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                    {/* Class Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Filter Kelas
                        </label>
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48"
                        >
                            <option value="all">Semua Kelas</option>
                            {classes.map(className => (
                                <option key={className} value={className}>{className}</option>
                            ))}
                        </select>
                    </div>

                    {/* Academic Year Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Tahun Ajaran
                        </label>
                        <select
                            value={academicYear}
                            onChange={(e) => setAcademicYear(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-40"
                        >
                            {academicYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Status
                        </label>
                        <select
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-40"
                        >
                            <option value="all">Semua Status</option>
                            <option value="active">Aktif</option>
                            <option value="graduated">Lulus</option>
                            <option value="transferred">Pindah</option>
                            <option value="dropout">Drop Out</option>
                        </select>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 flex items-center text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50">
                        <FaFilter className="mr-1" />
                        Filter
                    </button>
                    <button className="px-3 flex py-2 text-sm items-center bg-neutral-100 rounded-lg hover:bg-neutral-200">
                        <FaSyncAlt className="mr-1" />
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
}