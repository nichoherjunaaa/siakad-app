// resources/js/Components/Classes/ClassResources.jsx
import { useState } from 'react';

export default function ClassResources() {
    const [resources] = useState([
        {
            id: 1,
            class: 'Matematika',
            title: 'Modul Integral Tak Tentu',
            type: 'pdf',
            size: '2.5 MB',
            uploadDate: '5 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            downloads: 42,
            category: 'materials'
        },
        {
            id: 2,
            class: 'Fisika',
            title: 'Video Praktikum Hukum Newton',
            type: 'video',
            size: '45 MB',
            uploadDate: '4 Des 2023',
            uploader: 'Pak Budi, M.Pd.',
            downloads: 38,
            category: 'lab'
        },
        {
            id: 3,
            class: 'Biologi',
            title: 'Slide Presentasi Sistem Pencernaan',
            type: 'ppt',
            size: '8.2 MB',
            uploadDate: '3 Des 2023',
            uploader: 'Bu Rina, M.Si.',
            downloads: 51,
            category: 'presentation'
        },
        {
            id: 4,
            class: 'Bahasa Inggris',
            title: 'Worksheet Reading Comprehension',
            type: 'doc',
            size: '1.8 MB',
            uploadDate: '2 Des 2023',
            uploader: 'Bu Maya, S.Pd.',
            downloads: 29,
            category: 'assignment'
        },
        {
            id: 5,
            class: 'Kimia',
            title: 'Lembar Kerja Stoikiometri',
            type: 'pdf',
            size: '3.1 MB',
            uploadDate: '1 Des 2023',
            uploader: 'Bu Lisa, S.Si.',
            downloads: 34,
            category: 'worksheet'
        }
    ]);

    const [filterClass, setFilterClass] = useState('all');
    const [filterType, setFilterType] = useState('all');

    const getFileIcon = (type) => {
        const icons = {
            pdf: 'fas fa-file-pdf text-red-500',
            video: 'fas fa-file-video text-purple-500',
            ppt: 'fas fa-file-powerpoint text-orange-500',
            doc: 'fas fa-file-word text-blue-500',
            excel: 'fas fa-file-excel text-green-500',
            image: 'fas fa-file-image text-yellow-500',
            zip: 'fas fa-file-archive text-gray-500'
        };
        return icons[type] || 'fas fa-file text-gray-500';
    };

    const getCategoryColor = (category) => {
        const colors = {
            materials: 'bg-blue-100 text-blue-700 border-blue-200',
            lab: 'bg-green-100 text-green-700 border-green-200',
            presentation: 'bg-orange-100 text-orange-700 border-orange-200',
            assignment: 'bg-purple-100 text-purple-700 border-purple-200',
            worksheet: 'bg-yellow-100 text-yellow-700 border-yellow-200'
        };
        return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getCategoryLabel = (category) => {
        const labels = {
            materials: 'Materi',
            lab: 'Praktikum',
            presentation: 'Presentasi',
            assignment: 'Tugas',
            worksheet: 'Lembar Kerja'
        };
        return labels[category] || category;
    };

    const handleDownload = (resource) => {
        console.log('Download resource:', resource);
        // Implement download functionality
    };

    const handlePreview = (resource) => {
        console.log('Preview resource:', resource);
        // Implement preview functionality
    };

    const filteredResources = resources.filter(resource => {
        if (filterClass !== 'all' && resource.class !== filterClass) return false;
        if (filterType !== 'all' && resource.type !== filterType) return false;
        return true;
    });

    const classes = [...new Set(resources.map(r => r.class))];
    const fileTypes = [...new Set(resources.map(r => r.type))];

    const stats = {
        totalFiles: resources.length,
        totalSize: '60.6 MB',
        mostDownloads: 51,
        recentUploads: 3
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Resources Terbaru</h3>
                <button className="text-sm text-primary hover:text-primary-dark">
                    Lihat Semua
                </button>
            </div>

            {/* Filters */}
            <div className="flex space-x-4 mb-6">
                <select
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                    className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                    <option value="all">Semua Kelas</option>
                    {classes.map(className => (
                        <option key={className} value={className}>{className}</option>
                    ))}
                </select>
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                    <option value="all">Semua Tipe</option>
                    {fileTypes.map(type => (
                        <option key={type} value={type}>
                            {type.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

            {/* Resources List */}
            <div className="space-y-4">
                {filteredResources.map((resource) => (
                    <div key={resource.id} className="border border-neutral-200 rounded-xl p-4 hover:bg-neutral-50">
                        <div className="flex items-start">
                            {/* File Icon */}
                            <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mr-4">
                                <i className={`${getFileIcon(resource.type)} text-2xl`}></i>
                            </div>

                            {/* Resource Info */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-neutral-900">
                                        {resource.title}
                                    </h4>
                                    <span className="text-xs text-neutral-500">
                                        {resource.uploadDate}
                                    </span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-sm font-medium text-neutral-700 mr-3">
                                        {resource.class}
                                    </span>
                                    <span className={`px-2 py-1 rounded-md text-xs ${getCategoryColor(resource.category)}`}>
                                        {getCategoryLabel(resource.category)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-neutral-600">
                                    <div className="flex items-center">
                                        <i className="fas fa-user-tie mr-1"></i>
                                        <span className="mr-4">{resource.uploader}</span>
                                        <i className="fas fa-download mr-1"></i>
                                        <span>{resource.downloads} download</span>
                                    </div>
                                    <span>{resource.size}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                onClick={() => handlePreview(resource)}
                                className="px-3 py-1 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                            >
                                <i className="fas fa-eye mr-1"></i>
                                Preview
                            </button>
                            <button
                                onClick={() => handleDownload(resource)}
                                className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark"
                            >
                                <i className="fas fa-download mr-1"></i>
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredResources.length === 0 && (
                <div className="text-center py-8">
                    <i className="fas fa-folder-open text-4xl text-neutral-300 mb-4"></i>
                    <p className="text-neutral-600">Tidak ada resources</p>
                    {(filterClass !== 'all' || filterType !== 'all') && (
                        <button 
                            onClick={() => {
                                setFilterClass('all');
                                setFilterType('all');
                            }}
                            className="mt-2 text-sm text-primary hover:text-primary-dark"
                        >
                            Reset Filter
                        </button>
                    )}
                </div>
            )}

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                        <div className="text-xl font-bold text-neutral-900">{stats.totalFiles}</div>
                        <div className="text-sm text-neutral-600">Total File</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                        <div className="text-xl font-bold text-neutral-900">{stats.totalSize}</div>
                        <div className="text-sm text-neutral-600">Total Ukuran</div>
                    </div>
                </div>
            </div>
        </div>
    );
}