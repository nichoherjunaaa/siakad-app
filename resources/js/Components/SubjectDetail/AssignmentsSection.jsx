// resources/js/Components/SubjectDetail/AssignmentsSection.jsx
import { useState } from 'react';

export default function AssignmentsSection() {
    const [assignments] = useState([
        {
            id: 1,
            title: 'Tugas 1: Aplikasi Turunan dalam Optimasi',
            description: 'Kerjakan 10 soal aplikasi turunan dalam masalah optimasi. Tulis langkah penyelesaian secara lengkap dan sistematis.',
            type: 'individual',
            status: 'completed',
            dueDate: '2023-12-10',
            dueTime: '23:59',
            submissionDate: '2023-12-09',
            maxScore: 100,
            score: 92,
            weight: 15,
            attachments: ['Soal.pdf', 'Petunjuk.pdf'],
            feedback: 'Pengerjaan sangat baik, langkah-langkah sistematis dan jawaban tepat. Pertahankan!',
            submittedFile: 'Tugas_1_Ahmad_Rizki.pdf'
        },
        {
            id: 2,
            title: 'Proyek Kelompok: Analisis Fungsi dengan Turunan',
            description: 'Buat analisis fungsi kompleks menggunakan konsep turunan. Presentasikan hasil dalam bentuk laporan dan presentasi.',
            type: 'group',
            status: 'inProgress',
            dueDate: '2023-12-15',
            dueTime: '23:59',
            progress: 65,
            maxScore: 100,
            weight: 20,
            attachments: ['Guidelines.pdf', 'Template.docx'],
            groupMembers: ['Ahmad Rizki', 'Siti Nurhaliza', 'Bambang Pratama']
        },
        {
            id: 3,
            title: 'Kuis Online: Konsep Limit',
            description: 'Kuis online tentang konsep limit fungsi. Waktu pengerjaan 30 menit, tidak bisa diulang.',
            type: 'quiz',
            status: 'upcoming',
            dueDate: '2023-12-12',
            dueTime: '14:00',
            duration: '30 menit',
            maxScore: 100,
            weight: 10,
            questions: 15,
            attachments: ['Kisi-kisi.pdf']
        },
        {
            id: 4,
            title: 'Tugas 2: Integral Tak Tentu',
            description: 'Kerjakan integral tak tentu dengan berbagai teknik integrasi. Kumpulkan dalam bentuk file PDF.',
            type: 'individual',
            status: 'overdue',
            dueDate: '2023-12-05',
            dueTime: '23:59',
            maxScore: 100,
            weight: 15,
            attachments: ['Soal.pdf'],
            latePenalty: '10% per hari'
        },
        {
            id: 5,
            title: 'Presentasi: Penerapan Integral',
            description: 'Presentasikan penerapan integral dalam kehidupan sehari-hari. Durasi presentasi 10 menit.',
            type: 'presentation',
            status: 'notStarted',
            dueDate: '2023-12-20',
            dueTime: '10:00',
            maxScore: 100,
            weight: 20,
            duration: '10 menit',
            attachments: ['Rubrik.pdf']
        }
    ]);

    const [filterStatus, setFilterStatus] = useState('all');
    const [filterType, setFilterType] = useState('all');
    const [expandedAssignment, setExpandedAssignment] = useState(null);

    const getStatusColor = (status) => {
        const colors = {
            completed: 'bg-green-100 text-green-700 border-green-200',
            inProgress: 'bg-blue-100 text-blue-700 border-blue-200',
            upcoming: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            overdue: 'bg-red-100 text-red-700 border-red-200',
            notStarted: 'bg-gray-100 text-gray-700 border-gray-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getStatusLabel = (status) => {
        const labels = {
            completed: 'Selesai',
            inProgress: 'Dalam Proses',
            upcoming: 'Akan Datang',
            overdue: 'Terlambat',
            notStarted: 'Belum Dimulai'
        };
        return labels[status] || status;
    };

    const getTypeColor = (type) => {
        const colors = {
            individual: 'bg-purple-100 text-purple-700',
            group: 'bg-blue-100 text-blue-700',
            quiz: 'bg-orange-100 text-orange-700',
            presentation: 'bg-pink-100 text-pink-700'
        };
        return colors[type] || 'bg-gray-100 text-gray-700';
    };

    const getTypeLabel = (type) => {
        const labels = {
            individual: 'Individu',
            group: 'Kelompok',
            quiz: 'Kuis',
            presentation: 'Presentasi'
        };
        return labels[type] || type;
    };

    const getTimeRemaining = (dueDate, dueTime) => {
        const due = new Date(`${dueDate}T${dueTime}`);
        const now = new Date();
        const diffMs = due - now;

        if (diffMs < 0) return { text: 'Terlambat', color: 'text-red-600' };

        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        if (diffHours < 24) return { text: `${diffHours} jam lagi`, color: 'text-orange-600' };

        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays === 1) return { text: 'Besok', color: 'text-orange-500' };
        return { text: `${diffDays} hari lagi`, color: 'text-green-600' };
    };

    const toggleExpand = (assignmentId) => {
        setExpandedAssignment(expandedAssignment === assignmentId ? null : assignmentId);
    };

    const filteredAssignments = assignments.filter(assignment => {
        if (filterStatus !== 'all' && assignment.status !== filterStatus) return false;
        if (filterType !== 'all' && assignment.type !== filterType) return false;
        return true;
    });

    const handleSubmitAssignment = (assignment) => {
        console.log('Submit assignment:', assignment);
        // Implement submit functionality
    };

    const handleStartQuiz = (assignment) => {
        console.log('Start quiz:', assignment);
        // Implement quiz functionality
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            <div className="p-6 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">Tugas & Assignment</h3>
                        <p className="text-sm text-neutral-600 mt-1">
                            {assignments.filter(a => a.status === 'completed').length} dari {assignments.length} tugas selesai
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Status</option>
                            <option value="completed">Selesai</option>
                            <option value="inProgress">Dalam Proses</option>
                            <option value="upcoming">Akan Datang</option>
                            <option value="overdue">Terlambat</option>
                            <option value="notStarted">Belum Dimulai</option>
                        </select>

                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                            <option value="all">Semua Jenis</option>
                            <option value="individual">Individu</option>
                            <option value="group">Kelompok</option>
                            <option value="quiz">Kuis</option>
                            <option value="presentation">Presentasi</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Assignments List */}
            <div className="divide-y divide-neutral-200">
                {filteredAssignments.map((assignment) => {
                    const timeRemaining = getTimeRemaining(assignment.dueDate, assignment.dueTime);

                    return (
                        <div key={assignment.id} className="p-6 hover:bg-neutral-50">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <h4 className="font-bold text-lg text-neutral-900 mr-3">
                                            {assignment.title}
                                        </h4>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                                            {getStatusLabel(assignment.status)}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ml-2 ${getTypeColor(assignment.type)}`}>
                                            {getTypeLabel(assignment.type)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600 mb-3">
                                        {assignment.description}
                                    </p>
                                </div>

                                <div className="flex flex-col items-start lg:items-end mt-3 lg:mt-0">
                                    <div className={`text-lg font-medium mb-1 ${timeRemaining.color}`}>
                                        {timeRemaining.text}
                                    </div>
                                    <div className="text-sm text-neutral-600">
                                        Deadline: {assignment.dueDate} • {assignment.dueTime}
                                    </div>
                                    {assignment.score && (
                                        <div className="text-lg font-bold text-green-600 mt-1">
                                            {assignment.score}/{assignment.maxScore}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Assignment Details */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="p-3 bg-neutral-50 rounded-lg">
                                    <div className="text-sm text-neutral-600 mb-1">Bobot</div>
                                    <div className="font-medium text-neutral-900">{assignment.weight}%</div>
                                </div>
                                {assignment.duration && (
                                    <div className="p-3 bg-neutral-50 rounded-lg">
                                        <div className="text-sm text-neutral-600 mb-1">Durasi</div>
                                        <div className="font-medium text-neutral-900">{assignment.duration}</div>
                                    </div>
                                )}
                                {assignment.questions && (
                                    <div className="p-3 bg-neutral-50 rounded-lg">
                                        <div className="text-sm text-neutral-600 mb-1">Jumlah Soal</div>
                                        <div className="font-medium text-neutral-900">{assignment.questions}</div>
                                    </div>
                                )}
                                {assignment.progress && (
                                    <div className="p-3 bg-neutral-50 rounded-lg">
                                        <div className="text-sm text-neutral-600 mb-1">Progress</div>
                                        <div className="font-medium text-blue-600">{assignment.progress}%</div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    {assignment.attachments && assignment.attachments.length > 0 && (
                                        <button className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center">
                                            <i className="fas fa-paperclip mr-1"></i>
                                            {assignment.attachments.length} lampiran
                                        </button>
                                    )}
                                    <button
                                        onClick={() => toggleExpand(assignment.id)}
                                        className="px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center"
                                    >
                                        <i className={`fas fa-chevron-${expandedAssignment === assignment.id ? 'up' : 'down'} mr-1`}></i>
                                        Detail
                                    </button>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {assignment.status === 'completed' ? (
                                        <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 flex items-center">
                                            <i className="fas fa-check-circle mr-2"></i>
                                            Sudah Dikumpulkan
                                        </button>
                                    ) : assignment.status === 'inProgress' ? (
                                        <button
                                            onClick={() => handleSubmitAssignment(assignment)}
                                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                                        >
                                            <i className="fas fa-upload mr-2"></i>
                                            Kumpulkan Tugas
                                        </button>
                                    ) : assignment.type === 'quiz' && assignment.status === 'upcoming' ? (
                                        <button
                                            onClick={() => handleStartQuiz(assignment)}
                                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                                        >
                                            <i className="fas fa-play mr-2"></i>
                                            Mulai Kuis
                                        </button>
                                    ) : assignment.status === 'overdue' ? (
                                        <button
                                            onClick={() => handleSubmitAssignment(assignment)}
                                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 flex items-center"
                                        >
                                            <i className="fas fa-exclamation-triangle mr-2"></i>
                                            Kumpulkan Sekarang
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleSubmitAssignment(assignment)}
                                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                                        >
                                            <i className="fas fa-pencil-alt mr-2"></i>
                                            Kerjakan Tugas
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {expandedAssignment === assignment.id && (
                                <div className="mt-4 pt-4 border-t border-neutral-200">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Left Column */}
                                        <div>
                                            {/* Attachments */}
                                            {assignment.attachments && assignment.attachments.length > 0 && (
                                                <div className="mb-4">
                                                    <h5 className="font-medium text-neutral-900 mb-3">File Lampiran</h5>
                                                    <div className="space-y-2">
                                                        {assignment.attachments.map((file, index) => (
                                                            <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                                <div className="flex items-center">
                                                                    <i className="fas fa-file-pdf text-red-500 mr-3"></i>
                                                                    <div>
                                                                        <div className="font-medium text-sm text-neutral-900">{file}</div>
                                                                        <div className="text-xs text-neutral-500">PDF • 2.5 MB</div>
                                                                    </div>
                                                                </div>
                                                                <button className="text-primary hover:text-primary-dark">
                                                                    <i className="fas fa-download"></i>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Group Members */}
                                            {assignment.groupMembers && (
                                                <div>
                                                    <h5 className="font-medium text-neutral-900 mb-3">Anggota Kelompok</h5>
                                                    <div className="space-y-2">
                                                        {assignment.groupMembers.map((member, index) => (
                                                            <div key={index} className="flex items-center p-2 bg-neutral-50 rounded-lg">
                                                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                                                    <i className="fas fa-user text-primary text-sm"></i>
                                                                </div>
                                                                <span className="text-sm text-neutral-700">{member}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column */}
                                        <div>
                                            {/* Feedback */}
                                            {assignment.feedback && (
                                                <div className="mb-4">
                                                    <h5 className="font-medium text-neutral-900 mb-3">Feedback Guru</h5>
                                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                        <div className="flex items-start">
                                                            <i className="fas fa-comment-dots text-green-600 mt-1 mr-2"></i>
                                                            <p className="text-sm text-green-800">{assignment.feedback}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Submitted File */}
                                            {assignment.submittedFile && (
                                                <div className="mb-4">
                                                    <h5 className="font-medium text-neutral-900 mb-3">File yang Dikumpulkan</h5>
                                                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                                        <div className="flex items-center">
                                                            <i className="fas fa-file-pdf text-blue-500 mr-3"></i>
                                                            <div>
                                                                <div className="font-medium text-sm text-neutral-900">
                                                                    {assignment.submittedFile}
                                                                </div>
                                                                <div className="text-xs text-neutral-500">
                                                                    Dikumpulkan: {assignment.submissionDate}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="text-primary hover:text-primary-dark">
                                                            <i className="fas fa-download"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Progress Bar for inProgress */}
                                            {assignment.progress && (
                                                <div>
                                                    <h5 className="font-medium text-neutral-900 mb-3">Progress Pengerjaan</h5>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-sm text-neutral-600">
                                                            <span>Progress</span>
                                                            <span>{assignment.progress}%</span>
                                                        </div>
                                                        <div className="w-full bg-neutral-200 rounded-full h-2">
                                                            <div
                                                                className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                                                style={{ width: `${assignment.progress}%` }}
                                                            ></div>
                                                        </div>
                                                        <div className="text-xs text-neutral-500">
                                                            Estimasi selesai: {assignment.dueDate}
                                                        </div>
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
                    <p className="text-neutral-500">Belum ada tugas yang diberikan untuk mata pelajaran ini.</p>
                </div>
            )}

            {/* Assignment Summary */}
            <div className="p-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">
                            {assignments.filter(a => a.status === 'completed').length}
                        </div>
                        <div className="text-sm text-neutral-600">Selesai</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">
                            {assignments.filter(a => a.status === 'inProgress').length}
                        </div>
                        <div className="text-sm text-neutral-600">Dalam Proses</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="text-lg font-bold text-red-700">
                            {assignments.filter(a => a.status === 'overdue').length}
                        </div>
                        <div className="text-sm text-neutral-600">Terlambat</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="text-lg font-bold text-yellow-700">
                            {assignments.filter(a => a.status === 'upcoming').length}
                        </div>
                        <div className="text-sm text-neutral-600">Akan Datang</div>
                    </div>
                </div>
            </div>
        </div>
    );
}