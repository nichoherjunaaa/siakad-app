// resources/js/Components/Materials/RecentDownloads.jsx
import { useState } from 'react';

export default function RecentDownloads() {
    const [downloads] = useState([
        {
            id: 1,
            title: 'Turunan Fungsi Matematika',
            subject: 'Matematika',
            downloadedAt: 'Hari ini, 14:30',
            fileType: 'pdf',
            progress: 100
        },
        {
            id: 2,
            title: 'Hukum Newton - Fisika',
            subject: 'Fisika',
            downloadedAt: 'Kemarin, 10:15',
            fileType: 'ppt',
            progress: 100
        },
        {
            id: 3,
            title: 'Grammar Inggris',
            subject: 'Bahasa Inggris',
            downloadedAt: 'Sedang mendownload...',
            fileType: 'pdf',
            progress: 65
        },
        {
            id: 4,
            title: 'Struktur Sel Biologi',
            subject: 'Biologi',
            downloadedAt: '2 hari lalu',
            fileType: 'video',
            progress: 100
        }
    ]);

    const handleOpen = (downloadId) => {
        console.log('Open download:', downloadId);
        // Implement open functionality
    };

    const handleRemove = (downloadId) => {
        console.log('Remove download:', downloadId);
        // Implement remove functionality
    };

    const handleRetry = (downloadId) => {
        console.log('Retry download:', downloadId);
        // Implement retry functionality
    };

    const getFileTypeIcon = (type) => {
        const icons = {
            pdf: 'fas fa-file-pdf text-red-500',
            doc: 'fas fa-file-word text-blue-500',
            ppt: 'fas fa-file-powerpoint text-orange-500',
            video: 'fas fa-file-video text-purple-500'
        };
        return icons[type] || 'fas fa-file text-gray-500';
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Download Terbaru</h3>

            <div className="space-y-4">
                {downloads.map((download) => (
                    <div key={download.id} className="p-4 border border-neutral-200 rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start">
                                <i className={`${getFileTypeIcon(download.fileType)} text-xl mr-3 mt-1`}></i>
                                <div>
                                    <h4 className="font-medium text-neutral-900 line-clamp-1">
                                        {download.title}
                                    </h4>
                                    <div className="text-sm text-neutral-600">
                                        {download.subject}
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button
                                    onClick={() => handleOpen(download.id)}
                                    className="p-1 text-neutral-400 hover:text-primary"
                                    title="Buka"
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                </button>
                                <button
                                    onClick={() => handleRemove(download.id)}
                                    className="p-1 text-neutral-400 hover:text-red-500"
                                    title="Hapus"
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        {/* Download Status */}
                        <div className="flex items-center justify-between">
                            <div className="text-xs text-neutral-500">
                                {download.downloadedAt}
                            </div>
                            {download.progress < 100 ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${download.progress}%` }}
                                        ></div>
                                    </div>
                                    <button
                                        onClick={() => handleRetry(download.id)}
                                        className="text-xs text-primary hover:underline"
                                    >
                                        Coba Lagi
                                    </button>
                                </div>
                            ) : (
                                <div className="text-xs text-green-600">
                                    <i className="fas fa-check-circle mr-1"></i>
                                    Selesai
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                        <i className="fas fa-history text-primary mr-2"></i>
                        <span className="text-sm">Riwayat Download</span>
                    </button>
                    <button className="flex items-center justify-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                        <i className="fas fa-folder-open text-primary mr-2"></i>
                        <span className="text-sm">Buka Folder</span>
                    </button>
                </div>
            </div>
        </div>
    );
}