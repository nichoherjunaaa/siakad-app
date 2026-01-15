// resources/js/Components/SubjectDetail/MaterialsSection.jsx
import { useState } from 'react';

export default function MaterialsSection() {
    const [materials] = useState([
        {
            id: 1,
            title: 'Pengantar Kalkulus - Limit dan Turunan',
            type: 'pdf',
            size: '2.5 MB',
            uploadDate: '5 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            description: 'Materi pengantar kalkulus membahas konsep limit fungsi dan turunan beserta penerapannya dalam menyelesaikan masalah matematika.',
            pages: 24,
            downloads: 42,
            category: 'teori',
            tags: ['kalkulus', 'limit', 'turunan']
        },
        {
            id: 2,
            title: 'Video Pembelajaran - Aplikasi Turunan',
            type: 'video',
            size: '45 MB',
            uploadDate: '4 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            description: 'Video penjelasan tentang penerapan turunan dalam menyelesaikan masalah optimasi dan laju perubahan.',
            duration: '15:30',
            views: 38,
            category: 'video',
            tags: ['turunan', 'aplikasi', 'optimasi']
        },
        {
            id: 3,
            title: 'Slide Presentasi - Integral Tak Tentu',
            type: 'ppt',
            size: '8.2 MB',
            uploadDate: '3 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            description: 'Slide presentasi lengkap tentang integral tak tentu dan teknik-teknik integrasi dasar.',
            slides: 32,
            downloads: 51,
            category: 'presentasi',
            tags: ['integral', 'teknik integrasi']
        },
        {
            id: 4,
            title: 'Worksheet Latihan Soal - Trigonometri',
            type: 'doc',
            size: '1.8 MB',
            uploadDate: '2 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            description: 'Lembar kerja berisi latihan soal trigonometri untuk menguasai konsep identitas dan persamaan trigonometri.',
            questions: 25,
            downloads: 29,
            category: 'latihan',
            tags: ['trigonometri', 'latihan', 'soal']
        },
        {
            id: 5,
            title: 'Referensi Buku - Aljabar Linear',
            type: 'pdf',
            size: '12.3 MB',
            uploadDate: '1 Des 2023',
            uploader: 'Bu Sari, S.Pd.',
            description: 'Buku referensi lengkap tentang aljabar linear yang mencakup matriks, vektor, dan sistem persamaan linear.',
            pages: 156,
            downloads: 34,
            category: 'referensi',
            tags: ['aljabar', 'linear', 'matriks', 'vektor']
        }
    ]);

    const [filterCategory, setFilterCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('date');

    const categories = [
        { id: 'all', label: 'Semua Kategori' },
        { id: 'teori', label: 'Teori' },
        { id: 'video', label: 'Video' },
        { id: 'presentasi', label: 'Presentasi' },
        { id: 'latihan', label: 'Latihan' },
        { id: 'referensi', label: 'Referensi' }
    ];

    const getFileIcon = (type) => {
        const icons = {
            pdf: 'fas fa-file-pdf text-red-500',
            video: 'fas fa-file-video text-purple-500',
            ppt: 'fas fa-file-powerpoint text-orange-500',
            doc: 'fas fa-file-word text-blue-500',
            xls: 'fas fa-file-excel text-green-500',
            zip: 'fas fa-file-archive text-gray-500'
        };
        return icons[type] || 'fas fa-file text-gray-500';
    };

    const getCategoryColor = (category) => {
        const colors = {
            teori: 'bg-blue-100 text-blue-700',
            video: 'bg-purple-100 text-purple-700',
            presentasi: 'bg-orange-100 text-orange-700',
            latihan: 'bg-green-100 text-green-700',
            referensi: 'bg-yellow-100 text-yellow-700'
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    const getCategoryLabel = (category) => {
        const labels = {
            teori: 'Teori',
            video: 'Video',
            presentasi: 'Presentasi',
            latihan: 'Latihan',
            referensi: 'Referensi'
        };
        return labels[category] || category;
    };

    const filteredMaterials = materials.filter(material => {
        // Filter by category
        if (filterCategory !== 'all' && material.category !== filterCategory) return false;

        // Filter by search query
        if (searchQuery && !material.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !material.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }

        return true;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.uploadDate) - new Date(a.uploadDate);
        } else if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'downloads') {
            return b.downloads - a.downloads;
        }
        return 0;
    });

    const handleDownload = (material) => {
        console.log('Download material:', material);
        // Implement download functionality
    };

    const handlePreview = (material) => {
        console.log('Preview material:', material);
        // Implement preview functionality
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">Materi Pembelajaran</h3>
                        <p className="text-sm text-neutral-600 mt-1">
                            {filteredMaterials.length} dari {materials.length} materi
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                            <i className="fas fa-plus mr-2"></i>
                            Unggah Materi Baru
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari materi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="date">Terbaru</option>
                            <option value="title">Judul A-Z</option>
                            <option value="downloads">Populer</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Materials List */}
            <div className="divide-y divide-neutral-200">
                {filteredMaterials.map((material) => (
                    <div key={material.id} className="p-6 hover:bg-neutral-50">
                        <div className="flex flex-col lg:flex-row lg:items-start">
                            {/* File Icon */}
                            <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-4">
                                <i className={`${getFileIcon(material.type)} text-2xl`}></i>
                            </div>

                            {/* Material Info */}
                            <div className="flex-1">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                            {material.title}
                                        </h4>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            {material.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 mb-3 lg:mb-0">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(material.category)}`}>
                                            {getCategoryLabel(material.category)}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            {material.uploadDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Material Details */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-user-tie mr-2"></i>
                                        <span>{material.uploader}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-file mr-2"></i>
                                        <span>{material.size}</span>
                                    </div>
                                    {material.type === 'pdf' && (
                                        <div className="flex items-center">
                                            <i className="fas fa-file-alt mr-2"></i>
                                            <span>{material.pages} halaman</span>
                                        </div>
                                    )}
                                    {material.type === 'video' && (
                                        <div className="flex items-center">
                                            <i className="fas fa-play-circle mr-2"></i>
                                            <span>{material.duration}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <i className="fas fa-download mr-2"></i>
                                        <span>{material.downloads}× diunduh</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {material.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handlePreview(material)}
                                        className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                                    >
                                        <i className="fas fa-eye mr-2"></i>
                                        Preview
                                    </button>
                                    <button
                                        onClick={() => handleDownload(material)}
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                                    >
                                        <i className="fas fa-download mr-2"></i>
                                        Download
                                    </button>
                                    <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                        <i className="fas fa-share-alt"></i>
                                    </button>
                                    <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredMaterials.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-book-open text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Belum ada materi</h3>
                    <p className="text-neutral-500">
                        {searchQuery ? 'Tidak ditemukan materi dengan kata kunci tersebut.' : 'Guru belum mengunggah materi pembelajaran.'}
                    </p>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 px-4 py-2 text-primary hover:text-primary-dark"
                        >
                            Reset Pencarian
                        </button>
                    )}
                </div>
            )}

        </div>
    );
}