// resources/js/Components/Materials/MaterialsList.jsx
import { useState } from 'react';

export default function MaterialsList() {
    const [materials] = useState([
        {
            id: 1,
            title: 'Turunan Fungsi Matematika',
            subject: 'Matematika',
            teacher: 'Bu Sari, S.Pd.',
            type: 'pdf',
            size: '2.4 MB',
            uploadDate: '11 Mar 2024',
            downloadCount: 45,
            isDownloaded: true,
            chapters: 5,
            pages: 24
        },
        {
            id: 2,
            title: 'Hukum Newton - Fisika Dasar',
            subject: 'Fisika',
            teacher: 'Pak Budi, M.Pd.',
            type: 'ppt',
            size: '5.1 MB',
            uploadDate: '5 Mar 2024',
            downloadCount: 32,
            isDownloaded: true,
            chapters: 3,
            pages: 18
        },
        {
            id: 3,
            title: 'Tabel Periodik Unsur Kimia',
            subject: 'Kimia',
            teacher: 'Bu Lisa, S.Si.',
            type: 'doc',
            size: '1.8 MB',
            uploadDate: '9 Mar 2024',
            downloadCount: 28,
            isDownloaded: false,
            chapters: 2,
            pages: 12
        },
        {
            id: 4,
            title: 'Struktur Sel Biologi',
            subject: 'Biologi',
            teacher: 'Bu Rina, M.Si.',
            type: 'video',
            size: '25.4 MB',
            uploadDate: '28 Feb 2024',
            downloadCount: 67,
            isDownloaded: true,
            duration: '15:32',
            chapters: 4
        },
        {
            id: 5,
            title: 'Grammar Inggris - Present Tense',
            subject: 'Bahasa Inggris',
            teacher: 'Bu Maya, S.Pd.',
            type: 'pdf',
            size: '3.2 MB',
            uploadDate: '8 Mar 2024',
            downloadCount: 41,
            isDownloaded: false,
            chapters: 6,
            pages: 30
        }
    ]);

    const [sortBy, setSortBy] = useState('newest');
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    const getFileTypeIcon = (type) => {
        const icons = {
            pdf: { icon: 'fas fa-file-pdf', color: 'text-red-500' },
            doc: { icon: 'fas fa-file-word', color: 'text-blue-500' },
            ppt: { icon: 'fas fa-file-powerpoint', color: 'text-orange-500' },
            video: { icon: 'fas fa-file-video', color: 'text-purple-500' },
            image: { icon: 'fas fa-file-image', color: 'text-green-500' }
        };
        return icons[type] || { icon: 'fas fa-file', color: 'text-gray-500' };
    };

    const handleSelectMaterial = (materialId) => {
        setSelectedMaterials(prev => {
            if (prev.includes(materialId)) {
                return prev.filter(id => id !== materialId);
            } else {
                return [...prev, materialId];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedMaterials.length === materials.length) {
            setSelectedMaterials([]);
        } else {
            setSelectedMaterials(materials.map(m => m.id));
        }
    };

    const handleBulkDownload = () => {
        if (selectedMaterials.length > 0) {
            console.log('Bulk download:', selectedMaterials);
            // Implement bulk download
        }
    };

    const handleDownload = (materialId) => {
        console.log('Download material:', materialId);
        // Implement download
    };

    const handlePreview = (materialId) => {
        console.log('Preview material:', materialId);
        // Implement preview
    };

    const handleShare = (materialId) => {
        console.log('Share material:', materialId);
        // Implement share
    };

    const sortedMaterials = [...materials].sort((a, b) => {
        switch(sortBy) {
            case 'newest':
                return new Date(b.uploadDate) - new Date(a.uploadDate);
            case 'oldest':
                return new Date(a.uploadDate) - new Date(b.uploadDate);
            case 'name':
                return a.title.localeCompare(b.title);
            case 'popular':
                return b.downloadCount - a.downloadCount;
            default:
                return 0;
        }
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            {/* List Header */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-neutral-900">Daftar Materi Lengkap</h3>
                        <p className="text-sm text-neutral-600">
                            {materials.length} materi tersedia
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        {/* Bulk Actions */}
                        {selectedMaterials.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-neutral-600">
                                    {selectedMaterials.length} terpilih
                                </span>
                                <button
                                    onClick={handleBulkDownload}
                                    className="px-3 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark"
                                >
                                    <i className="fas fa-download mr-1"></i>
                                    Download Semua
                                </button>
                            </div>
                        )}

                        {/* Sort Options */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-neutral-600">Urutkan:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="newest">Terbaru</option>
                                <option value="oldest">Terlama</option>
                                <option value="name">Nama A-Z</option>
                                <option value="popular">Paling Populer</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Materials Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-neutral-50">
                        <tr>
                            <th className="p-4 text-left">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedMaterials.length === materials.length && materials.length > 0}
                                        onChange={handleSelectAll}
                                        className="rounded border-neutral-300 text-primary focus:ring-primary"
                                    />
                                </div>
                            </th>
                            <th className="p-4 text-left font-medium text-neutral-700">Materi</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Mapel</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Guru</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Ukuran</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Downloads</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Tanggal</th>
                            <th className="p-4 text-left font-medium text-neutral-700">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {sortedMaterials.map((material) => {
                            const fileType = getFileTypeIcon(material.type);
                            const isSelected = selectedMaterials.includes(material.id);

                            return (
                                <tr 
                                    key={material.id}
                                    className={`hover:bg-neutral-50 ${isSelected ? 'bg-blue-50' : ''}`}
                                >
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleSelectMaterial(material.id)}
                                            className="rounded border-neutral-300 text-primary focus:ring-primary"
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <i className={`${fileType.icon} ${fileType.color} text-xl mr-3`}></i>
                                            <div>
                                                <div className="font-medium text-neutral-900">
                                                    {material.title}
                                                </div>
                                                <div className="text-sm text-neutral-500">
                                                    {material.type.toUpperCase()} • 
                                                    {material.chapters} bab • 
                                                    {material.pages ? ` ${material.pages} halaman` : ''}
                                                    {material.duration ? ` • ${material.duration}` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="inline-block px-2 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-700">
                                            {material.subject}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm text-neutral-900">{material.teacher}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm text-neutral-700">{material.size}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <i className="fas fa-download text-neutral-400 mr-2"></i>
                                            <span className="text-sm text-neutral-700">{material.downloadCount}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-sm text-neutral-700">{material.uploadDate}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handlePreview(material.id)}
                                                className="p-2 text-neutral-600 hover:text-primary hover:bg-neutral-100 rounded-lg"
                                                title="Preview"
                                            >
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDownload(material.id)}
                                                className={`p-2 rounded-lg ${material.isDownloaded
                                                        ? 'text-green-600 hover:bg-green-100'
                                                        : 'text-primary hover:bg-blue-100'
                                                    }`}
                                                title={material.isDownloaded ? 'Sudah Didownload' : 'Download'}
                                            >
                                                <i className={material.isDownloaded ? "fas fa-check" : "fas fa-download"}></i>
                                            </button>
                                            <button
                                                onClick={() => handleShare(material.id)}
                                                className="p-2 text-neutral-600 hover:text-purple-600 hover:bg-purple-100 rounded-lg"
                                                title="Bagikan"
                                            >
                                                <i className="fas fa-share-alt"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
            {/* Empty State */}
            {materials.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-file-alt text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Belum ada materi</h3>
                    <p className="text-neutral-500">Materi akan muncul di sini setelah diupload oleh guru.</p>
                </div>
            )}
        </div>
    );
}