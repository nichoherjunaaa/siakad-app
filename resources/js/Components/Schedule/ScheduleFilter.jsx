// resources/js/Components/Schedule/ScheduleFilter.jsx
import { useState } from 'react';

export default function ScheduleFilter() {
    const [filters, setFilters] = useState({
        class: 'all',
        teacher: 'all',
        subject: 'all',
        day: 'all',
        showEmpty: false
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    const handleResetFilters = () => {
        setFilters({
            class: 'all',
            teacher: 'all',
            subject: 'all',
            day: 'all',
            showEmpty: false
        });
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-neutral-900">Filter Jadwal</h3>
                <button
                    onClick={handleResetFilters}
                    className="text-sm text-primary hover:underline"
                >
                    Reset Filter
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Class Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Kelas
                    </label>
                    <select
                        value={filters.class}
                        onChange={(e) => handleFilterChange('class', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Kelas</option>
                        <option value="xii-ipa1">XII IPA 1</option>
                        <option value="xii-ipa2">XII IPA 2</option>
                        <option value="xii-ips1">XII IPS 1</option>
                        <option value="xii-ips2">XII IPS 2</option>
                    </select>
                </div>

                {/* Teacher Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Guru
                    </label>
                    <select
                        value={filters.teacher}
                        onChange={(e) => handleFilterChange('teacher', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Guru</option>
                        <option value="sari">Bu Sari</option>
                        <option value="budi">Pak Budi</option>
                        <option value="lisa">Bu Lisa</option>
                        <option value="maya">Bu Maya</option>
                    </select>
                </div>

                {/* Subject Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Mata Pelajaran
                    </label>
                    <select
                        value={filters.subject}
                        onChange={(e) => handleFilterChange('subject', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Pelajaran</option>
                        <option value="matematika">Matematika</option>
                        <option value="fisika">Fisika</option>
                        <option value="kimia">Kimia</option>
                        <option value="biologi">Biologi</option>
                        <option value="inggris">Bahasa Inggris</option>
                    </select>
                </div>

                {/* Day Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Hari
                    </label>
                    <select
                        value={filters.day}
                        onChange={(e) => handleFilterChange('day', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Hari</option>
                        <option value="monday">Senin</option>
                        <option value="tuesday">Selasa</option>
                        <option value="wednesday">Rabu</option>
                        <option value="thursday">Kamis</option>
                        <option value="friday">Jumat</option>
                        <option value="saturday">Sabtu</option>
                    </select>
                </div>

                {/* Show Empty Slots */}
                <div className="flex items-end">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.showEmpty}
                            onChange={(e) => handleFilterChange('showEmpty', e.target.checked)}
                            className="rounded border-neutral-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-neutral-700">Tampilkan slot kosong</span>
                    </label>
                </div>
            </div>

            {/* Active Filters */}
            {(filters.class !== 'all' || filters.teacher !== 'all' || filters.subject !== 'all' || filters.day !== 'all') && (
                <div className="mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-600">Filter aktif:</span>
                        {filters.class !== 'all' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                Kelas: {filters.class}
                                <button
                                    onClick={() => handleFilterChange('class', 'all')}
                                    className="ml-1 text-blue-500 hover:text-blue-700"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                        {filters.teacher !== 'all' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                Guru: {filters.teacher}
                                <button
                                    onClick={() => handleFilterChange('teacher', 'all')}
                                    className="ml-1 text-green-500 hover:text-green-700"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                        {filters.subject !== 'all' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                                Mapel: {filters.subject}
                                <button
                                    onClick={() => handleFilterChange('subject', 'all')}
                                    className="ml-1 text-purple-500 hover:text-purple-700"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                        {filters.day !== 'all' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-700">
                                Hari: {filters.day}
                                <button
                                    onClick={() => handleFilterChange('day', 'all')}
                                    className="ml-1 text-orange-500 hover:text-orange-700"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}