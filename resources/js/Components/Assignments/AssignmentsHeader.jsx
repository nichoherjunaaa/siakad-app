// resources/js/Components/Assignments/AssignmentsHeader.jsx
import { useState } from 'react';

export default function AssignmentsHeader({ user }) {
    const [filterPeriod, setFilterPeriod] = useState('all');
    const [viewMode, setViewMode] = useState('list'); 
    const [sortBy, setSortBy] = useState('deadline');

    const stats = {
        total: 15,
        completed: 9,
        pending: 4,
        overdue: 2,
        completionRate: '60%',
        averageScore: 85,
        upcomingDeadlines: 3
    };

    const handleCreateAssignment = () => {
        console.log('Create new assignment');
        // Implement create assignment modal
    };

    const handleQuickAdd = () => {
        console.log('Quick add assignment');
        // Implement quick add functionality
    };

    const handleImport = () => {
        console.log('Import assignments');
        // Implement import functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Tugas & Assignment
                    </h1>
                    <p className="text-neutral-600">
                        Kelola tugas dan deadline {user.class} • {user.academicYear}
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={handleImport}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-file-import text-blue-500 mr-2"></i>
                        Import
                    </button>
                    <button
                        onClick={handleQuickAdd}
                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                    >
                        <i className="fas fa-plus-circle text-green-500 mr-2"></i>
                        Quick Add
                    </button>
                    <button
                        onClick={handleCreateAssignment}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <i className="fas fa-plus mr-2"></i>
                        Tugas Baru
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-6">
                <div className="col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-tasks text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {stats.completed}/{stats.total}
                            </div>
                            <div className="text-sm opacity-90">Tugas Selesai</div>
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
                                {stats.completionRate}
                            </div>
                            <div className="text-sm text-neutral-600">Completion Rate</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-clock text-blue-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.pending}
                            </div>
                            <div className="text-sm text-neutral-600">Belum Selesai</div>
                        </div>
                    </div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-exclamation-triangle text-red-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.overdue}
                            </div>
                            <div className="text-sm text-neutral-600">Terlambat</div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-calendar-day text-purple-600"></i>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-neutral-900">
                                {stats.upcomingDeadlines}
                            </div>
                            <div className="text-sm text-neutral-600">Deadline Dekat</div>
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
                                {stats.averageScore}
                            </div>
                            <div className="text-sm text-neutral-600">Rata-rata Nilai</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                    {/* Period Filter */}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Periode
                        </label>
                        <select
                            value={filterPeriod}
                            onChange={(e) => setFilterPeriod(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="all">Semua Tugas</option>
                            <option value="week">Minggu Ini</option>
                            <option value="month">Bulan Ini</option>
                            <option value="overdue">Terlambat</option>
                            <option value="upcoming">Akan Datang</option>
                            <option value="completed">Selesai</option>
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
                            <option value="deadline">Deadline</option>
                            <option value="subject">Mata Pelajaran</option>
                            <option value="status">Status</option>
                            <option value="priority">Prioritas</option>
                            <option value="created">Tanggal Dibuat</option>
                        </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-600">Tampilan:</span>
                        <div className="flex bg-neutral-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-list mr-1"></i>
                                List
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-th-large mr-1"></i>
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode('calendar')}
                                className={`px-3 py-1 rounded-md ${viewMode === 'calendar' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                            >
                                <i className="fas fa-calendar-alt mr-1"></i>
                                Kalender
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
                        <i className="fas fa-cog mr-1"></i>
                        Pengaturan
                    </button>
                </div>
            </div>
        </div>
    );
}