// resources/js/Components/Teachers/TeachersHeader.jsx
import { useState } from 'react';

export default function TeachersHeader({ user }) {
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('active');

    const stats = {
        totalTeachers: 48,
        activeTeachers: 45,
        onLeave: 3,
        certified: 32,
        male: 25,
        female: 23,
        averageExperience: '8.5 tahun'
    };

    const departments = [
        'Matematika',
        'Fisika',
        'Kimia',
        'Biologi',
        'Bahasa Indonesia',
        'Bahasa Inggris',
        'Sejarah',
        'Geografi',
        'Ekonomi',
        'Seni Budaya',
        'Olahraga',
        'BK',
        'Administrasi'
    ];

    const handleAddTeacher = () => {
        console.log('Add new teacher');
        // Implement add teacher modal
    };

    const handleImportTeachers = () => {
        console.log('Import teachers');
        // Implement import functionality
    };

    const handleExportTeachers = () => {
        console.log('Export teachers');
        // Implement export functionality
    };

    const handleScheduleMeeting = () => {
        console.log('Schedule meeting');
        // Implement schedule meeting functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Data Guru & Staff
                    </h1>
                    <p className="text-neutral-600">
                        Kelola data pengajar dan staff sekolah • Tahun Ajaran {user.academicYear}
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={handleImportTeachers}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-file-import text-blue-500 mr-2"></i>
                        Import
                    </button>
                    <button
                        onClick={handleExportTeachers}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-file-export text-green-500 mr-2"></i>
                        Export
                    </button>
                    <button
                        onClick={handleScheduleMeeting}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-calendar-plus text-purple-500 mr-2"></i>
                        Rapat
                    </button>
                    <button
                        onClick={handleAddTeacher}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <i className="fas fa-user-plus mr-2"></i>
                        Tambah Guru
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                <div className="col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-chalkboard-teacher text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stats.totalTeachers}</div>
                            <div className="text-sm opacity-90">Total Guru & Staff</div>
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
                                {stats.activeTeachers}
                            </div>
                            <div className="text-sm text-neutral-600">Aktif</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-award text-blue-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.certified}
                            </div>
                            <div className="text-sm text-neutral-600">Bersertifikat</div>
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
                    {/* Department Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Filter Bidang
                        </label>
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48"
                        >
                            <option value="all">Semua Bidang</option>
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Status
                        </label>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-40"
                        >
                            <option value="all">Semua Status</option>
                            <option value="active">Aktif</option>
                            <option value="onLeave">Cuti</option>
                            <option value="retired">Pensiun</option>
                        </select>
                    </div>

                    {/* Experience Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Pengalaman
                        </label>
                        <select
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-40"
                        >
                            <option value="all">Semua</option>
                            <option value="junior">1-5 tahun</option>
                            <option value="mid">6-10 tahun</option>
                            <option value="senior">11+ tahun</option>
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