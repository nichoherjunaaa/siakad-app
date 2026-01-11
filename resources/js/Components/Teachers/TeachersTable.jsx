// resources/js/Components/Teachers/TeachersTable.jsx
import { useState, useMemo } from 'react';

export default function TeachersTable() {
    const [teachers] = useState([
        {
            id: 'GRU2024001',
            nip: '198305152006041001',
            name: 'Bu Sari, S.Pd.',
            gender: 'female',
            birthDate: '1983-05-15',
            birthPlace: 'Jakarta',
            email: 'sari.matematika@sekolah.sch.id',
            phone: '081234567890',
            address: 'Jl. Merdeka No. 123, Jakarta Pusat',
            department: 'Matematika',
            position: 'Guru Mata Pelajaran',
            status: 'active',
            joinDate: '2006-07-01',
            experience: '17 tahun',
            education: 'S1 Pendidikan Matematika',
            certification: 'Sertifikasi Guru',
            certificationYear: '2010',
            classes: ['XII IPA 1', 'XII IPA 2'],
            subjects: ['Matematika', 'Matematika Lanjutan'],
            schedule: 'Senin-Rabu, 07:30-14:30',
            office: 'Guru-101',
            rating: 4.8,
            lastActive: '2023-12-10'
        },
        {
            id: 'GRU2024002',
            nip: '197808222003021002',
            name: 'Pak Budi, M.Pd.',
            gender: 'male',
            birthDate: '1978-08-22',
            birthPlace: 'Bandung',
            email: 'budi.fisika@sekolah.sch.id',
            phone: '081234567891',
            address: 'Jl. Asia Afrika No. 45, Bandung',
            department: 'Fisika',
            position: 'Kepala Lab Fisika',
            status: 'active',
            joinDate: '2003-02-01',
            experience: '20 tahun',
            education: 'S2 Pendidikan Fisika',
            certification: 'Sertifikasi Guru',
            certificationYear: '2009',
            classes: ['XII IPA 1', 'XI IPA 1'],
            subjects: ['Fisika', 'Fisika Terapan'],
            schedule: 'Selasa-Kamis, 08:00-15:00',
            office: 'Lab-102',
            rating: 4.6,
            lastActive: '2023-12-10'
        },
        {
            id: 'GRU2024003',
            nip: '198512102010041003',
            name: 'Bu Lisa, S.Si.',
            gender: 'female',
            birthDate: '1985-12-10',
            birthPlace: 'Surabaya',
            email: 'lisa.kimia@sekolah.sch.id',
            phone: '081234567892',
            address: 'Jl. Tunjungan No. 78, Surabaya',
            department: 'Kimia',
            position: 'Guru Mata Pelajaran',
            status: 'active',
            joinDate: '2010-04-01',
            experience: '13 tahun',
            education: 'S1 Kimia',
            certification: 'Sertifikasi Guru',
            certificationYear: '2012',
            classes: ['XII IPA 1', 'XII IPA 3'],
            subjects: ['Kimia', 'Kimia Organik'],
            schedule: 'Rabu-Jumat, 08:30-15:30',
            office: 'Lab-103',
            rating: 4.5,
            lastActive: '2023-12-09'
        },
        {
            id: 'GRU2024004',
            nip: '197211301998032004',
            name: 'Bu Rina, M.Si.',
            gender: 'female',
            birthDate: '1972-11-30',
            birthPlace: 'Yogyakarta',
            email: 'rina.biologi@sekolah.sch.id',
            phone: '081234567893',
            address: 'Jl. Malioboro No. 12, Yogyakarta',
            department: 'Biologi',
            position: 'Wakil Kepala Sekolah',
            status: 'active',
            joinDate: '1998-03-01',
            experience: '25 tahun',
            education: 'S2 Biologi',
            certification: 'Sertifikasi Guru',
            certificationYear: '2007',
            classes: ['XII IPA 1', 'XI IPA 2'],
            subjects: ['Biologi', 'Biologi Molekuler'],
            schedule: 'Senin-Kamis, 07:00-14:00',
            office: 'Wakasek-104',
            rating: 4.7,
            lastActive: '2023-12-10'
        },
        {
            id: 'GRU2024005',
            nip: '199002142015041005',
            name: 'Bu Maya, S.Pd.',
            gender: 'female',
            birthDate: '1990-02-14',
            birthPlace: 'Medan',
            email: 'maya.bahasa@sekolah.sch.id',
            phone: '081234567894',
            address: 'Jl. Gatot Subroto No. 56, Medan',
            department: 'Bahasa Inggris',
            position: 'Guru Mata Pelajaran',
            status: 'active',
            joinDate: '2015-04-01',
            experience: '8 tahun',
            education: 'S1 Pendidikan Bahasa Inggris',
            certification: 'Dalam Proses',
            certificationYear: null,
            classes: ['XII IPA 1', 'XII IPA 2'],
            subjects: ['Bahasa Inggris', 'Conversation'],
            schedule: 'Selasa-Jumat, 09:00-16:00',
            office: 'Guru-105',
            rating: 4.4,
            lastActive: '2023-12-10'
        },
        {
            id: 'GRU2024006',
            nip: '198007182005121006',
            name: 'Pak Agus, S.Pd.',
            gender: 'male',
            birthDate: '1980-07-18',
            birthPlace: 'Semarang',
            email: 'agus.bahasa@sekolah.sch.id',
            phone: '081234567895',
            address: 'Jl. Pemuda No. 23, Semarang',
            department: 'Bahasa Indonesia',
            position: 'Guru Mata Pelajaran',
            status: 'onLeave',
            joinDate: '2005-12-01',
            experience: '18 tahun',
            education: 'S1 Pendidikan Bahasa Indonesia',
            certification: 'Sertifikasi Guru',
            certificationYear: '2011',
            classes: ['XII IPA 2', 'XII IPA 3'],
            subjects: ['Bahasa Indonesia', 'Sastra'],
            schedule: 'Senin-Rabu, 08:00-15:00',
            office: 'Guru-106',
            rating: 4.3,
            lastActive: '2023-11-30',
            leaveStart: '2023-12-01',
            leaveEnd: '2023-12-31',
            leaveReason: 'Cuti Tahunan'
        },
        {
            id: 'GRU2024007',
            nip: '196801252000031007',
            name: 'Pak Joko, S.Pd.',
            gender: 'male',
            birthDate: '1968-01-25',
            birthPlace: 'Malang',
            email: 'joko.sejarah@sekolah.sch.id',
            phone: '081234567896',
            address: 'Jl. Ijen No. 34, Malang',
            department: 'Sejarah',
            position: 'Guru Senior',
            status: 'active',
            joinDate: '2000-03-01',
            experience: '23 tahun',
            education: 'S1 Pendidikan Sejarah',
            certification: 'Sertifikasi Guru',
            certificationYear: '2008',
            classes: ['XII IPS 1', 'XII IPS 2'],
            subjects: ['Sejarah', 'Sejarah Dunia'],
            schedule: 'Selasa-Kamis, 08:30-15:30',
            office: 'Guru-107',
            rating: 4.2,
            lastActive: '2023-12-09'
        },
        {
            id: 'GRU2024008',
            nip: '199209052018032008',
            name: 'Bu Dina, S.Pd.',
            gender: 'female',
            birthDate: '1992-09-05',
            birthPlace: 'Denpasar',
            email: 'dina.seni@sekolah.sch.id',
            phone: '081234567897',
            address: 'Jl. Hayam Wuruk No. 67, Denpasar',
            department: 'Seni Budaya',
            position: 'Guru Mata Pelajaran',
            status: 'active',
            joinDate: '2018-03-01',
            experience: '5 tahun',
            education: 'S1 Pendidikan Seni',
            certification: 'Belum',
            certificationYear: null,
            classes: ['XII IPA 1', 'XII IPA 2', 'XII IPA 3'],
            subjects: ['Seni Budaya', 'Seni Rupa'],
            schedule: 'Rabu-Jumat, 10:00-17:00',
            office: 'Studio-108',
            rating: 4.1,
            lastActive: '2023-12-10'
        },
        {
            id: 'GRU2024009',
            nip: '197504122005121009',
            name: 'Pak Hendra, M.Pd.',
            gender: 'male',
            birthDate: '1975-04-12',
            birthPlace: 'Makassar',
            email: 'hendra.olahraga@sekolah.sch.id',
            phone: '081234567898',
            address: 'Jl. Urip Sumoharjo No. 89, Makassar',
            department: 'Olahraga',
            position: 'Kepala Lab Olahraga',
            status: 'active',
            joinDate: '2005-12-01',
            experience: '18 tahun',
            education: 'S2 Pendidikan Olahraga',
            certification: 'Sertifikasi Guru',
            certificationYear: '2010',
            classes: ['XII IPA 1', 'XI IPA 1', 'X IPA 1'],
            subjects: ['Olahraga', 'Kesehatan'],
            schedule: 'Senin-Kamis, 07:30-14:30',
            office: 'Lab-109',
            rating: 4.5,
            lastActive: '2023-12-08'
        },
        {
            id: 'GRU2024010',
            nip: '195812082005121010',
            name: 'Bu Sri, S.Pd.',
            gender: 'female',
            birthDate: '1958-12-08',
            birthPlace: 'Palembang',
            email: 'sri.bk@sekolah.sch.id',
            phone: '081234567899',
            address: 'Jl. Jenderal Sudirman No. 101, Palembang',
            department: 'BK',
            position: 'Guru BK',
            status: 'retired',
            joinDate: '2005-12-01',
            experience: '18 tahun',
            education: 'S1 Bimbingan Konseling',
            certification: 'Sertifikasi Guru',
            certificationYear: '2010',
            classes: [],
            subjects: ['Bimbingan Konseling'],
            schedule: 'Senin-Jumat, 08:00-15:00',
            office: 'BK-110',
            rating: 4.6,
            lastActive: '2023-10-31',
            retirementDate: '2023-11-01'
        }
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedPosition, setSelectedPosition] = useState('all');
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedTeachers, setSelectedTeachers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

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
        if (searchQuery) {
            filtered = filtered.filter(teacher =>
                teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                teacher.nip.includes(searchQuery) ||
                teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                teacher.department.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

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
        filtered.sort((a, b) => {
            let aValue = a[sortField];
            let bValue = b[sortField];

            // Handle special sorting cases
            if (sortField === 'name') {
                aValue = a.name.toLowerCase();
                bValue = b.name.toLowerCase();
            }

            if (sortField === 'experience') {
                aValue = parseInt(a.experience);
                bValue = parseInt(b.experience);
            }

            if (sortField === 'rating') {
                aValue = parseFloat(a.rating);
                bValue = parseFloat(b.rating);
            }

            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

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
                                    <i className="fas fa-download mr-1"></i>
                                    Export
                                </button>
                                <button
                                    onClick={() => handleBulkAction('message')}
                                    className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                                >
                                    <i className="fas fa-envelope mr-1"></i>
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
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
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
                            <th className="p-4 text-left">
                                <span className="font-medium text-neutral-700">Jabatan</span>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('experience')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Pengalaman
                                    {sortField === 'experience' && (
                                        <i className={`fas fa-arrow-${sortDirection === 'asc' ? 'up' : 'down'} ml-1`}></i>
                                    )}
                                </button>
                            </th>
                            <th className="p-4 text-left">
                                <button
                                    onClick={() => handleSort('rating')}
                                    className="flex items-center font-medium text-neutral-700 hover:text-neutral-900"
                                >
                                    Rating
                                    {sortField === 'rating' && (
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
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                                <i className="fas fa-chalkboard-teacher text-primary"></i>
                                            </div>
                                            <div>
                                                <div className="font-medium text-neutral-900">
                                                    {teacher.name}
                                                </div>
                                                <div className="text-sm text-neutral-600">
                                                    <div className="flex items-center">
                                                        <i className={`${getGenderIcon(teacher.gender)} mr-1`}></i>
                                                        <span>{age} tahun • {formatDate(teacher.birthDate)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-neutral-900">
                                            {teacher.nip}
                                        </div>
                                        <div className="text-sm text-neutral-600">
                                            {teacher.id}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-medium text-neutral-900">
                                            {teacher.department}
                                        </span>
                                        <div className="text-sm text-neutral-600">
                                            {teacher.subjects.join(', ')}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-neutral-900">
                                            {teacher.position}
                                        </div>
                                        <div className="text-sm text-neutral-600">
                                            {teacher.education}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="w-16 bg-neutral-100 rounded-full h-2 mr-3">
                                                <div 
                                                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                    style={{ 
                                                        width: `${Math.min(100, parseInt(teacher.experience) * 5)}%` 
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="font-medium text-neutral-900">
                                                {teacher.experience}
                                            </span>
                                        </div>
                                        <div className="text-xs text-neutral-500 mt-1">
                                            Bergabung: {formatDate(teacher.joinDate)}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="flex mr-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <i
                                                        key={star}
                                                        className={`fas fa-star ${
                                                            star <= Math.floor(teacher.rating)
                                                                ? 'text-yellow-500'
                                                                : star === Math.ceil(teacher.rating) && teacher.rating % 1 >= 0.5
                                                                ? 'text-yellow-300'
                                                                : 'text-gray-300'
                                                        }`}
                                                    ></i>
                                                ))}
                                            </div>
                                            <span className="font-medium text-neutral-900">
                                                {teacher.rating}
                                            </span>
                                        </div>
                                        <div className={`px-2 py-1 rounded-md text-xs mt-1 ${certStatus.color}`}>
                                            {certStatus.label}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="space-y-1">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(teacher.status)}`}>
                                                {getStatusLabel(teacher.status)}
                                            </span>
                                            {teacher.status === 'onLeave' && teacher.leaveReason && (
                                                <div className="text-xs text-neutral-500">
                                                    {teacher.leaveReason}
                                                </div>
                                            )}
                                            {teacher.status === 'retired' && teacher.retirementDate && (
                                                <div className="text-xs text-neutral-500">
                                                    Pensiun: {formatDate(teacher.retirementDate)}
                                                </div>
                                            )}
                                        </div>
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
                                                className="p-2 text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                                                title="Kirim Pesan"
                                            >
                                                <i className="fas fa-envelope"></i>
                                            </button>
                                            <button 
                                                className="p-2 text-neutral-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                                                title="Jadwal"
                                            >
                                                <i className="fas fa-calendar-alt"></i>
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