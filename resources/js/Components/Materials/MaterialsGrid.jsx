// resources/js/Components/Materials/MaterialsGrid.jsx
import { useState } from 'react';

export default function MaterialsGrid() {
    const [materials] = useState([
        {
            id: 1,
            title: 'Turunan Fungsi Matematika',
            subject: 'Matematika',
            teacher: 'Bu Sari, S.Pd.',
            type: 'pdf',
            size: '2.4 MB',
            uploadDate: '2 hari lalu',
            downloadCount: 45,
            isDownloaded: true,
            isNew: true,
            description: 'Materi lengkap tentang turunan fungsi dengan contoh soal dan pembahasan.'
        },
        {
            id: 2,
            title: 'Hukum Newton - Fisika Dasar',
            subject: 'Fisika',
            teacher: 'Pak Budi, M.Pd.',
            type: 'ppt',
            size: '5.1 MB',
            uploadDate: '1 minggu lalu',
            downloadCount: 32,
            isDownloaded: true,
            isNew: false,
            description: 'Presentasi tentang hukum Newton dengan animasi dan contoh aplikasi.'
        },
        {
            id: 3,
            title: 'Tabel Periodik Unsur Kimia',
            subject: 'Kimia',
            teacher: 'Bu Lisa, S.Si.',
            type: 'doc',
            size: '1.8 MB',
            uploadDate: '3 hari lalu',
            downloadCount: 28,
            isDownloaded: false,
            isNew: true,
            description: 'Tabel periodik lengkap dengan sifat-sifat unsur kimia.'
        },
        {
            id: 4,
            title: 'Struktur Sel Biologi',
            subject: 'Biologi',
            teacher: 'Bu Rina, M.Si.',
            type: 'video',
            size: '25.4 MB',
            uploadDate: '2 minggu lalu',
            downloadCount: 67,
            isDownloaded: true,
            isNew: false,
            description: 'Video pembelajaran tentang struktur dan fungsi sel.'
        },
        {
            id: 5,
            title: 'Grammar Inggris - Present Tense',
            subject: 'Bahasa Inggris',
            teacher: 'Bu Maya, S.Pd.',
            type: 'pdf',
            size: '3.2 MB',
            uploadDate: '4 hari lalu',
            downloadCount: 41,
            isDownloaded: false,
            isNew: true,
            description: 'Panduan lengkap tentang present tense dalam bahasa Inggris.'
        },
        {
            id: 6,
            title: 'Perang Dunia II - Sejarah',
            subject: 'Sejarah',
            teacher: 'Pak Anton, M.Pd.',
            type: 'image',
            size: '4.5 MB',
            uploadDate: '1 bulan lalu',
            downloadCount: 23,
            isDownloaded: true,
            isNew: false,
            description: 'Infografis timeline Perang Dunia II dengan analisis.'
        },
        {
            id: 7,
            title: 'Sistem Pemerintahan Indonesia',
            subject: 'PKN',
            teacher: 'Pak Joko, M.Pd.',
            type: 'pdf',
            size: '2.9 MB',
            uploadDate: '2 minggu lalu',
            downloadCount: 19,
            isDownloaded: false,
            isNew: false,
            description: 'Materi tentang sistem pemerintahan Indonesia.'
        },
        {
            id: 8,
            title: 'Pengenalan Pemrograman Python',
            subject: 'Informatika',
            teacher: 'Pak Deni, S.Kom.',
            type: 'video',
            size: '48.2 MB',
            uploadDate: '5 hari lalu',
            downloadCount: 56,
            isDownloaded: true,
            isNew: true,
            description: 'Video tutorial dasar-dasar pemrograman Python.'
        }
    ]);

    const getFileTypeIcon = (type) => {
        const icons = {
            pdf: { icon: 'fas fa-file-pdf', color: 'text-red-500', bg: 'bg-red-100' },
            doc: { icon: 'fas fa-file-word', color: 'text-blue-500', bg: 'bg-blue-100' },
            ppt: { icon: 'fas fa-file-powerpoint', color: 'text-orange-500', bg: 'bg-orange-100' },
            video: { icon: 'fas fa-file-video', color: 'text-purple-500', bg: 'bg-purple-100' },
            image: { icon: 'fas fa-file-image', color: 'text-green-500', bg: 'bg-green-100' },
            other: { icon: 'fas fa-file', color: 'text-gray-500', bg: 'bg-gray-100' }
        };
        return icons[type] || icons.other;
    };

    const getSubjectColor = (subject) => {
        const colors = {
            Matematika: 'bg-blue-50 text-blue-700 border-blue-200',
            Fisika: 'bg-purple-50 text-purple-700 border-purple-200',
            Kimia: 'bg-green-50 text-green-700 border-green-200',
            Biologi: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            'Bahasa Inggris': 'bg-red-50 text-red-700 border-red-200',
            Sejarah: 'bg-orange-50 text-orange-700 border-orange-200',
            PKN: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            Informatika: 'bg-pink-50 text-pink-700 border-pink-200'
        };
        return colors[subject] || 'bg-gray-50 text-gray-700 border-gray-200';
    };

    const handleDownload = (materialId) => {
        console.log('Downloading material:', materialId);
        // Implement download functionality
    };

    const handlePreview = (materialId) => {
        console.log('Preview material:', materialId);
        // Implement preview functionality
    };

    const handleAddToFavorites = (materialId) => {
        console.log('Add to favorites:', materialId);
        // Implement favorites functionality
    };

    const formatDate = (dateString) => {
        // Simple date formatting
        return dateString;
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Materi Terbaru</h3>
                <div className="text-sm text-neutral-600">
                    Menampilkan {materials.length} materi
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {materials.map((material) => {
                    const fileType = getFileTypeIcon(material.type);
                    const subjectColor = getSubjectColor(material.subject);

                    return (
                        <div
                            key={material.id}
                            className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Material Header */}
                            <div className="p-4 border-b border-neutral-200">
                                <div className="flex justify-between items-start mb-3">
                                    <div className={`px-2 py-1 rounded-lg text-xs font-medium ${subjectColor}`}>
                                        {material.subject}
                                    </div>
                                    <div className="flex space-x-1">
                                        {material.isNew && (
                                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                                Baru
                                            </span>
                                        )}
                                        {material.isDownloaded && (
                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                                Terdownload
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* File Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className={`w-16 h-16 rounded-xl ${fileType.bg} flex items-center justify-center`}>
                                        <i className={`${fileType.icon} ${fileType.color} text-2xl`}></i>
                                    </div>
                                </div>

                                {/* Material Title */}
                                <h4 className="font-medium text-neutral-900 text-center mb-2 line-clamp-2">
                                    {material.title}
                                </h4>

                                {/* Teacher */}
                                <div className="text-sm text-neutral-600 text-center mb-3">
                                    <i className="fas fa-user-tie mr-1"></i>
                                    {material.teacher}
                                </div>

                                {/* Description */}
                                <p className="text-xs text-neutral-500 mb-4 line-clamp-2">
                                    {material.description}
                                </p>
                            </div>

                            {/* Material Footer */}
                            <div className="p-4 bg-neutral-50">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="text-xs text-neutral-600">
                                        <i className="fas fa-hdd mr-1"></i>
                                        {material.size}
                                    </div>
                                    <div className="text-xs text-neutral-600">
                                        <i className="fas fa-download mr-1"></i>
                                        {material.downloadCount}
                                    </div>
                                    <div className="text-xs text-neutral-600">
                                        <i className="far fa-clock mr-1"></i>
                                        {formatDate(material.uploadDate)}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        onClick={() => handlePreview(material.id)}
                                        className="flex items-center justify-center p-2 border border-neutral-300 rounded-lg hover:bg-white"
                                        title="Preview"
                                    >
                                        <i className="fas fa-eye text-neutral-600"></i>
                                    </button>
                                    <button
                                        onClick={() => handleDownload(material.id)}
                                        className={`flex items-center justify-center p-2 rounded-lg ${material.isDownloaded
                                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                            : 'bg-primary text-white hover:bg-primary-dark'
                                            }`}
                                        title={material.isDownloaded ? 'Sudah Didownload' : 'Download'}
                                    >
                                        {material.isDownloaded ? (
                                            <i className="fas fa-check"></i>
                                        ) : (
                                            <i className="fas fa-download"></i>
                                        )}
                                    </button>
                                    <button
                                        onClick={() => handleAddToFavorites(material.id)}
                                        className="flex items-center justify-center p-2 border border-neutral-300 rounded-lg hover:bg-white"
                                        title="Simpan ke Favorit"
                                    >
                                        <i className="far fa-star text-neutral-600"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination or Load More */}
            <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                    <i className="fas fa-plus mr-2"></i>
                    Muat Lebih Banyak Materi
                </button>
            </div>
        </div>
    );
}