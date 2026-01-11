// resources/js/Components/Students/StudentsHeader.jsx
import { useState } from 'react';

export default function StudentsHeader({ user }) {
    const [selectedClass, setSelectedClass] = useState('all'); // 'all', 'XII IPA 1', 'XII IPA 2', etc.
    const [academicYear, setAcademicYear] = useState('2023/2024');

    const stats = {
        totalStudents: 320,
        activeStudents: 315,
        graduated: 120,
        newStudents: 45,
        male: 165,
        female: 155
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
                        <i className="fas fa-file-import text-blue-500 mr-2"></i>
                        Import
                    </button>
                    <button
                        onClick={handleExportStudents}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-file-export text-green-500 mr-2"></i>
                        Export
                    </button>
                    <button
                        onClick={handleAddStudent}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <i className="fas fa-user-plus mr-2"></i>
                        Tambah Siswa
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                <div className="col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-users text-xl"></i>
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
                            <i className="fas fa-user-check text-green-600"></i>
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
                            <i className="fas fa-user-graduate text-blue-600"></i>
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
                            <i className="fas fa-venus text-pink-600"></i>
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
                            <i className="fas fa-mars text-blue-600"></i>
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
                    <button className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50">
                        <i className="fas fa-filter mr-1"></i>
                        Filter Lanjut
                    </button>
                    <button className="px-3 py-2 text-sm bg-neutral-100 rounded-lg hover:bg-neutral-200">
                        <i className="fas fa-sync-alt mr-1"></i>
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
}