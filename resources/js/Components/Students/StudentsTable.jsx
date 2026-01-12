// resources/js/Components/Students/StudentsTable.jsx
import { usePage } from '@inertiajs/react';
import { useState, useEffect, useMemo } from 'react';
import { FaEye, FaEdit, FaTrash, FaEnvelope, FaUsers, FaChevronLeft, FaChevronRight, FaDownload, FaUser, FaSearch, FaTimes } from 'react-icons/fa';
export default function StudentsTable({ students: studentsFromServer }) {
    const [students, setStudents] = useState(studentsFromServer || []);

    useEffect(() => {
        setStudents(studentsFromServer || []);
        console.log(studentsFromServer);

    }, [studentsFromServer]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

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
        // filtered.sort((a, b) => {
        //     let aValue = a[sortField];
        //     let bValue = b[sortField];

        //     // Handle special sorting cases
        //     if (sortField === 'name') {
        //         aValue = a.name.toLowerCase();
        //         bValue = b.name.toLowerCase();
        //     }

        //     if (sortField === 'averageScore') {
        //         aValue = parseFloat(a.averageScore);
        //         bValue = parseFloat(b.averageScore);
        //     }

        //     if (sortField === 'attendance') {
        //         aValue = parseFloat(a.attendance);
        //         bValue = parseFloat(b.attendance);
        //     }

        //     if (sortDirection === 'asc') {
        //         return aValue > bValue ? 1 : -1;
        //     } else {
        //         return aValue < bValue ? 1 : -1;
        //     }
        // });

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
                                    <FaDownload />
                                    Export
                                </button>
                                <button
                                    onClick={() => handleBulkAction('delete')}
                                    className="px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100"
                                >
                                    <FaTrash />
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
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Kelas</option>
                            {classes.map(className => (
                                <option key={className} value={className}>{className}</option>
                            ))}
                        </select> */}

                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-5 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
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
                            className="px-5 py-2 text-sm border flex items-center border-neutral-300 rounded-lg hover:bg-neutral-50"
                        >
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
                            <th className="p-9 text-left">
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
                                        <div>
                                            <div className="font-medium text-neutral-900">
                                                {student.full_name}
                                            </div>
                                            <div className="text-sm text-neutral-600">
                                                {student.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">

                                    <div className="text-sm text-neutral-600">
                                        {student.student_number}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="font-medium text-neutral-900">
                                        {student.class_room.grade_level}-{student.class_room.major}-{student.class_room.name}
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
                                <td className="p-4 w-34">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStatusColor(student.status)}`}
                                    >
                                        {getStatusLabel(student.status)}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-2 text-neutral-600 hover:text-primary hover:bg-primary/10 rounded-lg"
                                            title="Lihat Detail"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            className="p-2 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                            title="Hapus"
                                        >
                                            <FaTrash />
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
                    <FaUsers className="text-4xl text-neutral-300 mb-4" />
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
                                className={`px-3 py-2 rounded-lg ${currentPage === 1
                                    ? 'text-neutral-400 cursor-not-allowed'
                                    : 'text-neutral-700 hover:bg-neutral-100'
                                    }`}
                            >
                                <FaChevronLeft />
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
                                        className={`w-10 h-10 rounded-lg ${currentPage === pageNum
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
                                className={`px-3 py-2 rounded-lg ${currentPage === totalPages
                                    ? 'text-neutral-400 cursor-not-allowed'
                                    : 'text-neutral-700 hover:bg-neutral-100'
                                    }`}
                            >
                                <FaChevronRight />
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