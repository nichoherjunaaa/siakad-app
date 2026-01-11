// resources/js/Components/Students/StudentsTable.jsx
import { useState, useMemo } from 'react';

export default function StudentsTable() {
    const [students] = useState([
        {
            id: 'SM2024001',
            nis: '2024001',
            name: 'Ahmad Rizki',
            gender: 'male',
            class: 'XII IPA 1',
            birthDate: '2006-05-15',
            birthPlace: 'Jakarta',
            email: 'ahmad.rizki@student.sch.id',
            phone: '081234567890',
            address: 'Jl. Merdeka No. 123, Jakarta Pusat',
            parentName: 'Budi Santoso',
            parentPhone: '081234567891',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 85.5,
            attendance: '95%',
            lastActive: '2023-12-10'
        },
        {
            id: 'SM2024002',
            nis: '2024002',
            name: 'Siti Nurhaliza',
            gender: 'female',
            class: 'XII IPA 1',
            birthDate: '2006-08-22',
            birthPlace: 'Bandung',
            email: 'siti.nurhaliza@student.sch.id',
            phone: '081234567892',
            address: 'Jl. Asia Afrika No. 45, Bandung',
            parentName: 'Herman Susanto',
            parentPhone: '081234567893',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 92.0,
            attendance: '97%',
            lastActive: '2023-12-10'
        },
        {
            id: 'SM2024003',
            nis: '2024003',
            name: 'Bambang Pratama',
            gender: 'male',
            class: 'XII IPA 1',
            birthDate: '2006-03-10',
            birthPlace: 'Surabaya',
            email: 'bambang.pratama@student.sch.id',
            phone: '081234567894',
            address: 'Jl. Tunjungan No. 78, Surabaya',
            parentName: 'Agus Wijaya',
            parentPhone: '081234567895',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 78.3,
            attendance: '88%',
            lastActive: '2023-12-09'
        },
        {
            id: 'SM2024004',
            nis: '2024004',
            name: 'Dewi Lestari',
            gender: 'female',
            class: 'XII IPA 1',
            birthDate: '2006-11-30',
            birthPlace: 'Yogyakarta',
            email: 'dewi.lestari@student.sch.id',
            phone: '081234567896',
            address: 'Jl. Malioboro No. 12, Yogyakarta',
            parentName: 'Rudi Hartono',
            parentPhone: '081234567897',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 89.2,
            attendance: '94%',
            lastActive: '2023-12-10'
        },
        {
            id: 'SM2024005',
            nis: '2024005',
            name: 'Rizky Maulana',
            gender: 'male',
            class: 'XII IPA 1',
            birthDate: '2006-02-14',
            birthPlace: 'Medan',
            email: 'rizky.maulana@student.sch.id',
            phone: '081234567898',
            address: 'Jl. Gatot Subroto No. 56, Medan',
            parentName: 'Surya Dharma',
            parentPhone: '081234567899',
            status: 'transferred',
            joinDate: '2021-07-15',
            transferDate: '2023-11-30',
            averageScore: 76.8,
            attendance: '85%',
            lastActive: '2023-11-29'
        },
        {
            id: 'SM2024006',
            nis: '2024006',
            name: 'Ani Wijaya',
            gender: 'female',
            class: 'XII IPA 2',
            birthDate: '2006-07-18',
            birthPlace: 'Semarang',
            email: 'ani.wijaya@student.sch.id',
            phone: '081234567800',
            address: 'Jl. Pemuda No. 23, Semarang',
            parentName: 'Joko Susilo',
            parentPhone: '081234567801',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 91.5,
            attendance: '96%',
            lastActive: '2023-12-10'
        },
        {
            id: 'SM2024007',
            nis: '2024007',
            name: 'Eko Prasetyo',
            gender: 'male',
            class: 'XII IPA 2',
            birthDate: '2006-01-25',
            birthPlace: 'Malang',
            email: 'eko.prasetyo@student.sch.id',
            phone: '081234567802',
            address: 'Jl. Ijen No. 34, Malang',
            parentName: 'Slamet Riyadi',
            parentPhone: '081234567803',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 83.7,
            attendance: '92%',
            lastActive: '2023-12-09'
        },
        {
            id: 'SM2024008',
            nis: '2024008',
            name: 'Maya Sari',
            gender: 'female',
            class: 'XII IPA 2',
            birthDate: '2006-09-05',
            birthPlace: 'Denpasar',
            email: 'maya.sari@student.sch.id',
            phone: '081234567804',
            address: 'Jl. Hayam Wuruk No. 67, Denpasar',
            parentName: 'Wayan Sudarma',
            parentPhone: '081234567805',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 87.9,
            attendance: '93%',
            lastActive: '2023-12-10'
        },
        {
            id: 'SM2024009',
            nis: '2024009',
            name: 'Hendra Kurniawan',
            gender: 'male',
            class: 'XII IPA 3',
            birthDate: '2006-04-12',
            birthPlace: 'Makassar',
            email: 'hendra.kurniawan@student.sch.id',
            phone: '081234567806',
            address: 'Jl. Urip Sumoharjo No. 89, Makassar',
            parentName: 'Andi Malik',
            parentPhone: '081234567807',
            status: 'active',
            joinDate: '2021-07-15',
            averageScore: 79.4,
            attendance: '90%',
            lastActive: '2023-12-08'
        },
        {
            id: 'SM2024010',
            nis: '2024010',
            name: 'Linda Permata',
            gender: 'female',
            class: 'XII IPA 3',
            birthDate: '2006-12-08',
            birthPlace: 'Palembang',
            email: 'linda.permata@student.sch.id',
            phone: '081234567808',
            address: 'Jl. Jenderal Sudirman No. 101, Palembang',
            parentName: 'Roni Setiawan',
            parentPhone: '081234567809',
            status: 'dropout',
            joinDate: '2021-07-15',
            dropoutDate: '2023-10-15',
            averageScore: 72.5,
            attendance: '78%',
            lastActive: '2023-10-14'
        }
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Get unique classes for filter
    const classes = useMemo(() => {
        return [...new Set(students.map(student => student.class))].sort();
    }, [students]);

    // Get unique statuses for filter
    const statuses = useMemo(() => {
        return [...new Set(students.map(student => student.status))];
    }, [students]);

    // Filter and sort students
    const filteredStudents = useMemo(() => {
        let filtered = [...students];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(student =>
                student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                student.nis.includes(searchQuery) ||
                student.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply class filter
        if (selectedClass !== 'all') {
            filtered = filtered.filter(student => student.class === selectedClass);
        }

        // Apply status filter
        if (selectedStatus !== 'all') {
            filtered = filtered.filter(student => student.status === selectedStatus);
        }

        // Apply sorting
        filtered.sort((a, b) => {
            let aValue = a[sortField];
            let bValue = b[sortField];

            // Handle special sorting cases
            if (sortField === 'name') {
                aValue = a.name.toLowerCase();
                bValue = b.name.toLowerCase();
            }

            if (sortField === 'averageScore') {
                aValue = parseFloat(a.averageScore);
                bValue = parseFloat(b.averageScore);
            }

            if (sortField === 'attendance') {
                aValue = parseFloat(a.attendance);
                bValue = parseFloat(b.attendance);
            }

            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return filtered;
    }, [students, searchQuery, selectedClass, selectedStatus, sortField, sortDirection]);

    // Pagination
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
    const paginatedStudents = filteredStudents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Selection handlers
    const toggleSelectAll = () => {
        if (selectedStudents.length === paginatedStudents.length) {
            setSelectedStudents([]);
        } else {
            setSelectedStudents(paginatedStudents.map(s => s.id));
        }
    };

    const toggleSelectStudent = (studentId) => {
        setSelectedStudents(prev => {
            if (prev.includes(studentId)) {
                return prev.filter(id => id !== studentId);
            } else {
                return [...prev, studentId];
            }
        });
    };

    // Status colors
    const getStatusColor = (status) => {
        const colors = {
            active: 'bg-green-100 text-green-700',
            graduated: 'bg-blue-100 text-blue-700',
            transferred: 'bg-yellow-100 text-yellow-700',
            dropout: 'bg-red-100 text-red-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const getStatusLabel = (status) => {
        const labels = {
            active: 'Aktif',
            graduated: 'Lulus',
            transferred: 'Pindah',
            dropout: 'Drop Out'
        };
        return labels[status] || status;
    };

    // Gender icon
    const getGenderIcon = (gender) => {
        return gender === 'male' ? 'fas fa-mars text-blue-500' : 'fas fa-venus text-pink-500';
    };

    // Sort handler
    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    // Bulk actions
    const handleBulkAction = (action) => {
        console.log(`${action} selected students:`, selectedStudents);
        // Implement bulk actions
    };

    // Export selected students
    const handleExportSelected = () => {
        console.log('Export selected students:', selectedStudents);
        // Implement export functionality
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            {/* Table Header with Search and Bulk Actions */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-neutral-900">Daftar Siswa</h3>
                        <p className="text-sm text-neutral-600">
                            {filteredStudents.length} siswa ditemukan
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        {selectedStudents.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-neutral-600">
                                    {selectedStudents.length} terpilih
                                </span>
                                <button
                                    onClick={() => handleBulkAction('export')}
                                    className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                >
                                    <i className="fas fa-download mr-1"></i>
                                    Export
                                </button>
                                <button
                                    onClick={() => handleBulkAction('delete')}
                                    className="px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100"
                                >
                                    <i className="fas fa-trash mr-1"></i>
                                    Hapus
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari siswa (nama, NIS, email)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Kelas</option>
                            {classes.map(className => (
                                <option key={className} value={className}>{className}</option>
                            ))}
                        </select>

                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Status</option>
                            {statuses.map(status => (
                                <option key={status} value={status}>
                                    {getStatusLabel(status)}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedClass('all');
                                setSelectedStatus('all');
                            }}
                            className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                        >
                            <i className="fas fa-times mr-1"></i>
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-neutral-50">
                        <tr>
                            <th className="p-4 w-12">
                                <input
                                    type="checkbox"
                                    checked={selectedStudents.length === paginatedStudents.length && paginatedStudents.length > 0}
                                    onChange={toggleSelectAll}
                                    className="rounded border-neutral-300 text-primary focus:ring-primary"
                                />
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('name')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Nama Siswa
                                    {sortField === 'name' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('nis')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    NIS
                                    {sortField === 'nis' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('class')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Kelas
                                    {sortField === 'class' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <span className="font-medium text-neutral-700">Jenis Kelamin</span>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('averageScore')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Rata-rata Nilai
                                    {sortField === 'averageScore' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('attendance')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Kehadiran
                                    {sortField === 'attendance' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <span className="font-medium text-neutral-700">Status</span>
                            </th>
                            <th className="p-4 text-left">
                                <span className="font-medium text-neutral-700">Aksi</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {paginatedStudents.map((student) => (
                            <tr 
                                key={student.id}
                                className="hover:bg-neutral-50 group"
                            >
                                <td className="p-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedStudents.includes(student.id)}
                                        onChange={() => toggleSelectStudent(student.id)}
                                        className="rounded border-neutral-300 text-primary focus:ring-primary"
                                    />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                            <i className={`fas fa-user text-primary`}></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-neutral-900">
                                                {student.name}
                                            </div>
                                            <div className="text-sm text-neutral-600">
                                                {student.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="font-medium text-neutral-900">
                                        {student.nis}
                                    </div>
                                    <div className="text-sm text-neutral-600">
                                        {student.id}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="font-medium text-neutral-900">
                                        {student.class}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <i className={`${getGenderIcon(student.gender)} mr-2`}></i>
                                        <span className="text-neutral-700">
                                            {student.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className="w-16 bg-neutral-100 rounded-full h-2 mr-3">
                                            <div 
                                                className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                                                style={{ width: `${student.averageScore}%` }}
                                            ></div>
                                        </div>
                                        <span className="font-medium text-neutral-900">
                                            {student.averageScore}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className="w-16 bg-neutral-100 rounded-full h-2 mr-3">
                                            <div 
                                                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                style={{ width: `${parseFloat(student.attendance)}%` }}
                                            ></div>
                                        </div>
                                        <span className="font-medium text-neutral-900">
                                            {student.attendance}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(student.status)}`}>
                                        {getStatusLabel(student.status)}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button 
                                            className="p-2 text-neutral-600 hover:text-primary hover:bg-primary/10 rounded-lg"
                                            title="Lihat Detail"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button 
                                            className="p-2 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                            title="Edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                            title="Hapus"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                        <button 
                                            className="p-2 text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                                            title="Kirim Pesan"
                                        >
                                            <i className="fas fa-envelope"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {filteredStudents.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-users text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Tidak ada siswa</h3>
                    <p className="text-neutral-500">
                        {searchQuery ? 'Tidak ditemukan siswa dengan kriteria tersebut.' : 'Belum ada data siswa.'}
                    </p>
                    {searchQuery && (
                        <button 
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedClass('all');
                                setSelectedStatus('all');
                            }}
                            className="mt-4 px-4 py-2 text-primary hover:text-primary-dark"
                        >
                            Reset Pencarian
                        </button>
                    )}
                </div>
            )}

            {/* Pagination */}
            {filteredStudents.length > 0 && (
                <div className="p-6 border-t border-neutral-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-neutral-600">
                                Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredStudents.length)} dari {filteredStudents.length} siswa
                            </p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-3 py-2 rounded-lg ${
                                    currentPage === 1 
                                        ? 'text-neutral-400 cursor-not-allowed' 
                                        : 'text-neutral-700 hover:bg-neutral-100'
                                }`}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }
                                
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-10 h-10 rounded-lg ${
                                            currentPage === pageNum
                                                ? 'bg-primary text-white'
                                                : 'text-neutral-700 hover:bg-neutral-100'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 rounded-lg ${
                                    currentPage === totalPages 
                                        ? 'text-neutral-400 cursor-not-allowed' 
                                        : 'text-neutral-700 hover:bg-neutral-100'
                                }`}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(parseInt(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm"
                            >
                                <option value="10">10 per halaman</option>
                                <option value="25">25 per halaman</option>
                                <option value="50">50 per halaman</option>
                                <option value="100">100 per halaman</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}