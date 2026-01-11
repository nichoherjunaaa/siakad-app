// resources/js/Components/Classes/ClassesHeader.jsx
import { useState } from 'react';

export default function ClassesHeader({ user }) {
    const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'compact'
    const [sortBy, setSortBy] = useState('name'); // 'name', 'time', 'progress', 'grade'
    const [filterSubject, setFilterSubject] = useState('all');

    const stats = {
        totalClasses: 10,
        activeClasses: 8,
        completedClasses: 2,
        attendanceRate: '95%',
        averageGrade: 85.5,
        upcomingClasses: 3
    };

    const handleJoinClass = () => {
        console.log('Join new class');
        // Implement join class modal
    };

    const handleCreateClass = () => {
        console.log('Create new class');
        // Implement create class modal (for teachers)
    };

    const handleExportSchedule = () => {
        console.log('Export schedule');
        // Implement export functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Kelas & Mata Pelajaran
                    </h1>
                    <p className="text-neutral-600">
                        {user.class} • Tahun Ajaran {user.academicYear} • Semester {user.semester}
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={handleExportSchedule}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-calendar-export text-blue-500 mr-2"></i>
                        Export Jadwal
                    </button>
                    <button
                        onClick={handleJoinClass}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-sign-in-alt text-green-500 mr-2"></i>
                        Gabung Kelas
                    </button>
                    {user.role === 'guru' && (
                        <button
                            onClick={handleCreateClass}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Buat Kelas
                        </button>
                    )}
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
                            <div className="text-2xl font-bold">{stats.totalClasses}</div>
                            <div className="text-sm opacity-90">Total Mata Pelajaran</div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-check-circle text-green-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.activeClasses}
                            </div>
                            <div className="text-sm text-neutral-600">Aktif</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-user-check text-blue-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.attendanceRate}
                            </div>
                            <div className="text-sm text-neutral-600">Kehadiran</div>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-star text-orange-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.averageGrade}
                            </div>
                            <div className="text-sm text-neutral-600">Rata-rata Nilai</div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-clock text-purple-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.upcomingClasses}
                            </div>
                            <div className="text-sm text-neutral-600">Kelas Mendatang</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                    {/* Subject Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Filter Mata Pelajaran
                        </label>
                        <select
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="all">Semua Mapel</option>
                            <option value="mathematics">Matematika</option>
                            <option value="physics">Fisika</option>
                            <option value="chemistry">Kimia</option>
                            <option value="biology">Biologi</option>
                            <option value="english">Bahasa Inggris</option>
                            <option value="indonesian">Bahasa Indonesia</option>
                            <option value="history">Sejarah</option>
                        </select>
                    </div>

                    {/* Sort By */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Urutkan
                        </label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="name">Nama A-Z</option>
                            <option value="time">Waktu Kelas</option>
                            <option value="progress">Progress</option>
                            <option value="grade">Nilai Tertinggi</option>
                            <option value="teacher">Guru</option>
                        </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-600">Tampilan:</span>
                        <div className="flex bg-neutral-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-th-large mr-1"></i>
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-list mr-1"></i>
                                List
                            </button>
                            <button
                                onClick={() => setViewMode('compact')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'compact' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-compress mr-1"></i>
                                Compact
                            </button>
                        </div>
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