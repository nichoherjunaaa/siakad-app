// resources/js/Components/Assignments/AssignmentsList.jsx
import { useState } from 'react';

export default function AssignmentsList() {
    const [assignments] = useState([
        {
            id: 1,
            title: 'Laporan Praktikum Fisika - Gerak Parabola',
            subject: 'Fisika',
            teacher: 'Pak Budi, M.Pd.',
            status: 'completed',
            priority: 'high',
            dueDate: '2023-12-10',
            dueTime: '23:59',
            submissionDate: '2023-12-09',
            score: 92,
            maxScore: 100,
            type: 'Laporan',
            attachments: 3,
            description: 'Membuat laporan hasil praktikum gerak parabola dengan data pengamatan selama 3 minggu.',
            feedback: 'Laporan sangat lengkap dan analisis data akurat. Pertahankan!'
        },
        {
            id: 2,
            title: 'Essay Sejarah Perang Dunia II',
            subject: 'Sejarah',
            teacher: 'Bu Rina, S.Pd.',
            status: 'inProgress',
            priority: 'medium',
            dueDate: '2023-12-15',
            dueTime: '23:59',
            submissionDate: null,
            progress: 65,
            type: 'Essay',
            attachments: 1,
            description: 'Essay 1500 kata tentang pengaruh Perang Dunia II terhadap politik global.'
        },
        {
            id: 3,
            title: 'Soal Latihan Matematika - Integral',
            subject: 'Matematika',
            teacher: 'Bu Sari, S.Pd.',
            status: 'overdue',
            priority: 'high',
            dueDate: '2023-12-05',
            dueTime: '23:59',
            submissionDate: null,
            type: 'Latihan Soal',
            attachments: 2,
            description: 'Mengerjakan 50 soal integral tak tentu dan tertentu.'
        },
        {
            id: 4,
            title: 'Presentasi Biologi - Sistem Pencernaan',
            subject: 'Biologi',
            teacher: 'Bu Lisa, S.Si.',
            status: 'notStarted',
            priority: 'medium',
            dueDate: '2023-12-20',
            dueTime: '10:00',
            submissionDate: null,
            type: 'Presentasi',
            attachments: 0,
            description: 'Membuat presentasi 15 slide tentang sistem pencernaan manusia.'
        },
        {
            id: 5,
            title: 'Analisis Novel Laskar Pelangi',
            subject: 'Bahasa Indonesia',
            teacher: 'Bu Maya, S.Pd.',
            status: 'completed',
            priority: 'low',
            dueDate: '2023-12-08',
            dueTime: '23:59',
            submissionDate: '2023-12-08',
            score: 88,
            maxScore: 100,
            type: 'Analisis',
            attachments: 1,
            feedback: 'Analisis karakter cukup mendalam, namun perlu lebih banyak kutipan langsung dari novel.'
        }
    ]);

    const [expandedAssignment, setExpandedAssignment] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterSubject, setFilterSubject] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const getStatusColor = (status) => {
        const colors = {
            completed: 'bg-green-100 text-green-700 border-green-200',
            inProgress: 'bg-blue-100 text-blue-700 border-blue-200',
            notStarted: 'bg-gray-100 text-gray-700 border-gray-200',
            overdue: 'bg-red-100 text-red-700 border-red-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getPriorityColor = (priority) => {
        const colors = {
            high: 'bg-red-100 text-red-700 border-red-200',
            medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            low: 'bg-green-100 text-green-700 border-green-200'
        };
        return colors[priority] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getSubjectColor = (subject) => {
        const colors = {
            'Matematika': 'bg-purple-100 text-purple-700',
            'Fisika': 'bg-blue-100 text-blue-700',
            'Kimia': 'bg-green-100 text-green-700',
            'Biologi': 'bg-emerald-100 text-emerald-700',
            'Sejarah': 'bg-amber-100 text-amber-700',
            'Bahasa Indonesia': 'bg-orange-100 text-orange-700',
            'Bahasa Inggris': 'bg-red-100 text-red-700'
        };
        return colors[subject] || 'bg-gray-100 text-gray-700';
    };

    const getStatusText = (status) => {
        const texts = {
            completed: 'Selesai',
            inProgress: 'Dalam Proses',
            notStarted: 'Belum Dimulai',
            overdue: 'Terlambat'
        };
        return texts[status] || status;
    };

    const toggleExpand = (assignmentId) => {
        setExpandedAssignment(expandedAssignment === assignmentId ? null : assignmentId);
    };

    const getTimeRemaining = (dueDate, dueTime) => {
        const due = new Date(`${dueDate}T${dueTime}`);
        const now = new Date();
        const diffMs = due - now;
        
        if (diffMs < 0) return { text: 'Terlambat', color: 'text-red-600' };
        
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays === 0) return { text: 'Hari ini', color: 'text-orange-600' };
        if (diffDays === 1) return { text: 'Besok', color: 'text-orange-500' };
        if (diffDays <= 7) return { text: `${diffDays} hari lagi`, color: 'text-yellow-600' };
        return { text: `${diffDays} hari lagi`, color: 'text-green-600' };
    };

    const filteredAssignments = assignments.filter(assignment => {
        // Filter by status
        if (filterStatus !== 'all' && assignment.status !== filterStatus) return false;
        
        // Filter by subject
        if (filterSubject !== 'all' && assignment.subject !== filterSubject) return false;
        
        // Filter by search query
        if (searchQuery && !assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
            !assignment.subject.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        
        return true;
    });

    const subjects = [...new Set(assignments.map(a => a.subject))];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            {/* Table Header */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-neutral-900">Daftar Tugas</h3>
                        <p className="text-sm text-neutral-600">
                            {filteredAssignments.length} dari {assignments.length} tugas ditampilkan
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari tugas..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center space-x-2">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">Semua Status</option>
                                <option value="completed">Selesai</option>
                                <option value="inProgress">Dalam Proses</option>
                                <option value="notStarted">Belum Dimulai</option>
                                <option value="overdue">Terlambat</option>
                            </select>

                            <select
                                value={filterSubject}
                                onChange={(e) => setFilterSubject(e.target.value)}
                                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">Semua Mapel</option>
                                {subjects.map(subject => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assignments List */}
            <div className="divide-y divide-neutral-200">
                {filteredAssignments.map((assignment) => {
                    const isExpanded = expandedAssignment === assignment.id;
                    const timeRemaining = getTimeRemaining(assignment.dueDate, assignment.dueTime);
                    
                    return (
                        <div key={assignment.id} className="p-6 hover:bg-neutral-50">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                                <div className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                                    <div className="flex items-start mb-2">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${getSubjectColor(assignment.subject)}`}>
                                            <i className={`fas fa-${assignment.subject === 'Matematika' ? 'calculator' : 
                                                assignment.subject === 'Fisika' ? 'atom' : 
                                                assignment.subject === 'Kimia' ? 'flask' : 
                                                assignment.subject === 'Biologi' ? 'dna' : 
                                                assignment.subject === 'Bahasa Indonesia' ? 'book' : 
                                                assignment.subject === 'Bahasa Inggris' ? 'language' : 
                                                'history'} text-lg`}></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-lg text-neutral-900">
                                                {assignment.title}
                                            </h4>
                                            <div className="flex flex-wrap items-center gap-2 mt-1">
                                                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(assignment.status)}`}>
                                                    {getStatusText(assignment.status)}
                                                </span>
                                                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                                                    {assignment.priority === 'high' ? 'Tinggi' : 
                                                     assignment.priority === 'medium' ? 'Sedang' : 'Rendah'}
                                                </span>
                                                <span className="text-sm text-neutral-600">
                                                    <i className="fas fa-user-tie mr-1"></i>
                                                    {assignment.teacher}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-neutral-600 mt-2">
                                        {assignment.description}
                                    </p>
                                </div>

                                <div className="flex flex-col items-end space-y-3">
                                    {/* Deadline */}
                                    <div className="text-right">
                                        <div className="text-sm text-neutral-600">Deadline</div>
                                        <div className={`text-lg font-medium ${timeRemaining.color}`}>
                                            {timeRemaining.text}
                                        </div>
                                        <div className="text-sm text-neutral-500">
                                            {assignment.dueDate} • {assignment.dueTime}
                                        </div>
                                    </div>

                                    {/* Score/Progress */}
                                    {assignment.status === 'completed' ? (
                                        <div className="text-right">
                                            <div className="text-sm text-neutral-600">Nilai</div>
                                            <div className="text-2xl font-bold text-green-600">
                                                {assignment.score}/{assignment.maxScore}
                                            </div>
                                        </div>
                                    ) : assignment.status === 'inProgress' ? (
                                        <div className="text-right">
                                            <div className="text-sm text-neutral-600">Progress</div>
                                            <div className="text-2xl font-bold text-blue-600">
                                                {assignment.progress}%
                                            </div>
                                        </div>
                                    ) : null}

                                    {/* Expand Button */}
                                    <button
                                        onClick={() => toggleExpand(assignment.id)}
                                        className="p-2 rounded-lg hover:bg-neutral-100"
                                    >
                                        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-neutral-600`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Assignment Details */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Jenis Tugas</div>
                                    <div className="font-medium text-neutral-900">{assignment.type}</div>
                                </div>
                                
                                <div className="p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Lampiran</div>
                                    <div className="font-medium text-neutral-900">
                                        <i className="fas fa-paperclip mr-1"></i>
                                        {assignment.attachments} file
                                    </div>
                                </div>
                                
                                {assignment.submissionDate && (
                                    <div className="p-3 bg-neutral-50 rounded-lg">
                                        <div className="text-sm text-neutral-600 mb-1">Disubmit</div>
                                        <div className="font-medium text-neutral-900">{assignment.submissionDate}</div>
                                    </div>
                                )}
                                
                                {assignment.score && (
                                    <div className="p-3 bg-neutral-50 rounded-lg">
                                        <div className="text-sm text-neutral-600 mb-1">Status Penilaian</div>
                                        <div className="font-medium text-green-600">
                                            <i className="fas fa-check-circle mr-1"></i>
                                            Dinilai
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="mt-4 pt-4 border-t border-neutral-200">
                                    <h5 className="font-medium text-neutral-900 mb-3">Detail Tugas</h5>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Description */}
                                        <div>
                                            <h6 className="font-medium text-neutral-900 mb-2">Deskripsi Lengkap</h6>
                                            <p className="text-sm text-neutral-700 bg-neutral-50 p-4 rounded-lg">
                                                {assignment.description}
                                            </p>
                                            
                                            {/* Attachments */}
                                            {assignment.attachments > 0 && (
                                                <div className="mt-4">
                                                    <h6 className="font-medium text-neutral-900 mb-2">File Lampiran</h6>
                                                    <div className="space-y-2">
                                                        {[...Array(assignment.attachments)].map((_, i) => (
                                                            <div key={i} className="flex items-center p-3 bg-neutral-50 rounded-lg">
                                                                <i className="fas fa-file-pdf text-red-500 mr-3"></i>
                                                                <div className="flex-1">
                                                                    <div className="font-medium text-sm text-neutral-900">
                                                                        Lampiran-{i + 1}.pdf
                                                                    </div>
                                                                    <div className="text-xs text-neutral-500">2.5 MB</div>
                                                                </div>
                                                                <button className="text-primary hover:text-primary-dark">
                                                                    <i className="fas fa-download"></i>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Panel */}
                                        <div>
                                            {assignment.status === 'completed' && assignment.feedback && (
                                                <div className="mb-4">
                                                    <h6 className="font-medium text-neutral-900 mb-2">Feedback Guru</h6>
                                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                        <div className="flex items-start">
                                                            <i className="fas fa-comment-dots text-green-600 mt-1 mr-2"></i>
                                                            <p className="text-sm text-green-800">{assignment.feedback}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="space-y-3">
                                                {assignment.status !== 'completed' && (
                                                    <>
                                                        <button className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center justify-center">
                                                            <i className="fas fa-upload mr-2"></i>
                                                            Submit Tugas
                                                        </button>
                                                        {assignment.status === 'overdue' && (
                                                            <div className="text-center">
                                                                <button className="text-sm text-primary hover:text-primary-dark">
                                                                    <i className="fas fa-envelope mr-1"></i>
                                                                    Minta Perpanjangan Waktu
                                                                </button>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                                
                                                <div className="flex space-x-2">
                                                    <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                                        <i className="fas fa-eye mr-1"></i>
                                                        Preview
                                                    </button>
                                                    <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                                        <i className="fas fa-edit mr-1"></i>
                                                        Edit
                                                    </button>
                                                    <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                                        <i className="fas fa-share mr-1"></i>
                                                        Share
                                                    </button>
                                                </div>
                                                
                                                <button className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 flex items-center justify-center">
                                                    <i className="fas fa-calendar-plus mr-2"></i>
                                                    Tambah ke Kalender
                                                </button>
                                            </div>

                                            {/* Progress Bar for inProgress */}
                                            {assignment.status === 'inProgress' && (
                                                <div className="mt-4">
                                                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                                        <span>Progress Pengerjaan</span>
                                                        <span>{assignment.progress}%</span>
                                                    </div>
                                                    <div className="w-full bg-neutral-200 rounded-full h-2">
                                                        <div 
                                                            className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                                            style={{ width: `${assignment.progress}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                                        <span>Mulai: 5 Des 2023</span>
                                                        <span>Sisa: {100 - assignment.progress}%</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredAssignments.length === 0 && (
                <div className="p-12 text-center">
                    <i className="fas fa-tasks text-4xl text-neutral-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-neutral-700 mb-2">Tidak ada tugas</h3>
                    <p className="text-neutral-500">
                        {searchQuery ? 'Tidak ditemukan tugas dengan kata kunci tersebut.' : 'Belum ada tugas yang ditambahkan.'}
                    </p>
                    {searchQuery && (
                        <button 
                            onClick={() => {
                                setSearchQuery('');
                                setFilterStatus('all');
                                setFilterSubject('all');
                            }}
                            className="mt-4 px-4 py-2 text-primary hover:text-primary-dark"
                        >
                            Reset Filter
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}