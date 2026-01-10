// resources/js/Components/Materials/MaterialsFilter.jsx
import { useState } from 'react';

export default function MaterialsFilter() {
    const [filters, setFilters] = useState({
        subject: 'all',
        teacher: 'all',
        type: 'all',
        date: 'all',
        downloaded: 'all'
    });

    const subjects = [
        'Matematika', 'Fisika', 'Kimia', 'Biologi', 
        'Bahasa Inggris', 'Bahasa Indonesia', 'Sejarah', 'PKN'
    ];

    const teachers = [
        'Bu Sari, S.Pd.', 'Pak Budi, M.Pd.', 'Bu Lisa, S.Si.',
        'Bu Rina, M.Si.', 'Bu Maya, S.Pd.', 'Pak Anton, M.Pd.'
    ];

    const fileTypes = [
        { id: 'pdf', label: 'PDF', icon: 'fas fa-file-pdf' },
        { id: 'doc', label: 'Word', icon: 'fas fa-file-word' },
        { id: 'ppt', label: 'PowerPoint', icon: 'fas fa-file-powerpoint' },
        { id: 'video', label: 'Video', icon: 'fas fa-file-video' },
        { id: 'image', label: 'Gambar', icon: 'fas fa-file-image' },
        { id: 'other', label: 'Lainnya', icon: 'fas fa-file' }
    ];

    const dateFilters = [
        { id: 'today', label: 'Hari Ini' },
        { id: 'week', label: 'Minggu Ini' },
        { id: 'month', label: 'Bulan Ini' },
        { id: 'semester', label: 'Semester Ini' }
    ];

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    const handleResetFilters = () => {
        setFilters({
            subject: 'all',
            teacher: 'all',
            type: 'all',
            date: 'all',
            downloaded: 'all'
        });
    };

    const getActiveFilterCount = () => {
        let count = 0;
        Object.values(filters).forEach(value => {
            if (value !== 'all') count++;
        });
        return count;
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-neutral-900">Filter Materi</h3>
                <div className="flex items-center space-x-3">
                    {getActiveFilterCount() > 0 && (
                        <span className="text-sm text-neutral-600">
                            {getActiveFilterCount()} filter aktif
                        </span>
                    )}
                    <button
                        onClick={handleResetFilters}
                        className="text-sm text-primary hover:underline"
                    >
                        Reset Filter
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                        {subjects.map(subject => (
                            <option key={subject} value={subject.toLowerCase()}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Teacher Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Guru Pengajar
                    </label>
                    <select
                        value={filters.teacher}
                        onChange={(e) => handleFilterChange('teacher', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Guru</option>
                        {teachers.map(teacher => (
                            <option key={teacher} value={teacher.toLowerCase()}>
                                {teacher}
                            </option>
                        ))}
                    </select>
                </div>

                {/* File Type Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Jenis File
                    </label>
                    <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Jenis</option>
                        {fileTypes.map(type => (
                            <option key={type.id} value={type.id}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Periode
                    </label>
                    <select
                        value={filters.date}
                        onChange={(e) => handleFilterChange('date', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Waktu</option>
                        {dateFilters.map(date => (
                            <option key={date.id} value={date.id}>
                                {date.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Downloaded Filter */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Status
                    </label>
                    <select
                        value={filters.downloaded}
                        onChange={(e) => handleFilterChange('downloaded', e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Semua Status</option>
                        <option value="downloaded">Sudah Didownload</option>
                        <option value="not-downloaded">Belum Didownload</option>
                    </select>
                </div>
            </div>

            {/* File Type Quick Filter */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="text-sm font-medium text-neutral-700 mb-3">Filter Cepat Jenis File</h4>
                <div className="flex flex-wrap gap-2">
                    {fileTypes.map(type => (
                        <button
                            key={type.id}
                            onClick={() => handleFilterChange('type', type.id)}
                            className={`flex items-center px-3 py-2 rounded-lg border ${filters.type === type.id
                                    ? 'bg-primary text-white border-primary'
                                    : 'border-neutral-300 hover:bg-neutral-50'
                                }`}
                        >
                            <i className={`${type.icon} mr-2 ${filters.type === type.id ? 'text-white' : getFileTypeColor(type.id)}`}></i>
                            <span className="text-sm">{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Filters Display */}
            {getActiveFilterCount() > 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-200">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-600">Filter aktif:</span>
                        {Object.entries(filters).map(([key, value]) => {
                            if (value === 'all') return null;
                            
                            let label = value;
                            if (key === 'subject') label = subjects.find(s => s.toLowerCase() === value) || value;
                            if (key === 'teacher') label = teachers.find(t => t.toLowerCase().includes(value)) || value;
                            if (key === 'type') label = fileTypes.find(t => t.id === value)?.label || value;
                            if (key === 'date') label = dateFilters.find(d => d.id === value)?.label || value;
                            if (key === 'downloaded') label = value === 'downloaded' ? 'Sudah Didownload' : 'Belum Didownload';

                            return (
                                <span key={key} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                    {getFilterLabel(key)}: {label}
                                    <button
                                        onClick={() => handleFilterChange(key, 'all')}
                                        className="ml-1 text-blue-500 hover:text-blue-700"
                                    >
                                        ×
                                    </button>
                                </span>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

function getFilterLabel(key) {
    const labels = {
        subject: 'Mapel',
        teacher: 'Guru',
        type: 'Jenis',
        date: 'Periode',
        downloaded: 'Status'
    };
    return labels[key] || key;
}

function getFileTypeColor(type) {
    const colors = {
        pdf: 'text-red-500',
        doc: 'text-blue-500',
        ppt: 'text-orange-500',
        video: 'text-purple-500',
        image: 'text-green-500',
        other: 'text-gray-500'
    };
    return colors[type] || 'text-gray-500';
}