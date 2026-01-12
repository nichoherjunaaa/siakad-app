// resources/js/Components/Teachers/TeachersTable.jsx
import { useState, useMemo, useEffect } from 'react';
import { FaCalendarAlt, FaChalkboard, FaDownload, FaEdit, FaEnvelope, FaEye, FaSearch, FaTimes } from 'react-icons/fa';

export default function TeachersTable({ teachers: teachersFromServer }) {
    const [teachers, setTeachers] = useState(teachersFromServer || [])

    useEffect(() => {
        setTeachers(teachersFromServer)
        // console.log(femaleCount);
    }, [teachersFromServer])

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedPosition, setSelectedPosition] = useState('all');
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedTeachers, setSelectedTeachers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const [femaleTeachers, setFemaleTeachers] = useState(0);

    // Get unique values for filters
    const departments = useMemo(() => {
        return [...new Set(teachers.map(teacher => teacher.department))].sort();
    }, [teachers]);

    const statuses = useMemo(() => {
        return [...new Set(teachers.map(teacher => teacher.status))];
    }, [teachers]);

    const positions = useMemo(() => {
        return [...new Set(teachers.map(teacher => teacher.position))].sort();
    }, [teachers]);

    // Filter and sort teachers
    const filteredTeachers = useMemo(() => {
        let filtered = [...teachers];

        // Apply search filter
        // if (searchQuery) {
        //     filtered = filtered.filter(teacher =>
        //         teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        //         teacher.nip.includes(searchQuery) ||
        //         teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        //         teacher.department.toLowerCase().includes(searchQuery.toLowerCase())
        //     );
        // }

        // Apply department filter
        if (selectedDepartment !== 'all') {
            filtered = filtered.filter(teacher => teacher.department === selectedDepartment);
        }

        // Apply status filter
        if (selectedStatus !== 'all') {
            filtered = filtered.filter(teacher => teacher.status === selectedStatus);
        }

        // Apply position filter
        if (selectedPosition !== 'all') {
            filtered = filtered.filter(teacher => teacher.position === selectedPosition);
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

        //     if (sortField === 'experience') {
        //         aValue = parseInt(a.experience);
        //         bValue = parseInt(b.experience);
        //     }

        //     if (sortField === 'rating') {
        //         aValue = parseFloat(a.rating);
        //         bValue = parseFloat(b.rating);
        //     }

        //     if (sortDirection === 'asc') {
        //         return aValue > bValue ? 1 : -1;
        //     } else {
        //         return aValue < bValue ? 1 : -1;
        //     }
        // });

        return filtered;
    }, [teachers, searchQuery, selectedDepartment, selectedStatus, selectedPosition, sortField, sortDirection]);

    // Pagination
    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
    const paginatedTeachers = filteredTeachers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Selection handlers
    const toggleSelectAll = () => {
        if (selectedTeachers.length === paginatedTeachers.length) {
            setSelectedTeachers([]);
        } else {
            setSelectedTeachers(paginatedTeachers.map(t => t.id));
        }
    };

    const toggleSelectTeacher = (teacherId) => {
        setSelectedTeachers(prev => {
            if (prev.includes(teacherId)) {
                return prev.filter(id => id !== teacherId);
            } else {
                return [...prev, teacherId];
            }
        });
    };

    // Status colors
    const getStatusColor = (status) => {
        const colors = {
            active: 'bg-green-100 text-green-700',
            onLeave: 'bg-yellow-100 text-yellow-700',
            retired: 'bg-gray-100 text-gray-700',
            resigned: 'bg-red-100 text-red-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const getStatusLabel = (status) => {
        const labels = {
            active: 'Aktif',
            onLeave: 'Cuti',
            retired: 'Pensiun',
            resigned: 'Mengundurkan Diri'
        };
        return labels[status] || status;
    };

    // Gender icon
    const getGenderIcon = (gender) => {
        return gender === 'male' ? 'fas fa-mars text-blue-500' : 'fas fa-venus text-pink-500';
    };

    // Certification status
    const getCertificationStatus = (certification) => {
        if (certification === 'Sertifikasi Guru') {
            return { color: 'bg-green-100 text-green-700', label: 'Bersertifikat' };
        } else if (certification === 'Dalam Proses') {
            return { color: 'bg-yellow-100 text-yellow-700', label: 'Proses' };
        } else {
            return { color: 'bg-gray-100 text-gray-700', label: 'Belum' };
        }
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
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    // Calculate age
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    // Bulk actions
    const handleBulkAction = (action) => {
        console.log(`${action} selected teachers:`, selectedTeachers);
        // Implement bulk actions
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            {/* Table Header with Search and Bulk Actions */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-neutral-900">Daftar Guru & Staff</h3>
                        <p className="text-sm text-neutral-600">
                            {filteredTeachers.length} guru & staff ditemukan
                        </p>
                    </div>

                    <div className="flex items-center space-x-2">
                        {selectedTeachers.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-neutral-600">
                                    {selectedTeachers.length} terpilih
                                </span>
                                <button
                                    onClick={() => handleBulkAction('export')}
                                    className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                >
                                    <FaDownload className='mr-1' />
                                    Export
                                </button>
                                <button
                                    onClick={() => handleBulkAction('message')}
                                    className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                                >
                                    <FaEnvelope className='mr-1' />
                                    Kirim Pesan
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
                                placeholder="Cari guru (nama, NIP, email, bidang)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400' />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Bidang</option>
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
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
                                setSelectedDepartment('all');
                                setSelectedStatus('all');
                                setSelectedPosition('all');
                            }}
                            className="px-3 flex py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50"
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
                                    checked={selectedTeachers.length === paginatedTeachers.length && paginatedTeachers.length > 0}
                                    onChange={toggleSelectAll}
                                    className="rounded border-neutral-300 text-primary focus:ring-primary"
                                />
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('name')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Nama Guru
                                    {sortField === 'name' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('nip')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    NIP
                                    {sortField === 'nip' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('department')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Bidang
                                    {sortField === 'department' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left w-40">
                                <span className="font-medium text-neutral-700">Status</span>
                            </th>

                            <th className="p-4 text-left">
                                <span className="font-medium text-neutral-700">Aksi</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {paginatedTeachers.map((teacher) => {
                            const certStatus = getCertificationStatus(teacher.certification);
                            const age = calculateAge(teacher.birthDate);

                            return (
                                <tr
                                    key={teacher.id}
                                    className="hover:bg-neutral-50 group"
                                >
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedTeachers.includes(teacher.id)}
                                            onChange={() => toggleSelectTeacher(teacher.id)}
                                            className="rounded border-neutral-300 text-primary focus:ring-primary"
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="font-medium text-neutral-900">
                                                    {teacher.full_name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-neutral-900">
                                            {teacher.employee_number}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-medium text-neutral-900">
                                            {teacher.primary_subject}
                                        </span>
                                    </td>
                                    <td className="p-4 w-40">
                                        <div className="space-y-1">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStatusColor(teacher.status)}`}
                                            >
                                                {getStatusLabel(teacher.status)}
                                            </span>

                                        </div>
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
                                                className="p-2text-neutral-600 hover:text-primary hover:bg-blue-50 rounded-lg"
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="p-2 text-neutral-600 hover:text-primary hover:bg-blue-50 rounded-lg"
                                                title="Jadwal"
                                            >
                                                <FaCalendarAlt />
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
            {filteredTeachers.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-chalkboard-teacher text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Tidak ada guru</h3>
                    <p className="text-neutral-500">
                        {searchQuery ? 'Tidak ditemukan guru dengan kriteria tersebut.' : 'Belum ada data guru.'}
                    </p>
                    {searchQuery && (
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedDepartment('all');
                                setSelectedStatus('all');
                                setSelectedPosition('all');
                            }}
                            className="mt-4 px-4 py-2 text-primary hover:text-primary-dark"
                        >
                            Reset Pencarian
                        </button>
                    )}
                </div>
            )}

            {/* Pagination */}
            {filteredTeachers.length > 0 && (
                <div className="p-6 border-t border-neutral-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-neutral-600">
                                Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredTeachers.length)} dari {filteredTeachers.length} guru
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