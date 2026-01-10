// resources/js/Components/Materials/MaterialsHeader.jsx
import { useState } from 'react';

export default function MaterialsHeader({ user }) {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [searchQuery, setSearchQuery] = useState('');

    const stats = {
        total: user.totalMaterials || 48,
        downloaded: user.downloaded || 32,
        pending: (user.totalMaterials || 48) - (user.downloaded || 32),
        lastSync: 'Hari ini, 14:30'
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Implement search functionality
    };

    const handleUpload = () => {
        console.log('Upload material');
        // Implement upload functionality
    };

    const handleSync = () => {
        console.log('Sync materials');
        // Implement sync functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Materi Pembelajaran
                    </h1>
                    <p className="text-neutral-600">
                        Akses dan unduh materi pelajaran untuk mendukung pembelajaran Anda
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                    <button
                        onClick={handleUpload}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                    >
                        <i className="fas fa-upload mr-2"></i>
                        Upload
                    </button>
                    <button
                        onClick={handleSync}
                        className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white flex items-center"
                    >
                        <i className="fas fa-sync-alt mr-2"></i>
                        Sync
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-book text-blue-600"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">{stats.total}</div>
                            <div className="text-sm text-neutral-600">Total Materi</div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-download text-green-600"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">{stats.downloaded}</div>
                            <div className="text-sm text-neutral-600">Terdownload</div>
                        </div>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-clock text-orange-600"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">{stats.pending}</div>
                            <div className="text-sm text-neutral-600">Belum Didownload</div>
                        </div>
                    </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-history text-purple-600"></i>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-neutral-900">{stats.lastSync}</div>
                            <div className="text-sm text-neutral-600">Terakhir Sync</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and View Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <form onSubmit={handleSearch} className="relative mb-4 md:mb-0 md:w-96">
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                    <input
                        type="text"
                        placeholder="Cari materi, guru, atau mata pelajaran..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </form>

                <div className="flex items-center space-x-4">
                    <div className="flex bg-neutral-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                        >
                            <i className="fas fa-th-large"></i>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                        >
                            <i className="fas fa-list"></i>
                        </button>
                    </div>
                    <div className="text-sm text-neutral-500">
                        Menampilkan {viewMode === 'grid' ? 'grid' : 'list'}
                    </div>
                </div>
            </div>
        </div>
    );
}